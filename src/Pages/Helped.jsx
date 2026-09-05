import React from 'react';
import { Link } from 'react-router-dom';

const Helped = () => {
  const impactStats = [
    {
      number: '5,000+',
      label: 'विद्यार्थ्यांना शैक्षणिक मदत',
      enLabel: 'Students Supported with Kits & Fees',
      icon: (
        <svg className="w-8 h-8 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
        </svg>
      )
    },
    {
      number: '10,000+',
      label: 'वृक्षारोपण व संवर्धन',
      enLabel: 'Trees Planted & Maintained',
      icon: (
        <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      number: '3,500+',
      label: 'मोफत आरोग्य तपासणी लाभार्थी',
      enLabel: 'Patients Benefited from Health Camps',
      icon: (
        <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: '1,200+',
      label: 'महिला कौशल्य विकास प्रशिक्षण',
      enLabel: 'Women Empowered with Vocational Skills',
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const stories = [
    {
      name: 'रोहित गायकवाड (Rohit Gaikwad)',
      category: 'शैक्षणिक शिष्यवृत्ती',
      story: 'संकल्प जनसेवा फाउंडेशनच्या शैक्षणिक शिष्यवृत्तीमुळे महाविद्यालयीन शिक्षण पूर्ण करून आयटी क्षेत्रात यशस्वी करिअर घडवले.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'सुनीता ताई पाटील (Sunita Patil)',
      category: 'महिला स्वावलंबन',
      story: 'फाउंडेशनच्या मोफत शिवणकाम व कौशल्य प्रशिक्षण वर्गातून स्वतःचा लघुउद्योग सुरू करून कुटुंबाला आर्थिक स्थैर्य मिळवून दिले.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'पाणी संवर्धन प्रकल्प - ग्रामीण परिसर',
      category: 'जल व पर्यावरण संवर्धन',
      story: 'पाणी अडवा, पाणी जिरवा मोहिमेतून दुष्काळग्रस्त भागात भूजल पातळी वाढवून शेतकरी बांधवांना कायमस्वरूपी पाण्याचा आधार दिला.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full bg-slate-50/50 py-12 lg:py-16 text-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
              प्रत्यक्ष मदत व कार्य प्रभाव
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            आमचे लाभार्थी <span className="text-[#f59e0b]">(People Helped & Impact)</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Real stories of transformation, upliftment, and sustainable social impact driven by your continuous support.
          </p>
        </div>

        {/* Impact Numbers Grid with SVG Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xs text-center flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50/70 border border-amber-100/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#f59e0b] tracking-tight">
                {stat.number}
              </h2>
              <p className="text-sm font-black text-slate-900 font-['Hind',sans-serif] mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {stat.enLabel}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
              Success Stories
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
              बदलावाच्या प्रेरणादायी यशोगाथा
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0f172a]/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full font-['Hind',sans-serif]">
                      {story.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-black text-slate-900 font-['Hind',sans-serif] mb-2">
                      {story.name}
                    </h4>
                    <p className="text-slate-600 text-sm font-['Hind',sans-serif] leading-relaxed">
                      "{story.story}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-gradient-to-r from-[#0f172a] to-slate-800 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-black font-['Hind',sans-serif] mb-3">
            आपणही या समाजकार्यात हातभार लावू शकता!
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Join Sankalp Janseva Foundation as a volunteer, donor, or partner to create lasting social impact.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition active:scale-95"
          >
            <span>Donate / Connect With Us</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Helped;
