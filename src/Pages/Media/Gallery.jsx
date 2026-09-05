import React, { useState } from 'react';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Environment', 'Education', 'Healthcare', 'Women Empowerment'];

    const galleryItems = [
        {
            id: 1,
            title: 'वृक्षारोपण अभियान (Tree Plantation Drive)',
            category: 'Environment',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=700&auto=format&fit=crop',
            desc: 'पर्यावरण संरक्षण एवं हरित परिसर निर्माण अभियान।'
        },
        {
            id: 2,
            title: 'जरूरतमंद विद्यार्थियों को शैक्षणिक सामग्री वितरण',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop',
            desc: 'मेधावी और निर्धन बच्चों के लिए कॉपियां, किताबें और स्कूल बैग वितरण।'
        },
        {
            id: 3,
            title: 'निःशुल्क स्वास्थ्य जांच एवं रक्तदान शिविर',
            category: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=700&auto=format&fit=crop',
            desc: 'ग्रामीण व मलिन बस्तियों में अनुभवी डॉक्टरों द्वारा निःशुल्क परामर्श और स्वास्थ्य परीक्षण।'
        },
        {
            id: 4,
            title: 'महिला कौशल विकास एवं सिलाई कार्यशाला',
            category: 'Women Empowerment',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
            desc: 'महिलाओं के स्वावलंबन और स्वरोजगार हेतु व्यावसायिक प्रशिक्षण कार्यक्रम।'
        },
        {
            id: 5,
            title: 'जल संवर्धन एवं स्वच्छता अभियान',
            category: 'Environment',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=700&auto=format&fit=crop',
            desc: 'जल संरक्षण, चेक डैम निर्माण और सामूहिक स्वच्छता पहल।'
        },
        {
            id: 6,
            title: 'होनहार विद्यार्थियों को छात्रवृत्ति प्रदान',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=700&auto=format&fit=crop',
            desc: 'उच्च शिक्षा जारी रखने के लिए होनहार छात्र-छात्राओं को आर्थिक प्रोत्साहन।'
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="w-full bg-slate-50/50 py-12 lg:py-16 text-slate-800">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                        <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
                            कार्य छायाचित्र
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight font-['Hind',sans-serif]">
                        फ़ोटो गैलरी <span className="text-[#f59e0b]">(Photo Gallery)</span>
                    </h1>
                    <p className="text-slate-600 text-base mt-3 max-w-xl mx-auto font-['Hind',sans-serif]">
                        संकल्प जनसेवा फाउंडेशन द्वारा आयोजित सामाजिक अभियानों, स्वास्थ्य शिविरों और पर्यावरण कार्यों की प्रेरणादायी झलकियाँ।
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeCategory === cat
                                    ? 'bg-[#f59e0b] text-white shadow-md scale-105'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-slate-900 text-base font-['Hind',sans-serif] leading-snug group-hover:text-[#f59e0b] transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs sm:text-sm font-['Hind',sans-serif] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 border-t border-slate-50 mt-2">
                                <span className="text-xs font-bold text-[#f59e0b] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                    <span>फ़ोटो देखें</span>
                                    <span>→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Gallery;
