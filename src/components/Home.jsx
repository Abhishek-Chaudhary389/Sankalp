import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import childShawlImg from '../assets/child_shawl.jpg';

const Home = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    // Collage image references
    const collageImages = {
        childInShawl: childShawlImg,
        childrenStudying: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop",
        schoolKidsSmiling: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=700&auto=format&fit=crop",
        volunteerInVest: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=700&auto=format&fit=crop"
    };

    const checkFeatures = [
        'गरीबी उन्मूलन (Eliminate Poverty)',
        'उत्तम स्वास्थ्य (Better Health)',
        'सुलभ शिक्षा (Mass Education)'
    ];

    const coreInitiatives = [
        {
            title: 'पर्यावरण संरक्षण एवं संवर्धन',
            enTitle: 'Environmental Protection',
            desc: "वृक्षारोपण, उद्यानों का विकास और 'जल संरक्षण - पानी बचाओ' जैसे जनहित अभियान।",
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
        },
        {
            title: 'शैक्षणिक विकास एवं सहायता',
            enTitle: 'Educational Support',
            desc: 'जरूरतमंद और मेधावी विद्यार्थियों को पाठ्य सामग्री, छात्रवृत्ति एवं मार्गदर्शन।',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                </svg>
            )
        },
        {
            title: 'स्वास्थ्य सेवा एवं जन-जागरूकता',
            enTitle: 'Healthcare Drives',
            desc: 'निःशुल्क स्वास्थ्य जांच शिविर, रक्तदान और असहाय मरीजों को चिकित्सीय मदद।',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: 'महिला सशक्तिकरण',
            enTitle: 'Women Empowerment',
            desc: 'महिलाओं के लिए कौशल विकास कार्यशालाएं, स्वरोजगार प्रशिक्षण और आत्मनिर्भरता।',
            icon: (
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        }
    ];

    // Founders & Trustees data for Home page
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
            role: 'सह-संस्थापक / कानूनी सलाहकार एवं संचालक',
            enRole: 'Co-Founder / Legal Advisor & Director',
            image: '',
            initials: 'BP'
        }
    ];

    const homeGalleryPreview = [
        {
            id: 1,
            title: 'वृक्षारोपण अभियान (Tree Plantation Drive)',
            category: 'Environment',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=700&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'जरूरतमंद विद्यार्थियों को शैक्षणिक सामग्री वितरण',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'निःशुल्क स्वास्थ्य जांच एवं रक्तदान शिविर',
            category: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=700&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'महिला कौशल विकास एवं स्वावलंबन कार्यशाला',
            category: 'Women Empowerment',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop'
        }
    ];

    return (
        <div className="w-full bg-white text-slate-800">

            {/* ======================================================== */}
            {/* HERO SECTION */}
            {/* ======================================================== */}
            <section id="home" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">

                        {/* Main Bold Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black text-[#0f172a] tracking-tight leading-[1.14]">
                            Sankalp Janseva{' '}
                            <span className="text-[#f59e0b]">
                                Foundation
                            </span>
                            <span className="block mt-2 font-['Hind',sans-serif] font-black text-3xl sm:text-4xl lg:text-[46px] text-slate-900 tracking-tight leading-snug">
                                संकल्प <span className="text-[#f59e0b]">जनसेवा फाउंडेशन</span>
                            </span>
                        </h1>

                        {/* Description Subtitle */}
                        <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-lg mt-5 mb-8 font-normal font-['Hind',sans-serif]">
                            हम सब मिलकर एक सकारात्मक बदलाव ला सकते हैं। आपका एक छोटा सा सहयोग किसी जरूरतमंद के जीवन में नई रोशनी और उम्मीद भर सकता है।
                        </p>

                        {/* CTA Buttons (Donate & Video Play) */}
                        <div className="flex items-center gap-5 mb-8">

                            {/* Primary Donate Button */}
                            <Link
                                to="/donate"
                                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-base px-8 py-3.5 rounded-full shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 active:scale-95"
                            >
                                दान करें (Donate)
                            </Link>

                            {/* Play Video Circle Button */}
                            <button
                                type="button"
                                onClick={() => setShowVideoModal(true)}
                                aria-label="Play introductory video"
                                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white flex items-center justify-center shadow-md shadow-amber-500/20 hover:scale-105 transition-all duration-200 active:scale-95 cursor-pointer"
                                title="Watch Video"
                            >
                                <svg
                                    className="w-5 h-5 ml-0.5 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                        </div>

                        {/* Bottom 3 Feature Checkmarks */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                            {checkFeatures.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 font-semibold text-xs sm:text-sm font-['Hind',sans-serif]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT CONTENT: 4-IMAGE COLLAGE GRID */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-[500px] lg:max-w-[530px]">

                            {/* Left Column in Collage */}
                            <div className="space-y-3.5 sm:space-y-4 flex flex-col justify-between">

                                {/* 1. Tall Child with Shawl Portrait */}
                                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-md bg-slate-100 group h-[260px] sm:h-[300px] lg:h-[315px]">
                                    <img
                                        src={collageImages.childInShawl}
                                        alt="Young child wearing shawl"
                                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                </div>

                                {/* 2. Wide Happy Smiling Children Waving */}
                                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-md bg-slate-100 group h-[130px] sm:h-[155px] lg:h-[160px]">
                                    <img
                                        src={collageImages.schoolKidsSmiling}
                                        alt="Smiling group of children waving"
                                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                </div>

                            </div>

                            {/* Right Column in Collage */}
                            <div className="space-y-3.5 sm:space-y-4 flex flex-col justify-between">

                                {/* 3. Wide Children Studying on Floor */}
                                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-md bg-slate-100 group h-[130px] sm:h-[155px] lg:h-[160px]">
                                    <img
                                        src={collageImages.childrenStudying}
                                        alt="Children studying books together"
                                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                </div>

                                {/* 4. Tall Smiling Charity Volunteer in Vest */}
                                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-md bg-slate-100 group h-[260px] sm:h-[300px] lg:h-[315px]">
                                    <img
                                        src={collageImages.volunteerInVest}
                                        alt="Charity volunteer in green vest smiling"
                                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* ======================================================== */}
            {/* KEY INITIATIVES & MISSION TEASER */}
            {/* ======================================================== */}
            <section className="bg-slate-50 py-14 sm:py-16 border-t border-slate-100">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Motto / Slogan Banner */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3 shadow-2xs">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                            <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
                                हमारा ध्येय वाक्य (Our Motto)
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-['Hind',sans-serif] leading-tight">
                            "निस्वार्थ सेवा, सतत विकास और समाज परिवर्तन का दृढ़ संकल्प!"
                        </h2>
                        <p className="text-slate-500 text-xs sm:text-sm mt-2.5 font-['Hind',sans-serif]">
                            (कंपनी अधिनियम, 2013 की धारा 8 के अंतर्गत पंजीकृत गैर-लाभकारी समाजसेवी संस्था)
                        </p>
                    </div>

                    {/* 4 Initiatives Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreInitiatives.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Top Gradient Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Background subtle number watermark */}
                                <span className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-amber-50 transition-colors pointer-events-none select-none">
                                    0{i + 1}
                                </span>

                                <div className="relative z-10">
                                    {/* Gradient Icon Squircle with Shadow */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white flex items-center justify-center mb-5 shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:shadow-amber-500/35 transition-all duration-300">
                                        {React.cloneElement(item.icon, { className: "w-7 h-7 text-white stroke-[2.2]" })}
                                    </div>

                                    {/* English Subtitle Pill */}
                                    <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wider">
                                        {item.enTitle}
                                    </span>

                                    {/* Hindi Title */}
                                    <h3 className="font-black text-slate-900 text-lg sm:text-xl font-['Hind',sans-serif] leading-snug group-hover:text-[#f59e0b] transition-colors mb-2.5">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-500 text-xs sm:text-sm font-['Hind',sans-serif] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bottom Interactive Link */}
                                <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-bold text-[#f59e0b]">
                                    <Link
                                        to="/about"
                                        className="inline-flex items-center gap-1.5 hover:text-[#d97706] transition-all group-hover:gap-2.5"
                                    >
                                        <span className="font-['Hind',sans-serif]">अधिक जानें</span>
                                        <span className="text-sm transition-transform duration-200">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ======================================================== */}
            {/* LEADERSHIP / FOUNDERS & TRUSTEES SECTION (Requested by User) */}
            {/* ======================================================== */}
            <section className="bg-white py-14 sm:py-16 border-t border-slate-100">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider">
                            LEADERSHIP
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mt-1 font-['Hind',sans-serif]">
                            संस्था के संस्थापक / संचालक <span className="text-[#f59e0b] text-xl sm:text-2xl block sm:inline">(Founders & Trustees)</span>
                        </h2>
                    </div>

                    {/* 2 Founders Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {founders.map((founder, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left group"
                            >
                                {/* Photo Frame / Slot with Dashed Border & Icon */}
                                <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-white border-2 border-dashed border-amber-300 flex items-center justify-center shrink-0 shadow-xs relative group-hover:border-[#f59e0b] transition-all">
                                    {founder.image ? (
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center p-3 text-center">
                                            <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-[#f59e0b] flex items-center justify-center mb-1.5 shadow-2xs">
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

                                {/* Founder Details */}
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
            </section>

            {/* ======================================================== */}
            {/* HOME GALLERY PREVIEW SECTION */}
            {/* ======================================================== */}
            <section className="bg-slate-50/60 py-16 border-t border-slate-100">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header with Title and "View All" Button */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                                <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
                                    कार्य छायाचित्र • Photo Gallery
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight font-['Hind',sans-serif]">
                                हमारे सामाजिक कार्यों की <span className="text-[#f59e0b]">झलकियाँ</span>
                            </h2>
                            <p className="text-slate-500 text-sm mt-2 max-w-xl font-['Hind',sans-serif]">
                                वृक्षारोपण, स्वास्थ्य जांच शिविर और छात्र सहायता अभियानों की कुछ प्रेरणादायी तस्वीरें।
                            </p>
                        </div>

                        {/* Top View All Button */}
                        <div>
                            <Link
                                to="/gallery"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
                            >
                                <span>सभी फ़ोटो देखें (View All Gallery)</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                    {/* 4 Photo Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {homeGalleryPreview.map((item) => (
                            <Link
                                key={item.id}
                                to="/gallery"
                                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <h3 className="font-bold text-slate-900 text-sm font-['Hind',sans-serif] leading-snug group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#f59e0b] font-bold">
                                        <span>फ़ोटो देखें</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Centered "View All" Button for Mobile */}
                    <div className="text-center mt-10 md:hidden">
                        <Link
                            to="/gallery"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm shadow-md transition-all active:scale-95"
                        >
                            <span>सभी फ़ोटो देखें (View All Gallery)</span>
                            <span>→</span>
                        </Link>
                    </div>

                </div>
            </section>

            {/* Video Modal (Pop-up when play button clicked) */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-5 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Sankalp Janseva Foundation</h3>
                        <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center text-white">
                            <div className="text-center p-4">
                                <div className="w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center mx-auto mb-2 shadow">
                                    <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="font-semibold text-sm">समाज परिवर्तन का संकल्प</p>
                                <p className="text-[11px] text-slate-400 mt-0.5 font-['Hind',sans-serif]">संकल्प जनसेवा फाउंडेशन</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Home;
