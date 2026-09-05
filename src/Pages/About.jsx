import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const initiatives = [
        {
            title: 'पर्यावरण संरक्षण एवं संवर्धन',
            enTitle: 'Environmental Protection & Beautification',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            ),
            desc: "वृक्षारोपण, उद्यानों का विकास, स्वच्छता अभियान और 'जल संवर्धन' जैसे अभियानों द्वारा पर्यावरण संतुलन बनाए रखना।",
            enDesc: "Conducting tree plantation drives, developing public gardens, executing neighborhood cleanliness campaigns, and implementing 'Water Conservation' projects."
        },
        {
            title: 'शैक्षणिक विकास एवं सहायता',
            enTitle: 'Educational Development & Support',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                </svg>
            ),
            desc: 'जरूरतमंद और होनहार विद्यार्थियों को शैक्षणिक सामग्री, छात्रवृत्ति और उचित मार्गदर्शन प्रदान करना।',
            enDesc: 'Providing educational materials, scholarships, and career guidance to needy and meritorious students to secure their academic future.'
        },
        {
            title: 'स्वास्थ्य सेवा एवं जन-जागरूकता',
            enTitle: 'Healthcare & Public Awareness',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            desc: 'निःशुल्क स्वास्थ्य जांच शिविर, रक्तदान शिविर आयोजित करना और जरूरतमंद मरीजों को उचित चिकित्सीय मदद उपलब्ध कराना।',
            enDesc: 'Organizing free health check-up camps, blood donation drives, and providing financial and medical assistance to underprivileged patients.'
        },
        {
            title: 'महिला सशक्तिकरण',
            enTitle: 'Women Empowerment',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            desc: 'महिलाओं को आत्मनिर्भर बनाने के लिए कौशल विकास कार्यशालाएं, स्वरोजगार प्रशिक्षण और मार्गदर्शन सत्र आयोजित करना।',
            enDesc: 'Conducting skill development workshops, vocational training, and self-reliance programs to empower women economically and socially.'
        },
        {
            title: 'सर्वसमावेशी समाज विकास',
            enTitle: 'Inclusive Community Welfare',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            desc: 'समाज के हर वर्ग तक मूलभूत सुविधाएं और सहयोग पहुंचाकर सामाजिक समरसता को बढ़ावा देना।',
            enDesc: 'Extending essential resources and civic assistance to every section of society to promote collective progress.'
        }
    ];

    // Founders data with ready-to-use image slot
    const founders = [
        {
            name: 'श्री. अमोल पुंजाजी खोंदील',
            enName: 'Mr. Amol Punjaji Khondil',
            role: 'संस्थापक / प्रबंध निदेशक',
            enRole: 'Founder / Managing Director',
            image: '',
            initials: 'AK'
        },
        {
            name: 'एड. श्री. बाबुराव रेवणसिद्ध पुजारी',
            enName: 'Adv. Mr. Baburao Revansiddha Pujari',
            role: 'सह-संस्थापक / कानूनी सलाहकार एवं निदेशक',
            enRole: 'Co-Founder / Legal Advisor & Director',
            image: '',
            initials: 'BP'
        }
    ];

    return (
        <div className="w-full bg-slate-50/50 py-8 sm:py-12 lg:py-16 text-slate-800">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Header Banner */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-3 sm:mb-4 shadow-2xs max-w-full">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0 animate-ping" />
                        <span className="text-[10.5px] sm:text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif] leading-tight">
                            कंपनी अधिनियम, 2013 की धारा 8 के अंतर्गत पंजीकृत संस्था
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight">
                        हमारे बारे में <span className="text-[#f59e0b]">(About Us)</span>
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-2.5 sm:mt-3.5 max-w-2xl mx-auto leading-relaxed">
                        संकल्प जनसेवा फाउंडेशन एक पंजीकृत गैर-लाभकारी (Section 8) सामाजिक संस्था है, जो समाज के समग्र विकास और उत्थान के लिए समर्पित है।
                    </p>
                </div>

                {/* Story / Background Section (Responsive Mobile-First 2-Column Layout) */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xs border border-slate-100 mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* Left Column: Text Content */}
                        <div className="lg:col-span-7 space-y-4 sm:space-y-5 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b45309] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                                About The Foundation
                            </div>

                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] leading-tight font-['Hind',sans-serif]">
                                समाज सेवा, पर्यावरण संरक्षण एवं समग्र विकास
                            </h2>

                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-['Hind',sans-serif]">
                                समाज के वंचित वर्गों के उत्थान, पर्यावरण संरक्षण और सामुदायिक विकास के पावन संकल्प के साथ <strong className="text-slate-900">संकल्प जनसेवा फाउंडेशन</strong> की स्थापना <strong>श्री अमोल पुंजाजी खोंदील</strong> और <strong>एड. श्री बाबुराव रेवणसिद्ध पुजारी</strong> के संयुक्त प्रयासों से की गई है।
                            </p>

                            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-['Hind',sans-serif]">
                                हमारा मुख्य उद्देश्य शिक्षा, स्वास्थ्य, पर्यावरण और महिला सशक्तिकरण के क्षेत्र में धरातल पर पारदर्शी और प्रभावी कार्य करना है, जिससे हर जरूरतमंद को स्वावलंबी व सम्मानित जीवन मिल सके।
                            </p>

                            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link
                                    to="/donate"
                                    className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-xs hover:shadow active:scale-95 transition text-center"
                                >
                                    <span>सहयोग करें (Donate)</span>
                                    <span>→</span>
                                </Link>
                                <Link
                                    to="/gallery"
                                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-5 py-3 rounded-full active:scale-95 transition text-center"
                                >
                                    <span>फ़ोटो गैलरी देखें</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Photo on Top on Mobile for Great Visual Hook */}
                        <div className="lg:col-span-5 order-1 lg:order-2">
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm group h-[220px] sm:h-[300px] lg:h-[390px] bg-slate-100 border border-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                                    alt="Sankalp Janseva Foundation Social Welfare"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                                {/* Floating Bottom Badge */}
                                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-xs p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/40 shadow-xs">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                                            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-900 font-['Hind',sans-serif] leading-tight">संकल्प जनसेवा फाउंडेशन</p>
                                            <p className="text-[10px] sm:text-[11px] font-bold text-amber-600">Empowering Grassroot Lives</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Dedicated Mission & Vision Blocks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">

                    {/* BLOCK 1: हमारा ध्येय (Our Mission) */}
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-md relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-black/20 backdrop-blur-xs text-amber-200 text-[11px] font-bold uppercase tracking-wider">
                                    Our Mission
                                </span>
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-['Hind',sans-serif] mb-3 sm:mb-4">
                                हमारा ध्येय <span className="text-amber-200 text-base sm:text-lg font-bold">(Our Mission)</span>
                            </h3>

                            <blockquote className="text-base sm:text-xl font-black font-['Hind',sans-serif] leading-snug bg-black/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/15 mb-3 sm:mb-4">
                                "निस्वार्थ सेवा, सतत विकास और समाज परिवर्तन का दृढ़ संकल्प!"
                            </blockquote>
                        </div>

                        <p className="text-xs sm:text-sm text-amber-100 font-medium italic border-t border-white/20 pt-3 sm:pt-4">
                            "Selfless Service, Sustainable Development, and a Firm Commitment to Social Transformation!"
                        </p>
                    </div>

                    {/* BLOCK 2: हमारा दृष्टिकोण (Our Vision) */}
                    <div className="bg-gradient-to-br from-[#0f172a] to-slate-800 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-md relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
                                    Our Vision
                                </span>
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-['Hind',sans-serif] mb-3 sm:mb-4">
                                हमारा दृष्टिकोण <span className="text-amber-400 text-base sm:text-lg font-bold">(Our Vision)</span>
                            </h3>

                            <p className="text-sm sm:text-base text-white/95 font-['Hind',sans-serif] leading-relaxed mb-3 sm:mb-4">
                                एक ऐसे समरस समाज का निर्माण करना जहां हर व्यक्ति को उत्तम शिक्षा, स्वास्थ्य सुविधाएं और स्वच्छ पर्यावरण सहज उपलब्ध हो, तथा प्रत्येक महिला सशक्त और आत्मनिर्भर बने।
                            </p>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 font-medium italic border-t border-white/15 pt-3 sm:pt-4">
                            "To build an inclusive society where every individual has access to quality education, healthcare, and a clean environment."
                        </p>
                    </div>

                </div>

                {/* Founders & Leadership Section (Balanced for Mobile & Desktop) */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-100 shadow-xs mb-8 sm:mb-12">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                        <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
                            Leadership
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
                            संस्था के संस्थापक / संचालक <span className="text-[#f59e0b] text-xl sm:text-2xl block sm:inline">(Founders & Trustees)</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
                        {founders.map((founder, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left group"
                            >
                                {/* Photo Frame / Upload Slot */}
                                <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-white border-2 border-dashed border-amber-300 flex items-center justify-center shrink-0 shadow-xs relative group-hover:border-[#f59e0b] transition-all">
                                    {founder.image ? (
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center p-3 text-center">
                                            <div className="w-11 h-11 rounded-xl bg-amber-100/70 text-[#f59e0b] flex items-center justify-center mb-1.5 shadow-2xs">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-[11px] font-bold text-amber-700 font-['Hind',sans-serif]">
                                                फोटो स्लॉट
                                            </span>
                                            <span className="text-[9.5px] text-slate-400 font-semibold">
                                                (Add Photo)
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Details */}
                                <div className="space-y-1.5 flex-grow">
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-[#b45309] font-bold text-[10px] uppercase tracking-wider border border-amber-200/60 font-['Hind',sans-serif]">
                                        संस्थापक मंडल
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Hind',sans-serif] leading-tight group-hover:text-[#f59e0b] transition-colors">
                                        {founder.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-slate-500">
                                        {founder.enName}
                                    </p>
                                    <p className="text-xs sm:text-[13px] font-bold text-[#d97706] font-['Hind',sans-serif] pt-0.5">
                                        {founder.role}
                                    </p>
                                    <p className="text-[11px] font-medium text-slate-600">
                                        {founder.enRole}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5 Key Initiatives Section with Clean Mobile Spacing */}
                <div>
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                        <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
                            Core Pillars
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
                            हमारे ध्येय एवं प्रमुख कार्यक्षेत्र <span className="text-[#f59e0b] text-xl sm:text-2xl block sm:inline">(Key Initiatives)</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {initiatives.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Top Gradient Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Subtle Number Watermark */}
                                <span className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-amber-50 transition-colors pointer-events-none select-none">
                                    0{index + 1}
                                </span>

                                <div className="relative z-10">
                                    {/* Glowing Gradient Icon Container */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white flex items-center justify-center mb-5 shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:shadow-amber-500/35 transition-all duration-300 shrink-0">
                                        {React.cloneElement(item.icon, { className: "w-7 h-7 text-white stroke-[2.2]" })}
                                    </div>

                                    {/* English Pill Badge */}
                                    <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wider">
                                        {item.enTitle}
                                    </span>

                                    {/* Title in Hindi */}
                                    <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Hind',sans-serif] leading-snug group-hover:text-[#f59e0b] transition-colors mb-2.5">
                                        {item.title}
                                    </h3>

                                    {/* Description in Hindi */}
                                    <p className="text-slate-600 text-xs sm:text-sm font-['Hind',sans-serif] leading-relaxed mb-3">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* English Description Footer */}
                                <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed pt-3 border-t border-slate-100/80 italic mt-4">
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
