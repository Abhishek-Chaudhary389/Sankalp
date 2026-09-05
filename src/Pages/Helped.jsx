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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight font-['Hind',sans-serif]">
            आमचे कार्य प्रभाव व यशोगाथा <span className="text-[#f59e0b]">(Impact & Stories)</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            प्रत्येक मदत गरजू घटकांपर्यंत पोहोचवून त्यांच्या जीवनात सकारात्मक व शाश्वत बदल घडवणे हेच आमचे उद्दिष्ट आहे.
          </p>
        </div>

        {/* Impact Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center justify-between"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50/80 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-1">
                  {stat.number}
                </h3>
                <p className="font-bold text-slate-800 text-base font-['Hind',sans-serif]">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {stat.enLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
              Stories of Change
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
              समाधान व परिवर्तनाच्या यशोगाथा
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {story.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 font-['Hind',sans-serif] mb-2">
                      {story.name}
                    </h3>
                    <p className="text-slate-600 text-sm font-['Hind',sans-serif] leading-relaxed">
                      "{story.story}"
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-amber-600 text-xs font-bold">
                    <span>सकारात्मक बदल</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black font-['Hind',sans-serif]">
              तुम्हीही या सामाजिक परिवर्तनाचा भाग होऊ शकता!
            </h3>
            <p className="text-amber-100 text-sm sm:text-base mt-2 font-['Hind',sans-serif]">
              तुमचे छोटेसे योगदान किंवा सहभाग अनेकांच्या जीवनात मोठी उमेद निर्माण करू शकते.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/donate"
              className="bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95 text-sm sm:text-base"
            >
              देणगी द्या (Donate Now)
            </Link>
            <Link
              to="/contact"
              className="bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-all active:scale-95 text-sm sm:text-base"
            >
              संपर्क साधा (Contact Us)
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Helped;
