import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Environment', 'Education', 'Healthcare', 'Women Empowerment'];

  const galleryItems = [
    {
      id: 1,
      title: 'वृक्षारोपण मोहीम (Tree Plantation Drive)',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=700&auto=format&fit=crop',
      desc: 'पर्यावरण संवर्धन व हरित परिसर निर्मिती मोहीम.'
    },
    {
      id: 2,
      title: 'गरजू विद्यार्थ्यांना शैक्षणिक साहित्य वाटप',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop',
      desc: 'Free educational kits and books distribution for bright students.'
    },
    {
      id: 3,
      title: 'मोफत आरोग्य तपासणी व रक्तदान शिबीर',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=700&auto=format&fit=crop',
      desc: 'Free health check-up camp with expert doctors in rural community.'
    },
    {
      id: 4,
      title: 'महिला कौशल्य विकास कार्यशाळा',
      category: 'Women Empowerment',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
      desc: 'Vocational training and tailoring workshop for women self-reliance.'
    },
    {
      id: 5,
      title: 'पाणी अडवा, पाणी जिरवा व स्वच्छता मोहीम',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=700&auto=format&fit=crop',
      desc: 'Water conservation initiative and neighborhood cleaning drive.'
    },
    {
      id: 6,
      title: 'गुणवंत विद्यार्थ्यांना शिष्यवृत्ती वाटप',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=700&auto=format&fit=crop',
      desc: 'Scholarship ceremony empowering young minds to continue higher education.'
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
              कार्य छायाचित्रे
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            संस्थेची गॅलरी <span className="text-[#f59e0b]">(Photo Gallery)</span>
          </h1>
          <p className="text-slate-600 text-base mt-3 max-w-xl mx-auto">
            Glimpses of our ongoing social welfare, tree plantation, health drives, and educational support initiatives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
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
              className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 font-['Hind',sans-serif] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
