"use client";

import React, { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

export const HeroCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    // Desktop only (>=1024px), fine pointers, no reduced motion, and capable CPU
    const isDesktop = window.innerWidth >= 1024;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasDecentSpecs = (navigator.hardwareConcurrency || 4) >= 4;

    if (isDesktop && !reducedMotion && isFinePointer && hasDecentSpecs) {
      setCanRender3D(true);
    }
  }, []);

  useEffect(() => {
    if (!canRender3D || !containerRef.current) return;

    let isDisposed = false;
    let animFrameId: number;
    let cleanupFn: (() => void) | undefined;

    // Dynamically import Three.js so it is completely code-split and not in the initial bundle
    import("three").then((THREE) => {
      if (isDisposed || !containerRef.current) return;

      const container = containerRef.current;
      const width = container.clientWidth || 800;
      const height = container.clientHeight || 600;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 7;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        });
      } catch {
        // WebGL not supported or context blocked
        return;
      }

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // Create a delicate geometric torus knot particle array
      const geometry = new THREE.TorusKnotGeometry(1.9, 0.45, 120, 20, 2, 3);
      const positions = geometry.attributes.position.array;
      const particleCount = positions.length / 3;

      const particleGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      const colorArray = new Float32Array(particleCount * 3);

      // Saim Dev brand colors: Electric Lime (#b5f900 -> 0.71, 0.98, 0.0) & Zinc Glow (0.8, 0.8, 0.85)
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] = positions[i * 3];
        posArray[i * 3 + 1] = positions[i * 3 + 1];
        posArray[i * 3 + 2] = positions[i * 3 + 2];

        // Gradient highlight: some lime, some zinc white
        const isLime = i % 4 === 0;
        if (isLime) {
          colorArray[i * 3] = 0.71;
          colorArray[i * 3 + 1] = 0.98;
          colorArray[i * 3 + 2] = 0.0;
        } else {
          colorArray[i * 3] = 0.45;
          colorArray[i * 3 + 1] = 0.48;
          colorArray[i * 3 + 2] = 0.52;
        }
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.038,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      // Subtle mouse interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handlePointerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
      };

      window.addEventListener("pointermove", handlePointerMove, { passive: true });

      // Pause render loop when off-screen to save 100% CPU/GPU
      let isVisible = true;
      const observer = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0]?.isIntersecting ?? false;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      // Resize handler
      const handleResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener("resize", handleResize, { passive: true });

      // Clock for continuous gentle rotation
      let clock = 0;
      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        if (!isVisible) return;

        clock += 0.005;
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        particleSystem.rotation.y = clock * 0.8 + mouseX * 0.6;
        particleSystem.rotation.x = clock * 0.4 + mouseY * 0.4;

        renderer.render(scene, camera);
      };

      animate();

      cleanupFn = () => {
        cancelAnimationFrame(animFrameId);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        observer.disconnect();

        geometry.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    });

    return () => {
      isDisposed = true;
      if (cleanupFn) cleanupFn();
    };
  }, [canRender3D]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[680px] h-[480px] lg:h-[620px] pointer-events-none z-0 overflow-hidden select-none opacity-85"
    >
      {/* Static Fallback (Always rendered on mobile/reduced-motion; acts as ambient backdrop behind 3D) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#b5f900]/10 via-[#27272a]/20 to-transparent blur-[90px] pointer-events-none" />
      </div>
    </div>
  );
};
