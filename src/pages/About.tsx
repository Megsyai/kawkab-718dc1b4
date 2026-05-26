// src/pages/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-[env(safe-area-inset-bottom)]">
      <motion.section {...fadeIn} className="text-center py-16 lg:py-32">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">عن كوكب الشرق</h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          تتعمق هذه الصفحة في حياة أم كلثوم، من جذورها في صعيد مصر إلى وصولها إلى قمة المجد الفني. استكشف رحلتها الملهمة، إنجازاتها، وتأثيرها الدائم على الموسيقى العربية.
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="py-16 lg:py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img 
            src="/images/om-kalthoum-childhood.jpg" 
            alt="أم كلثوم في شبابها" 
            className="rounded-2xl shadow-xl w-full"
          />
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">نشأتها وبداياتها</h2>
            <p className="text-lg text-muted-foreground mb-6">
              ولدت فاطمة إبراهيم السيد البلتاجي في قرية طماي الزهايرة، محافظة الدقهلية، في أوائل القرن العشرين. بدأت رحلتها مع الغناء في سن مبكرة، مستمدة شغفها من والدها الشيخ إبراهيم الذي كان مؤذناً وقارئاً للقرآن. سرعان ما لفتت موهبتها الأنظار، وانتقلت مع والدها إلى القاهرة لتنطلق مسيرتها الفنية نحو النجومية.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }} className="py-16 lg:py-24 bg-card rounded-3xl">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">مسيرتها الفنية الحافلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">الألقاب والإنجازات</h3>
                <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                  <li>لقبت بـ "كوكب الشرق" و "صوت مصر".</li>
                  <li>أول فنانة عربية تحصل على وسام النيل.</li>
                  <li>حفلاتها كانت حدثاً قومياً في مصر والعالم العربي.</li>
                  <li>تسجيلاتها مئات الأغاني الخالدة.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">تأثيرها الثقافي</h3>
                <p className="text-lg text-muted-foreground">
                  لم تكن أم كلثوم مجرد مغنية، بل كانت رمزاً ثقافياً وسياسياً. صوتها القوي والمعبر استطاع أن يوحد مشاعر الأمة في أوقات الشدة والفرح، وساهمت أغانيها الوطنية في تعزيز الهوية العربية. إرثها الموسيقي لا يزال حياً ومؤثراً حتى اليوم.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.6 }} className="py-16 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">مقتطفات من كلماتها</h2>
        <p className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
          "إن الموسيقى لا يمكن أن تكون مجرد تسلية، بل يجب أن تكون غذاء للروح، تحمل رسالة ومعنى."
        </p>
      </motion.section>
    </div>
  );
};

export default About;
