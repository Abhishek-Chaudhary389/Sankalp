import React from 'react';

const News = () => {
    const newsArticles = [
        {
            id: 1,
            date: 'सितंबर २०२६',
            tag: 'पर्यावरण अभियान',
            title: 'संकल्प जनसेवा फाउंडेशन द्वारा भव्य वृक्षारोपण एवं जल संरक्षण अभियान संपन्न',
            enTitle: 'Mega Tree Plantation & Water Conservation Drive Successfully Completed',
            desc: 'श्री अमोल पुंजाजी खोंदील एवं एड. श्री बाबुराव पुजारी के मार्गदर्शन में १,००० से अधिक फलदार व छायादार पौधों का रोपण किया गया।',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=700&auto=format&fit=crop'
        },
        {
            id: 2,
            date: 'अगस्त २०२६',
            tag: 'स्वास्थ्य शिविर',
            title: 'ग्रामीण क्षेत्र में निःशुल्क स्वास्थ्य जांच एवं रक्तदान शिविर का आयोजन',
            enTitle: 'Free Multi-Speciality Health Check-Up & Blood Donation Camp',
            desc: '५०० से अधिक जरूरतमंद नागरिकों को निःशुल्क दवाइयां, चिकित्सकीय परामर्श और स्वास्थ्य जांच की सुविधा दी गई।',
            image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=700&auto=format&fit=crop'
        },
        {
            id: 3,
            date: 'जुलाई २०२६',
            tag: 'शिक्षा सहयोग',
            title: 'मेधावी एवं जरूरतमंद विद्यार्थियों को अध्ययन सामग्री व छात्रवृत्ति वितरण',
            enTitle: 'Distribution of Educational Materials and Merit Scholarships',
            desc: 'विद्यार्थियों के उज्ज्वल भविष्य के लिए कॉपियां, पुस्तकें, बैग व छात्रवृत्ति सहायता प्रदान की गई।',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop'
        }
    ];

    return (
        <div className="w-full bg-slate-50/50 py-12 lg:py-16 text-slate-800">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                        <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
                            समाचार एवं अपडेट्स
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight font-['Hind',sans-serif]">
                        ताज़ा समाचार <span className="text-[#f59e0b]">(Latest News & Updates)</span>
                    </h1>
                    <p className="text-slate-600 text-base mt-3 max-w-xl mx-auto font-['Hind',sans-serif]">
                        संकल्प जनसेवा फाउंडेशन की गतिविधियों, सामाजिक अभियानों और नई पहलों की पूरी जानकारी।
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <article
                            key={article.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div>
                                <div className="h-52 overflow-hidden relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-[#f59e0b] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                        {article.tag}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <p className="text-xs font-bold text-slate-400 mb-2 font-['Hind',sans-serif] flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{article.date}</span>
                                    </p>
                                    <h3 className="text-lg font-black text-slate-900 font-['Hind',sans-serif] leading-snug mb-2 group-hover:text-[#f59e0b] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-slate-600 mb-3">
                                        {article.enTitle}
                                    </p>
                                    <p className="text-slate-500 text-sm font-['Hind',sans-serif] leading-relaxed">
                                        {article.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0 border-t border-slate-50 mt-4">
                                <span className="text-xs font-bold text-[#f59e0b] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                    <span>विस्तार से पढ़ें (Read More)</span>
                                    <span>→</span>
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default News;
