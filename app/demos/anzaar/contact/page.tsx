"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnzaarHeader } from "@/components/anzaar/AnzaarHeader";
import { AnzaarFooter } from "@/components/anzaar/AnzaarFooter";
import { CheckCircle2 } from "lucide-react";

export default function AnzaarContact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");
    
    // Simulate API call for demo purposes
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <>
      <AnzaarHeader />
      
      <main className="min-h-screen bg-[#171411] relative">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
        
        {/* Split Layout */}
        <section className="relative z-10 min-h-screen flex flex-col lg:flex-row">
          
          {/* Left Column: Info */}
          <div className="w-full lg:w-1/2 pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-center border-r border-[#D8B27A]/10 bg-[#100D0B]/50">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-sans text-[#D8B27A] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Reservations & Contact
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#F8F2E8] mb-12">
                Your Table Awaits
              </h1>

              <div className="space-y-12 max-w-md">
                <div>
                  <h3 className="font-sans text-[#A9672F] text-xs font-bold tracking-widest uppercase mb-4">Location</h3>
                  <p className="font-sans text-[#F8F2E8]/70 text-base font-light leading-relaxed">
                    College Rd, Jalalpur Ghumman<br/>
                    Daska, 51010, Pakistan
                  </p>
                  <a href="https://maps.app.goo.gl/BQZR5eSnnjG1gJoT6" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-[#D8B27A] hover:text-[#F1D7A5] transition-colors border-b border-[#D8B27A]/30 pb-1">
                    Get Directions
                  </a>
                </div>

                <div>
                  <h3 className="font-sans text-[#A9672F] text-xs font-bold tracking-widest uppercase mb-4">Contact</h3>
                  <p className="font-sans text-[#F8F2E8]/70 text-base font-light leading-relaxed flex flex-col gap-2">
                    <a href="tel:03314333355" className="hover:text-[#D8B27A] transition-colors">Call: 0331 4333355</a>
                    <a href="https://wa.me/923314333355" className="hover:text-[#D8B27A] transition-colors">WhatsApp: 0331 4333355</a>
                    <a href="mailto:contact@anzaar.com" className="hover:text-[#D8B27A] transition-colors">Email: contact@anzaar.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-[#A9672F] text-xs font-bold tracking-widest uppercase mb-4">Hours</h3>
                  <ul className="space-y-2 text-[#F8F2E8]/70 font-sans font-light">
                    <li className="flex justify-between border-b border-[#D8B27A]/10 pb-2">
                      <span>Mon - Thu</span>
                      <span>12:00 PM - 11:30 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-[#D8B27A]/10 pb-2">
                      <span>Friday</span>
                      <span>2:00 PM - 12:00 AM</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span>Sat - Sun</span>
                      <span>12:00 PM - 12:00 AM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 pt-20 lg:pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-center bg-[#171411]">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-xl mx-auto lg:mx-0">
              
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#100D0B] border border-[#D8B27A]/20 p-8 md:p-12 text-center flex flex-col items-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#D8B27A] mb-6" />
                    <h3 className="font-serif text-3xl text-[#F8F2E8] mb-4">Request Received</h3>
                    <p className="font-sans text-[#F8F2E8]/70 font-light leading-relaxed mb-8">
                      Thank you. Your request has been received. Our team will contact you shortly to confirm availability.
                    </p>
                    <button 
                      onClick={() => {
                        setFormStatus("idle");
                        setFormData({ name: "", phone: "", email: "", date: "", time: "", guests: "", occasion: "", message: "" });
                      }}
                      className="px-8 py-3 border border-[#D8B27A] text-[#D8B27A] text-sm font-bold tracking-widest uppercase hover:bg-[#D8B27A] hover:text-[#171411] transition-colors"
                    >
                      Make Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Name</label>
                        <input 
                          type="text" name="name" value={formData.name} onChange={handleChange}
                          className={`w-full bg-transparent border-b ${errors.name ? 'border-[#7E2721]' : 'border-[#D8B27A]/30 focus:border-[#D8B27A]'} px-0 py-3 text-[#F8F2E8] placeholder:text-[#F8F2E8]/20 focus:outline-none transition-colors rounded-none`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && <span className="text-xs text-[#7E2721]">{errors.name}</span>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Phone</label>
                        <input 
                          type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          className={`w-full bg-transparent border-b ${errors.phone ? 'border-[#7E2721]' : 'border-[#D8B27A]/30 focus:border-[#D8B27A]'} px-0 py-3 text-[#F8F2E8] placeholder:text-[#F8F2E8]/20 focus:outline-none transition-colors rounded-none`}
                          placeholder="+92 300 0000000"
                        />
                        {errors.phone && <span className="text-xs text-[#7E2721]">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Email</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full bg-transparent border-b ${errors.email ? 'border-[#7E2721]' : 'border-[#D8B27A]/30 focus:border-[#D8B27A]'} px-0 py-3 text-[#F8F2E8] placeholder:text-[#F8F2E8]/20 focus:outline-none transition-colors rounded-none`}
                        placeholder="jane@example.com"
                      />
                      {errors.email && <span className="text-xs text-[#7E2721]">{errors.email}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Date */}
                      <div className="space-y-2">
                        <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Date</label>
                        <input 
                          type="date" name="date" value={formData.date} onChange={handleChange}
                          className={`w-full bg-transparent border-b ${errors.date ? 'border-[#7E2721]' : 'border-[#D8B27A]/30 focus:border-[#D8B27A]'} px-0 py-3 text-[#F8F2E8] placeholder:text-[#F8F2E8]/20 focus:outline-none transition-colors rounded-none [color-scheme:dark]`}
                        />
                        {errors.date && <span className="text-xs text-[#7E2721]">{errors.date}</span>}
                      </div>

                      {/* Time */}
                      <div className="space-y-2">
                        <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Time</label>
                        <input 
                          type="time" name="time" value={formData.time} onChange={handleChange}
                          className={`w-full bg-transparent border-b ${errors.time ? 'border-[#7E2721]' : 'border-[#D8B27A]/30 focus:border-[#D8B27A]'} px-0 py-3 text-[#F8F2E8] placeholder:text-[#F8F2E8]/20 focus:outline-none transition-colors rounded-none [color-scheme:dark]`}
                        />
                        {errors.time && <span className="text-xs text-[#7E2721]">{errors.time}</span>}
                      </div>

                      {/* Guests */}
                      <div className="space-y-2">
                        <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Guests</label>
                        <select 
                          name="guests" value={formData.guests} onChange={handleChange}
                          className={`w-full bg-transparent border-b ${errors.guests ? 'border-[#7E2721]' : 'border-[#D8B27A]/30 focus:border-[#D8B27A]'} px-0 py-3 text-[#F8F2E8] focus:outline-none transition-colors rounded-none appearance-none`}
                        >
                          <option value="" disabled className="bg-[#171411]">Select...</option>
                          {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n} className="bg-[#171411]">{n} People</option>)}
                        </select>
                        {errors.guests && <span className="text-xs text-[#7E2721]">{errors.guests}</span>}
                      </div>
                    </div>

                    {/* Occasion */}
                    <div className="space-y-2">
                      <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Occasion (Optional)</label>
                      <select 
                        name="occasion" value={formData.occasion} onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#D8B27A]/30 focus:border-[#D8B27A] px-0 py-3 text-[#F8F2E8] focus:outline-none transition-colors rounded-none appearance-none"
                      >
                        <option value="" className="bg-[#171411]">None</option>
                        <option value="birthday" className="bg-[#171411]">Birthday</option>
                        <option value="anniversary" className="bg-[#171411]">Anniversary</option>
                        <option value="business" className="bg-[#171411]">Business Meeting</option>
                        <option value="other" className="bg-[#171411]">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="font-sans text-xs tracking-widest text-[#F8F2E8]/50 uppercase block">Special Requests / Allergies</label>
                      <textarea 
                        name="message" value={formData.message} onChange={handleChange} rows={3}
                        className="w-full bg-transparent border-b border-[#D8B27A]/30 focus:border-[#D8B27A] px-0 py-3 text-[#F8F2E8] placeholder:text-[#F8F2E8]/20 focus:outline-none transition-colors rounded-none resize-none"
                        placeholder="Please let us know..."
                      />
                    </div>

                    <p className="font-sans text-xs text-[#F8F2E8]/40 font-light leading-relaxed mt-2">
                      For groups of 10 or more, or if you have severe allergies, please contact the restaurant directly.
                    </p>

                    <button 
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 mt-4 bg-[#D8B27A] text-[#171411] text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#F1D7A5] transition-colors disabled:opacity-70 flex justify-center items-center"
                    >
                      {formStatus === "submitting" ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-[#171411] border-t-transparent rounded-full" />
                      ) : (
                        "Request Reservation"
                      )}
                    </button>
                    
                    {/* Demo Integration Note */}
                    <p className="text-center font-sans text-[10px] text-[#A9672F] uppercase tracking-widest mt-4">
                      Frontend Demo — Integration Point
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </section>
      </main>
    </>
  );
}
