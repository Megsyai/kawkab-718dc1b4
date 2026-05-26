// src/pages/Index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-[env(safe-area-inset-bottom)]">
      <motion.section {...fadeIn} className="text-center py-16 lg:py-32">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-primary">
          أم كلثوم: سيدة الغناء العربي
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          اكتشف مسيرة كوكب الشرق، من نشأتها المتواضعة إلى أسطورتها الخالدة التي لا تزال تلهم الملايين حول العالم. استعرض أعمالها، تعرف على حياتها، واستمتع برائعتها الخالدة.
        </p>
        <div className="mt-10">
          <Button size="lg" className="rounded-full">
            استكشف الآن
          </Button>
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">أعمال خالدة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "ألف ليلة وليلة", desc: "قصة حب آسرة في ألف ليلة وليلة، لحنها ببراعة وأدتها بعاطفة جياشة.", imageUrl: "/images/alf-leila-w-leila.jpg" },
            { title: "انت عمري", desc: "قصيدة حب مؤثرة عبرت عن أسمى معاني الوفاء والشوق، لحنها محمد عبد الوهاب.", imageUrl: "/images/ent-omry.jpg" },
            { title: "ذات ليلة", desc: "لحن شرقي أصيل يحكي عن اللقاء في ليلة من ليالي القاهرة الساحرة.", imageUrl: "/images/zatt-leila.jpg" },
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover"/>
              <CardHeader>
                <CardTitle className="text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                <Button variant="link" className="mt-4 ps-0 text-lg">
                  استمع الآن →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }} className="py-16 lg:py-24 bg-card rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-4">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-primary">حياتها: رحلة من الإلهام</h2>
            <p className="text-lg text-muted-foreground mb-6">
              تعرف على تفاصيل حياة أم كلثوم، من بداياتها في قرية طماي الزهايرة، مروراً بتحدياتها الفنية، وصولاً إلى الألقاب التي حظيت بها، وكيف شكلت وجدان الأمة العربية.
            </p>
            <Button variant="secondary" size="lg" className="rounded-full">
              اقرأ المزيد عن حياتها
            </Button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/images/om-kalthoum-profile.jpg" 
              alt="أم كلثوم" 
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.6 }} className="py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">تواصل معنا</h2>
        <Card className="max-w-xl mx-auto rounded-2xl p-4 lg:p-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">ابقى على تواصل</CardTitle>
            <CardDescription className="text-center">
              اشترك في نشرتنا البريدية ليصلك كل جديد عن أم كلثوم وأخبارها.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input type="email" id="email" placeholder="your.email@example.com" className="rounded-lg mt-2" />
              </div>
              <Button type="submit" className="w-full rounded-full h-12 text-lg">
                اشترك الآن
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default Index;
