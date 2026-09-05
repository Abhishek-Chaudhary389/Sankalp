import React, { useState } from 'react';

const Contactus = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <div id="donate" className="w-full bg-slate-50/50 py-12 lg:py-16 text-slate-800">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                        <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
                            संपर्क व सहयोग
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
                        आमच्याशी संपर्क साधा <span className="text-[#f59e0b]">(Contact Us)</span>
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
                        संकल्प जनसेवा फाउंडेशनशी जोडून समाजकार्यात हातभार लावा किंवा आपल्या सूचना व मदतीसाठी थेट संपर्क करा.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left Column: Contact & Organization Details */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Organization Info Card */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5">
                            <div>
                                <span className="text-[11px] font-extrabold text-[#f59e0b] uppercase tracking-wider">
                                    Registered Non-Profit
                                </span>
                                <h2 className="text-2xl font-black text-[#0f172a] font-['Hind',sans-serif] mt-1 leading-tight">
                                    संकल्प जनसेवा फाउंडेशन
                                </h2>
                                <p className="text-xs text-slate-500 font-medium mt-1">
                                    (कंपनी कायदा, २०१३ च्या कलम ८ अंतर्गत नोंदणीकृत समाजसेवी संस्था)
                                </p>
                            </div>

                            <div className="space-y-4 pt-3 border-t border-slate-100 text-sm">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#f59e0b] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 font-['Hind',sans-serif]">कार्यालयीन संपर्क</p>
                                        <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                                            Sankalp Janseva Foundation Head Office, Maharashtra, India.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#f59e0b] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 font-['Hind',sans-serif]">संस्थापक व संचालक मंडळ</p>
                                        <p className="text-slate-600 text-xs mt-0.5 leading-relaxed font-['Hind',sans-serif]">
                                            • श्री. अमोल पुंजाजी खोंदील (संस्थापक / व्यवस्थापकीय संचालक)<br />
                                            • ॲड. श्री. बाबुराव रेवणसिध्द पुजारी (सह-संस्थापक / कायदेशीर सल्लागार व संचालक)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#f59e0b] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 font-['Hind',sans-serif]">ईमेल व हेल्पलाइन</p>
                                        <p className="text-slate-600 text-xs mt-0.5">
                                            info@sankalpfoundation.org.in
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Donation / Support Bank Box */}
                        <div className="bg-gradient-to-br from-[#0f172a] to-slate-900 text-white rounded-3xl p-8 shadow-md">
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                                Support The Cause
                            </span>
                            <h3 className="text-xl font-bold font-['Hind',sans-serif] mt-1 mb-2">
                                आपले योगदान, कोणाचे तरी भविष्य!
                            </h3>
                            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                Every rupee you contribute directly funds tree saplings, school books, healthcare checkups, and women empowerment.
                            </p>
                            <div className="bg-white/10 rounded-2xl p-4 text-xs space-y-1.5 border border-white/10">
                                <p><span className="text-amber-300 font-semibold">Account Name:</span> Sankalp Janseva Foundation</p>
                                <p><span className="text-amber-300 font-semibold">Account Type:</span> Section 8 NGO Current Account</p>
                                <p><span className="text-amber-300 font-semibold">Status:</span> 100% Transparency & Audit Compliant</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Interactive Contact Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">

                        <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-['Hind',sans-serif] mb-2">
                            आम्हाला संदेश पाठवा <span className="text-[#f59e0b]">(Send a Message)</span>
                        </h2>
                        <p className="text-slate-500 text-sm mb-8">
                            Fill in your details below and our foundation representative will get back to you promptly.
                        </p>

                        {submitted && (
                            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-3">
                                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>धन्यवाद! आपला संदेश आम्हाला प्राप्त झाला आहे. आम्ही लवकरच आपल्याशी संपर्क करू.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                        आपले नाव (Full Name) *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Ramesh Patil"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                        मोबाईल नंबर (Phone) *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="e.g. +91 9876543210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                        ईमेल (Email Address)
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="e.g. ramesh@gmail.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                        विषय (Subject)
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="donation">देणगी / Daan / Donation</option>
                                        <option value="volunteer">स्वयंसेवक सहभाग (Volunteer)</option>
                                        <option value="educational">शैक्षणिक मदत मागणी</option>
                                        <option value="medical">वैद्यकीय / आरोग्य मदत</option>
                                        <option value="general">इतर माहिती (General Inquiry)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                    आपला संदेश (Your Message) *
                                </label>
                                <textarea
                                    required
                                    rows="4"
                                    placeholder="संदेश किंवा मदत विषयी माहिती येथे लिहा..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-base px-10 py-3.5 rounded-full shadow-md shadow-amber-500/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                            >
                                संदेश पाठवा (Submit Message) →
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contactus;
