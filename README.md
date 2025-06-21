# 🎬 VidFast Stremio Add-on

إضافة Stremio للبث المباشر باستخدام خدمة VidFast.pro

![VidFast Logo](https://via.placeholder.com/200x100/FF6B35/FFFFFF?text=VidFast)

## 📋 الوصف

هذه الإضافة تتيح لك مشاهدة الأفلام والمسلسلات من خلال VidFast.pro مباشرة في تطبيق Stremio باستخدام HTTP streams.

## ✨ المميزات

- 🎥 دعم الأفلام والمسلسلات
- 🔍 يدعم IMDb ID و TMDB ID
- 🚀 واجهة بسيطة وسهلة الاستخدام
- 📡 بث مباشر عبر HTTP streams
- ⚡ سرعة في الاستجابة
- 🛡️ معالجة محسنة للأخطاء

## 🚀 التثبيت والإعداد

### المتطلبات
- Node.js (الإصدار 12 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **استنسخ المشروع:**
```bash
git clone https://github.com/yourusername/vidfast-stremio-addon.git
cd vidfast-stremio-addon
```

2. **ثبت التبعيات:**
```bash
npm install
```

3. **شغل الإضافة:**
```bash
npm start
```

4. **الإضافة ستعمل على المنفذ 7000 بشكل افتراضي**

## 📱 إضافة الإضافة إلى Stremio

1. افتح تطبيق Stremio
2. اذهب إلى **Add-ons**
3. أدخل الرابط التالي:
```
http://localhost:7000/manifest.json
```
4. اضغط على **Install**

## 📖 كيفية الاستخدام

### للأفلام 🎬:
1. ابحث عن الفيلم في Stremio
2. اختر الفيلم المطلوب
3. ستجد خيار "🎬 VidFast Stream" في قائمة المصادر
4. اضغط عليه للبدء في المشاهدة

### للمسلسلات 📺:
1. ابحث عن المسلسل في Stremio
2. اختر الموسم والحلقة المطلوبة
3. ستجد خيار "📺 VidFast Stream" في قائمة المصادر
4. اضغط عليه للبدء في المشاهدة

## 🔧 الأوامر المتاحة

```bash
# تشغيل الإضافة
npm start

# تشغيل في وضع التطوير (مع auto-reload)
npm run dev

# اختبار الإضافة
npm test
```

## 🏗️ البنية التقنية

### endpoints المستخدمة:

**للأفلام:**
```
https://vidfast.pro/movie/{id}?autoPlay=true
```

**للمسلسلات:**
```
https://vidfast.pro/tv/{id}/{season}/{episode}?autoPlay=true
```

حيث `{id}` هو معرف الفيلم من IMDb أو TMDB.

### معرفات مدعومة:
- **IMDb ID**: `tt1234567`
- **TMDB ID**: `tmdb:550`

## 🐳 النشر

### Heroku
```bash
# إنشاء تطبيق جديد
heroku create your-app-name

# نشر الكود
git push heroku main

# استخدم رابط Heroku في Stremio
https://your-app-name.herokuapp.com/manifest.json
```

### Docker
```bash
# بناء الصورة
docker build -t vidfast-addon .

# تشغيل الحاوية
docker run -p 7000:7000 vidfast-addon
```

## 🛠️ التطوير والمساهمة

### إضافات مقترحة:
- [ ] إضافة دعم لجودات مختلفة
- [ ] إضافة ترجمات
- [ ] تحسين معالجة الأخطاء
- [ ] إضافة كاش للنتائج
- [ ] دعم البحث المتقدم
- [ ] إضافة إعدادات قابلة للتخصيص

### المساهمة:
1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 🐛 المشاكل الشائعة

### لا تظهر الروابط:
- ✅ تأكد من أن الإضافة تعمل على المنفذ الصحيح
- ✅ تحقق من اتصالك بالإنترنت
- ✅ تأكد من أن VidFast.pro يدعم المحتوى المطلوب

### رسائل خطأ:
- ✅ راجع console logs للحصول على تفاصيل الخطأ
- ✅ تأكد من صحة IMDb ID أو TMDB ID
- ✅ تحقق من أن الخدمة متاحة

## 📄 الترخيص

MIT License - راجع ملف [LICENSE](LICENSE) للتفاصيل

## 🤝 الدعم

إذا واجهت أي مشاكل أو لديك اقتراحات:

- 🐛 [فتح مشكلة جديدة](https://github.com/yourusername/vidfast-stremio-addon/issues)
- 💬 [مناقشة المشروع](https://github.com/yourusername/vidfast-stremio-addon/discussions)
- 📧 راسلنا على: your-email@example.com

## 🙏 شكر خاص

- فريق [Stremio](https://www.stremio.com/) لتطوير المنصة الرائعة
- [VidFast.pro](https://vidfast.pro/) لتوفير خدمة البث

---

**⭐ لا تنس إعطاء المشروع نجمة إذا أعجبك! ⭐**
