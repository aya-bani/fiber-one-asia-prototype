import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Download,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

const employeeOptions = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5000+",
];

const countryOptions = [
  "Singapore",
  "Malaysia",
  "Philippines",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Myanmar",
  "India",
  "Hong Kong",
  "Japan",
  "South Korea",
  "Australia",
  "Other",
];

/* ─────────────────────────── Component ─────────────────────────── */
const AVGuidePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    mobile: "",
    company: "",
    employees: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* ── Hero Banner ── */}
    <div className=" from-gray-50 via-white to-gray-100 pt-10 md:pt-16 lg:py-20 px-4 md:px-8 lg:px-16">

       <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
       
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Download Our Free Audio-Visual Design Guide
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          Explore our projects, installations, and team moments across the APAC region.
        </p>
        {/* Image count badge */}
        
      </motion.div>
</div>
      {/* ── Flipbook Placeholder ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-5 pb-12 md:pb-20">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden">
            {/* Spine effect */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 hidden lg:block" />

            <div className="flex flex-col items-center justify-center py-20 md:py-32 px-6">
              <div className="w-20 h-20 rounded-2xl bg-[#00A39B]/10 flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-[#00A39B]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">
                Flipbook Coming Soon
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-md text-center leading-relaxed">
                The interactive flipbook preview of our Audiovisual Systems Design Guide will be embedded here.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-1 rounded-full bg-slate-200" />
                <div className="w-10 h-1 rounded-full bg-[#00A39B]" />
                <div className="w-10 h-1 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Info + Form Section ── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Get Professional AV
              <br />
              <span className="text-[#00A39B]">System Guidance</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
              An AV system integrator offers the professional guidance and
              technical expertise that most technical staffs within organizations
              do not have — or do not have enough of.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
              Download our basic guide for Audiovisual Systems Design book to
              start your AV journey.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-base md:text-lg">
              Feel free to ask our friendly AV system integrators at Fiber One
              Asia any questions or for a professional consultation.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+6566352366"
                className="flex items-center gap-3 text-slate-700 hover:text-[#00A39B] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#00A39B]/10 flex items-center justify-center group-hover:bg-[#00A39B]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#00A39B]" />
                </div>
                <span className="font-medium">+65 6635 2366</span>
              </a>
              <a
                href="mailto:sales@fiber-transmission.com"
                className="flex items-center gap-3 text-slate-700 hover:text-[#00A39B] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#00A39B]/10 flex items-center justify-center group-hover:bg-[#00A39B]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#00A39B]" />
                </div>
                <span className="font-medium">sales@fiber-transmission.com</span>
              </a>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Download the AV Design Guide
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form to get your free copy.
              </p>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-14 h-14 text-[#00A39B] mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Your download link has been sent to your email. Check your
                    inbox shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      value={form.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={form.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Number of Employees
                      </label>
                      <select
                        name="employees"
                        value={form.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">— Please choose —</option>
                        {employeeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00A39B] focus:ring-2 focus:ring-[#00A39B]/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">— Please choose —</option>
                        {countryOptions.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-red-500">*</span> Required fields. By
                    filling in this form, you confirm that you agree to the
                    processing of your personal data as described in our{" "}
                    <span className="underline cursor-pointer text-[#00A39B]">
                      Privacy Statement
                    </span>
                    .
                  </p>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#00A39B] hover:bg-[#008F87] text-white font-semibold py-3 rounded-xl shadow-lg shadow-[#00A39B]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#00A39B]/30"
                  >
                    <Download className="w-4 h-4" />
                    Download Guide
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

   
    </div>
  );
};

export default AVGuidePage;