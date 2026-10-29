"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/styles/behindTheLens.css";
import { BlogPost, DEFAULT_BLOG_POSTS, fetchBlogPosts } from "@/lib/supabaseBlog";

/**
 * Reusable Camera Viewfinder Video Container
 * Implements exact hover interaction:
 * - Scale 1.08 over 0.5s cubic-bezier(0.33, 1, 0.68, 1)
 * - Dark overlay rgba(0,0,0,0.25) over 0.4s
 * - Centered '+' icon inside 70px circle scaling 0.7 to 1.0 over 0.3s
 * - White L-shaped corner brackets (12px, 1.5px border, 15px inset) in all 4 corners
 */
interface VideoContainerProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
  title?: string;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  videoUrl,
  posterUrl,
  className = "",
  title = "Blog video visual",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => {});
    }
  }, [videoUrl]);

  return (
    <div className={`btl-video-container ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterUrl}
        aria-label={title}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="btl-dark-overlay" aria-hidden="true" />

      {/* Centered '+' Icon inside 70px Circle */}
      <div className="btl-plus-icon-circle" aria-hidden="true">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>

      {/* White 'L-shaped' Corner Brackets (Rangefinder Viewfinder) */}
      <div className="btl-bracket btl-bracket-tl" aria-hidden="true" />
      <div className="btl-bracket btl-bracket-tr" aria-hidden="true" />
      <div className="btl-bracket btl-bracket-bl" aria-hidden="true" />
      <div className="btl-bracket btl-bracket-br" aria-hidden="true" />
    </div>
  );
};

export interface BehindTheLensBlogProps {
  onViewAllClick?: () => void;
}

export const BehindTheLensBlog: React.FC<BehindTheLensBlogProps> = ({ onViewAllClick }) => {
  const [posts, setPosts] = useState<BlogPost[]>(DEFAULT_BLOG_POSTS);

  useEffect(() => {
    let isMounted = true;
    fetchBlogPosts().then((data) => {
      if (isMounted && data && data.length > 0) {
        setPosts(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const featuredPost = posts.find((p) => p.type === "featured") || posts[0];
  const standardPosts = posts.filter((p) => p !== featuredPost).slice(0, 3);

  return (
    <section className="behind-the-lens-root" aria-label="Behind the Lens Photography & Tech Blog">
      <div className="behind-the-lens-container">
        {/* ── Section Header ── */}
        <header>
          <span className="btl-badge">Blog &amp; Insights</span>
          <h2 className="btl-heading">Behind the lens</h2>
          <div className="btl-header-bottom">
            <p className="btl-subtitle">
              Thoughts, insights, and stories from our creative journey. Take a peek into our development process, compliance playbooks, and recent client systems.
            </p>
            <button
              type="button"
              onClick={onViewAllClick}
              className="btl-view-all-btn"
              aria-label="View all blog posts"
            >
              View all posts
            </button>
          </div>
        </header>

        {/* ── Featured Post Card ── */}
        {featuredPost && (
          <article className="btl-featured-card" aria-label={`Featured: ${featuredPost.title}`}>
            {/* Left Column: Autoplaying Video with High-Res Poster */}
            <Link
              href={featuredPost.url}
              className="block relative w-full h-full"
              aria-label={`Read ${featuredPost.title}`}
            >
              <VideoContainer
                videoUrl={featuredPost.video_url}
                posterUrl={featuredPost.poster_url || "/videos/blog-featured-poster.webp"}
                className="btl-featured-video-wrapper"
                title={featuredPost.title}
              />
            </Link>

            {/* Right Column: Post Information */}
            <div className="btl-featured-content">
              {featuredPost.badge && (
                <span className="btl-must-read-badge">{featuredPost.badge}</span>
              )}

              <h3 className="btl-featured-title">
                <Link
                  href={featuredPost.url}
                  className="hover:text-black transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h3>

              {featuredPost.description && (
                <p className="btl-featured-desc">{featuredPost.description}</p>
              )}

              <footer className="btl-featured-footer">
                <span className="btl-author-name">
                  {featuredPost.author || "By Saim Dev"}
                </span>
                <span
                  className="btl-category-badge"
                  style={{ backgroundColor: featuredPost.category_color }}
                >
                  {featuredPost.category}
                </span>
              </footer>
            </div>
          </article>
        )}

        {/* ── Blog Grid (3 Standard Cards) ── */}
        <div className="btl-blog-grid">
          {standardPosts.map((post, idx) => (
            <article key={post.id || idx} className="btl-grid-card">
              <Link
                href={post.url}
                className="block"
                aria-label={`Read ${post.title}`}
              >
                <VideoContainer
                  videoUrl={post.video_url}
                  posterUrl={post.poster_url || `/videos/blog-standard-${idx + 1}-poster.webp`}
                  className="btl-grid-video-wrapper"
                  title={post.title}
                />
              </Link>
              <div className="btl-grid-meta">
                <h4 className="btl-grid-title">
                  <Link
                    href={post.url}
                    className="hover:text-black transition-colors"
                  >
                    {post.title}
                  </Link>
                </h4>
                <span
                  className="btl-category-badge"
                  style={{ backgroundColor: post.category_color }}
                >
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheLensBlog;
