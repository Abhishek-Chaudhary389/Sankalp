import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const initiatives = [
    {
      title: 'पर्यावरण संवर्धन व सुशोभीकरण',
      enTitle: 'Environmental Protection & Beautification',
      // Leaf / Tree SVG
      icon: (
        <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      desc: "वृक्षारोपण, उद्यानांचा विकास, परिसर स्वच्छता आणि 'पाणी अडवा, पाणी जिरवा' यांसारख्या जलसंवर्धनाच्या मोहिमा राबवून पर्यावरणाचा समतोल राखणे.",
      enDesc: "Conducting tree plantation drives, developing public gardens, executing neighborhood cleanliness campaigns, and implementing 'Water Conservation' projects."
    },
    {
      title: 'शैक्षणिक विकास व मदत',
      enTitle: 'Educational Development & Support',
      // Book / Graduation Cap SVG
      icon: (
        <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
        </svg>
      ),
      desc: 'गरजू व गुणवंत विद्यार्थ्यांना शैक्षणिक साहित्य, शिष्यवृत्ती आणि मार्गदर्शन पुरवून त्यांच्या उज्ज्वल भविष्यासाठी आधार बनणे.',
      enDesc: 'Providing educational materials, scholarships, and career guidance to needy and meritorious students to secure their academic future.'
    },
    {
      title: 'आरोग्य सेवा व जनजागृती',
      enTitle: 'Healthcare & Public Awareness',
      // Heart / Medical Cross SVG
      icon: (
        <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      desc: 'मोफत आरोग्य तपासणी शिबिरे, रक्तदान शिबिरे आयोजित करणे आणि गरजू रुग्णांना वैद्यकीय मदत मिळवून देणे.',
      enDesc: 'Organizing free health check-up camps, blood donation drives, and providing financial and medical assistance to underprivileged patients.'
    },
    {
      title: 'महिला सक्षमीकरण',
      enTitle: 'Women Empowerment',
      // Sparkle / User Shield SVG
      icon: (
        <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      desc: 'महिलांना स्वावलंबी बनवण्यासाठी विविध कौशल्य विकास कार्यक्रम, रोजगारभिमुख प्रशिक्षण आणि मार्गदर्शन सत्रे आयोजित करणे.',
      enDesc: 'Conducting skill development workshops, vocational training, and self-reliance programs to empower women economically and socially.'
    },
    {
      title: 'सर्वसमावेशक समाजविकास',
      enTitle: 'Inclusive Community Welfare',
      // Handshake / Users Group SVG
      icon: (
        <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      desc: 'समाजातील प्रत्येक घटकापर्यंत मूलभूत सुविधा आणि सहकार्य पोहोचवून सामाजिक बांधिलकी जपणे.',
      enDesc: 'Extending essential resources and civic assistance to every section of society to promote collective progress.'
    }
  ];

  // Founders data with ready-to-use image slot
  const founders = [
    {
      name: 'श्री. अमोल पुंजाजी खोंदील',
      enName: 'Mr. Amol Punjaji Khondil',
      role: 'संस्थापक / व्यवस्थापकीय संचालक',
      enRole: 'Founder / Managing Director',
      image: '', // Yahan photo ka path dal sakte hain, e.g. "/src/assets/amol_khondil.jpg"
      initials: 'AK'
    },
    {
      name: 'ॲड. श्री. बाबुराव रेवणसिध्द पुजारी',
      enName: 'Adv. Mr. Baburao Revansiddha Pujari',
      role: 'सह-संस्थापक / कायदेशीर सल्लागार व संचालक',
      enRole: 'Co-Founder / Legal Advisor & Director',
      image: '', // Yahan photo ka path dal sakte hain, e.g. "/src/assets/baburao_pujari.jpg"
      initials: 'BP'
    }
  ];

  return (
    <div className="w-full bg-slate-50/50 py-12 lg:py-16 text-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs sm:text-[13px] font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
              कंपनी कायदा, २०१३ च्या कलम ८ अंतर्गत नोंदणीकृत संस्था
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            आमच्याबद्दल <span className="text-[#f59e0b]">(About Us)</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Sankalp Janseva Foundation is a registered Section 8 social welfare organization dedicated to impactful grassroot transformation.
          </p>
        </div>

        {/* Story / Background Section (2-Column Layout with Side Photo) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left 7 Cols: Text and Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b45309] text-xs font-bold uppercase tracking-wider">
                About The Foundation
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Social Welfare, Environmental Conservation & Holistic Development
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Driven by the vision of social welfare, environmental conservation, and holistic community development, <strong className="text-slate-900">Sankalp Janseva Foundation</strong> was established through the joint initiative of <strong>Mr. Amol Punjaji Khondil</strong> and <strong>Adv. Mr. Baburao Revansiddha Pujari</strong>. The foundation was built with a steadfast commitment to uplifting the underprivileged, empowering marginalized communities, and building a progressive, self-reliant society.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We believe in driving meaningful change through direct action rather than passive discussion. Our core focus centers on operating with complete transparency and dedication across critical sectors, including education, healthcare, environmental protection, and women's empowerment.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm px-7 py-3 rounded-full shadow-sm hover:shadow transition"
                >
                  <span>Join Our Mission</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-6 py-3 rounded-full transition"
                >
                  <span>View Activities Gallery</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: High-Res Social Work / Charity Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-md group h-[360px] sm:h-[400px] lg:h-[420px] bg-slate-100 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="Sankalp Janseva Foundation Social Welfare"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-white/40 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 font-['Hind',sans-serif]">संकल्प जनसेवा फाउंडेशन</p>
                      <p className="text-[11px] font-bold text-amber-600">Empowering Grassroot Lives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dedicated Mission & Vision Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* BLOCK 1: आमचे ब्रीदवाक्य (Our Mission) */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-black/20 backdrop-blur-xs text-amber-200 text-xs font-bold uppercase tracking-wider">
                  Our Mission
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-['Hind',sans-serif] mb-4">
                आमचे ब्रीदवाक्य <span className="text-amber-200 text-lg sm:text-xl font-bold">(Our Mission)</span>
              </h3>

              <blockquote className="text-xl sm:text-2xl font-black font-['Hind',sans-serif] leading-snug bg-black/10 rounded-2xl p-5 border border-white/15 mb-4">
                "निस्वार्थ सेवा, शाश्वत विकास आणि समाजपरिवर्तनाचा दृढ संकल्प!"
              </blockquote>
            </div>

            <p className="text-xs sm:text-sm text-amber-100 font-medium italic border-t border-white/20 pt-4">
              "Selfless Service, Sustainable Development, and a Firm Commitment to Social Transformation!"
            </p>
          </div>

          {/* BLOCK 2: आमचा ध्यास (Our Vision) */}
          <div className="bg-gradient-to-br from-[#0f172a] to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                  Our Vision
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-['Hind',sans-serif] mb-4">
                आमचा ध्यास <span className="text-amber-400 text-lg sm:text-xl font-bold">(Our Vision)</span>
              </h3>

              <p className="text-base sm:text-[17px] text-white/95 font-['Hind',sans-serif] leading-relaxed mb-4">
                एक असा समाज निर्माण करणे जिथे प्रत्येक व्यक्तीला उत्तम शिक्षण, आरोग्य सुविधा आणि स्वच्छ-सुंदर पर्यावरण सहज उपलब्ध होईल; जिथे प्रत्येक महिला सशक्त आणि स्वावलंबी असेल.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-medium italic border-t border-white/15 pt-4">
              "To build an inclusive society where every individual has access to quality education, healthcare, and a clean environment, and where every woman is empowered."
            </p>
          </div>

        </div>

        {/* Founders & Leadership Section (With Photo Frames & Placeholders) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
              संस्थेचे संस्थापक / संचालक <span className="text-[#f59e0b]">(Founders & Trustees)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left group"
              >
                {/* Large Photo Frame / Upload Slot */}
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-white border-2 border-dashed border-amber-300 flex items-center justify-center shrink-0 shadow-sm relative group-hover:border-[#f59e0b] group-hover:shadow-md transition-all">
                  {founder.image ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover rounded-2xl" 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-amber-100/70 text-[#f59e0b] flex items-center justify-center mb-2 shadow-2xs">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-amber-700 font-['Hind',sans-serif]">
                        फोटो स्लॉट
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
                        (Add Photo)
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2 flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-[#b45309] font-bold text-[11px] uppercase tracking-wider border border-amber-200/60 font-['Hind',sans-serif]">
                    संस्थापक मंडळ
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Hind',sans-serif] leading-tight group-hover:text-[#f59e0b] transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500">
                    {founder.enName}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#d97706] font-['Hind',sans-serif] pt-1">
                    {founder.role}
                  </p>
                  <p className="text-xs font-medium text-slate-600">
                    {founder.enRole}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Key Initiatives Section with SVG Icons */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
              आमची ध्येये व प्रमुख कार्यक्षेत्रे <span className="text-[#f59e0b]">(Key Initiatives)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-5 border border-amber-100 group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 font-['Hind',sans-serif] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#f59e0b] mb-3">
                    {item.enTitle}
                  </p>
                  <p className="text-slate-600 text-sm font-['Hind',sans-serif] leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed pt-3 border-t border-slate-50 italic">
                  {item.enDesc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
