import React from 'react';

const marqueeImagesRow1 = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const marqueeImagesRow2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const MarqueeSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] py-16 sm:py-24 overflow-hidden flex flex-col gap-4">
      {/* Row 1 */}
      <div className="flex gap-3 w-max animate-[marquee_30s_linear_infinite]">
        {[...marqueeImagesRow1, ...marqueeImagesRow1, ...marqueeImagesRow1].map((src, idx) => (
          <div key={idx} className="w-[300px] sm:w-[400px] h-[190px] sm:h-[250px] rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
            <img src={src} alt="Showcase preview" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-3 w-max animate-[marquee-reverse_35s_linear_infinite]">
        {[...marqueeImagesRow2, ...marqueeImagesRow2, ...marqueeImagesRow2].map((src, idx) => (
          <div key={idx} className="w-[300px] sm:w-[400px] h-[190px] sm:h-[250px] rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
            <img src={src} alt="Showcase preview" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};
