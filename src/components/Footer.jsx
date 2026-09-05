import React from 'react';
import { Link } from 'react-router-dom';
import sankalpLogo from '../assets/sankalp.jpg';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Organization Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img src={sankalpLogo} alt="Sankalp Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  Sankalp Janseva
                </span>
                <span className="text-[10px] font-bold text-[#f59e0b] tracking-widest uppercase">
                  Foundation
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 font-['Hind',sans-serif] leading-relaxed">
              "निस्वार्थ सेवा, शाश्वत विकास आणि समाजपरिवर्तनाचा दृढ संकल्प!"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sankalp Janseva Foundation is a registered social organization under Section 8 of the Companies Act, 2013, dedicated to education, healthcare, environment, and women empowerment.
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-slate-800 text-amber-400 rounded-lg text-[11px] font-semibold border border-slate-700">
                Registered Under Section 8 (Companies Act, 2013)
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-[#f59e0b] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#f59e0b] transition">About Us (आमच्याबद्दल)</Link></li>
              <li><Link to="/gallery" className="hover:text-[#f59e0b] transition">Photo Gallery (गॅलरी)</Link></li>
              <li><Link to="/news" className="hover:text-[#f59e0b] transition">News & Updates (बातम्या)</Link></li>
              <li><Link to="/helped" className="hover:text-[#f59e0b] transition">People Helped (लाभार्थी)</Link></li>
              <li><Link to="/contact" className="hover:text-[#f59e0b] transition">Contact Us (संपर्क)</Link></li>
            </ul>
          </div>

          {/* Col 4: Key Initiatives */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 font-['Hind',sans-serif]">प्रमुख कार्यक्षेत्रे</h4>
            <ul className="space-y-2.5 text-xs font-['Hind',sans-serif]">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> पर्यावरण संवर्धन व वृक्षारोपण</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> शैक्षणिक विकास व शिष्यवृत्ती</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> मोफत आरोग्य तपासणी व रक्तदान</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> महिला सक्षमीकरण व कौशल्य</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> सर्वसमावेशक समाजविकास</li>
            </ul>
          </div>

          {/* Col 5: Founders & Support */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Leadership</h4>
            <div className="space-y-2 text-xs text-slate-300 font-['Hind',sans-serif]">
              <p>• <strong className="text-white">श्री. अमोल पुंजाजी खोंदील</strong><br /><span className="text-[11px] text-slate-400">संस्थापक / व्यवस्थापकीय संचालक</span></p>
              <p>• <strong className="text-white">ॲड. श्री. बाबुराव रेवणसिध्द पुजारी</strong><br /><span className="text-[11px] text-slate-400">सह-संस्थापक / कायदेशीर सल्लागार व संचालक</span></p>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full inline-block text-center bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow transition"
              >
                Donate / Support Us
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sankalp Janseva Foundation. All rights reserved.</p>
          <p className="font-['Hind',sans-serif]">कंपनी कायदा, २०१३ च्या कलम ८ अंतर्गत नोंदणीकृत संस्था</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
