import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  Send,
  CheckCircle2,
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export const ContactPage = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    website: "",
    budget: "$300 - $600",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Valid email is required";
    if (!formData.details.trim()) errs.details = "Project details are required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Format pre-filled WhatsApp message
      const text = `Hi Saim Dev! I would like to inquire about a website project:

• *Name*: ${formData.name}
• *Business*: ${formData.businessName || "N/A"}
• *Email*: ${formData.email}
• *Website*: ${formData.website || "N/A"}
• *Budget*: ${formData.budget}
• *Project Details*: ${formData.details}`;

      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/12498984111?text=${encodedText}`;
      setWaLink(url);
      setSubmitted(true);

      // Direct redirection to WhatsApp App / Web
      window.location.href = url;
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Page</span>
        </button>

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary text-xs font-mono font-medium uppercase mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Let's Build Something Great
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Fill out the form below to initiate an instant project inquiry directly on WhatsApp.
          </p>
        </div>

        {/* CONTACT FORM */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/15 mb-20 relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">
            Send a Project Inquiry
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mb-8 font-light">
            Submitting this form launches WhatsApp with your pre-filled inquiry ready to send to Saim Dev (+1 249 898-4111).
          </p>

          {submitted ? (
            <div className="bg-white/5 border border-emerald-500/30 rounded-2xl p-8 text-center my-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">
                Inquiry Form Formatted!
              </h3>
              <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
                Click the button below to open WhatsApp with your pre-filled project details and press <strong>Send</strong>:
              </p>
              <a
                href={waLink || "https://wa.me/12498984111"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-500 text-black text-sm font-bold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all cursor-pointer mb-4 shadow-xl scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Open & Send Message on WhatsApp</span>
              </a>
              <div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary text-xs font-medium underline cursor-pointer mt-4"
                >
                  Edit Form Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g. Apex Studio"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Current Website */}
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    Current Website (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    placeholder="https://example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Budget Selection */}
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  Project Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="$300 - $600">$300 - $600 (Starter Website)</option>
                  <option value="$600 - $1200">$600 - $1,200 (Full Business Plan)</option>
                  <option value="$1200+">$1,200+ (Custom Web Architecture / AI App)</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  Project Details *
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Tell us about your project goals, pages needed, timeline, or reference websites..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
                {errors.details && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.details}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-black font-semibold py-3.5 px-6 rounded-full hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2 text-sm shadow-xl"
              >
                <span>Send Project Inquiry on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* WHY WORK WITH ME */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-white text-center mb-10">
            Why Work With Me?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <Zap className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-white font-medium mb-1">Fast Delivery</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                5–10 days swift project execution without compromising quality.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <Search className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-white font-medium mb-1">SEO Ready</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                On-page SEO, schema markup, and Google Search Console indexing.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <Smartphone className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-white font-medium mb-1">Mobile Responsive</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Flawless layout and touch performance across all mobile devices.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <ShieldCheck className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-white font-medium mb-1">Ongoing Support</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                14–30 days dedicated post-launch maintenance and support.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ SNIPPET */}
        <div className="mb-20 liquid-glass rounded-3xl p-8 border border-white/10">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <HelpCircle className="w-5 h-5" />
            <h3 className="text-white font-medium text-lg">Quick Project FAQ</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-white text-sm font-medium">How does payment work?</h4>
              <p className="text-white/60 text-xs mt-1 font-light">
                50% deposit before work starts, and the remaining 50% upon final website approval before live launch.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Can we communicate via WhatsApp?</h4>
              <p className="text-white/60 text-xs mt-1 font-light">
                Yes! Instant communication is available via WhatsApp (+1 249 898-4111) throughout the project.
              </p>
            </div>
          </div>
        </div>

        {/* INSTANT CHAT CTA */}
        <div className="text-center bg-white/5 rounded-3xl p-8 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
            Prefer Instant Chat?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm mb-6 font-light">
            Skip the form and message Saim Dev directly on WhatsApp for an immediate response.
          </p>
          <a
            href="https://wa.me/12498984111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-emerald-400 transition-all text-xs cursor-pointer shadow-lg"
          >
            <span>Chat on WhatsApp (+1 249 898-4111)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
