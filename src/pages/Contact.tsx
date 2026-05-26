// src/pages/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-[env(safe-area-inset-bottom)]">
      <motion.section {...fadeIn} className="text-center py-16 lg:py-32">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">تواصل معنا</h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          هل لديك استفسار، اقتراح، أو ترغب في التواصل معنا؟ استخدم النموذج أدناه أو الطرق المتاحة للتواصل.
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="py-16 lg:py-24">
        <Card className="max-w-3xl mx-auto rounded-2xl p-4 lg:p-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">نموذج التواصل</CardTitle>
            <CardDescription className="text-center">
              املأ الحقول أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">الاسم</Label>
                  <Input id="name" placeholder="اسمك الكامل" className="rounded-lg mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="rounded-lg mt-2" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" placeholder="موضوع رسالتك" className="rounded-lg mt-2" />
              </div>
              <div>
                <Label htmlFor="message">الرسالة</Label>
                <Textarea id="message" placeholder="اكتب رسالتك هنا..." rows={5} className="rounded-lg mt-2" />
              </div>
              <Button type="submit" className="w-full rounded-full h-12 text-lg">
                إرسال الرسالة
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }} className="py-16 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">معلومات إضافية</h2>
        <div className="text-lg text-muted-foreground space-y-4">
          <p>
            <strong>البريد الإلكتروني:</strong> contact@omkalthoum.site
          </p>
          <p>
            <strong>الهاتف:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>العنوان:</strong> 123 شارع الفن، القاهرة، مصر
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
