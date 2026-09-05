import React from 'react';
import { Link } from 'react-router-dom';
import sankalpLogo from '../assets/sankalp.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#0b1329] text-slate-400 pt-10 pb-20 sm:pt-14 sm:pb-12 border-t border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: 1 col on mobile, 2 col on tablet, 5 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-slate-800/80">

          {/* Col 1 & 2: Organization Info */}
          <div className="sm:col-span-2 space-y-3.5 sm:space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden bg-white p-0.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <img src={sankalpLogo} alt="Sankalp Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                  Sankalp Janseva
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#f59e0b] tracking-widest leading-none mt-1 uppercase">
                  Foundation
                </span>
              </div>
            </Link>

            <blockquote className="text-xs sm:text-[13px] text-amber-200/90 font-['Hind',sans-serif] leading-snug font-medium italic border-l-2 border-[#f59e0b] pl-3 py-0.5">
              "निस्वार्थ सेवा, शाश्वत विकास आणि समाजपरिवर्तनाचा दृढ संकल्प!"
            </blockquote>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sankalp Janseva Foundation is a registered social welfare organization under Section 8 of the Companies Act, 2013, dedicated to grassroot community upliftment.
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-slate-800/90 text-amber-400 rounded-lg text-[10.5px] sm:text-[11px] font-semibold border border-slate-700/60">
                Registered Under Section 8 (Companies Act, 2013)
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-[#f59e0b] transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Home (मुख्यपृष्ठ)</Link></li>
              <li><Link to="/about" className="hover:text-[#f59e0b] transition flex items-center gap-1.5"><span className="text-slate-600">›</span> About Us (आमच्याबद्दल)</Link></li>
              <li><Link to="/gallery" className="hover:text-[#f59e0b] transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Photo Gallery (गॅलरी)</Link></li>
              <li><Link to="/news" className="hover:text-[#f59e0b] transition flex items-center gap-1.5"><span className="text-slate-600">›</span> News & Updates (बातम्या)</Link></li>
              <li><Link to="/helped" className="hover:text-[#f59e0b] transition flex items-center gap-1.5"><span className="text-slate-600">›</span> People Helped (लाभार्थी)</Link></li>
              <li><Link to="/contact" className="hover:text-[#f59e0b] transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Contact Us (संपर्क)</Link></li>
            </ul>
          </div>

          {/* Col 4: Key Initiatives */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-slate-200 font-['Hind',sans-serif]">
              प्रमुख कार्यक्षेत्रे
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs font-['Hind',sans-serif]">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> पर्यावरण संवर्धन व वृक्षारोपण</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> शैक्षणिक विकास व शिष्यवृत्ती</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> मोफत आरोग्य तपासणी व रक्तदान</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> महिला सक्षमीकरण व कौशल्य</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> सर्वसमावेशक समाजविकास</li>
            </ul>
          </div>

          {/* Col 5: Leadership & Support */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-slate-200">
              Leadership
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 space-y-0.5">
                <p className="font-bold text-white text-[12.5px]">Mr. Amol Punjaji Khondil</p>
                <p className="text-[11px] text-amber-400">Founder / Managing Director</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 space-y-0.5">
                <p className="font-bold text-white text-[12.5px]">Adv. Mr. Baburao Revansiddha Pujari</p>
                <p className="text-[11px] text-amber-400">Co-Founder / Legal Advisor & Director</p>
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/donate"
                className="w-full inline-block text-center bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs active:scale-95 transition"
              >
                देणगी द्या (Donate Now) →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Dedicated "Developed by SN Studio" Badge */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3.5 sm:gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} <strong className="text-slate-200">Sankalp Janseva Foundation</strong>. All rights reserved.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/90 px-4 py-1.5 rounded-full border border-slate-700/70 shadow-xs">
            <span>Developed by</span>
            <span className="text-[#f59e0b] font-black tracking-wide">SN Studio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
