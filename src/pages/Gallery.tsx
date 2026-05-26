// src/pages/Gallery.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const Gallery = () => {
  const images = [
    { src: "/images/gallery/om-kalthoum-1.jpg", alt: "أم كلثوم وهي تغني" },
    { src: "/images/gallery/om-kalthoum-2.jpg", alt: "أم كلثوم مع جمهورها" },
    { src: "/images/gallery/om-kalthoum-3.jpg", alt: "أم كلثوم في استوديو التسجيل" },
    { src: "/images/gallery/om-kalthoum-4.jpg", alt: "أم كلثوم في مناسبة رسمية" },
    { src: "/images/gallery/om-kalthoum-5.jpg", alt: "أم كلثوم في لقطة كلاسيكية" },
    { src: "/images/gallery/om-kalthoum-6.jpg", alt: "أم كلثوم في حفل موسيقي" },
    { src: "/images/gallery/om-kalthoum-7.jpg", alt: "أم كلثوم وهي تلقي خطاباً" },
    { src: "/images/gallery/om-kalthoum-8.jpg", alt: "أم كلثوم في عزف منفرد" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-[env(safe-area-inset-bottom)]">
      <motion.section {...fadeIn} className="text-center py-16 lg:py-32">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">معرض الصور</h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          استعرض لقطات نادرة وذكريات خالدة من حياة ومشوار أم كلثوم الفني، تجسيداً لجمال وروح عصرها الذهبي.
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card key={index} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardContent className="p-0 m-0">
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover cursor-pointer" />
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Gallery;
