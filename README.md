# Digikala Clone (Next.js + TypeScript)

این پروژه یک **کلون پیشرفته از دیجی‌کالا** است که شامل امکانات کامل یک وب‌سایت تجارت الکترونیک است؛ از جمله صفحات محصولات، صفحه جزئیات محصول، دسته‌بندی‌ها، فیلتر و مرتب‌سازی پیشرفته، احراز هویت با JWT، داشبورد مدیریت و قابلیت‌های فراوان دیگر.

---

## 🛠️ تکنولوژی‌های مورد استفاده

- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **MongoDB**
- **Redux Toolkit** (به همراه RTK Query)
- **JWT Authentication**

---

## 🚀 ویژگی‌ها

### کاربر
- ثبت‌نام و ورود کاربران با احراز هویت JWT
- مشاهده، جستجو، فیلتر و مرتب‌سازی محصولات
- افزودن محصولات به سبد خرید و ثبت سفارش
- امکان ارسال نظر برای محصولات
- ویرایش اطلاعات حساب کاربری

### مدیر (Dashboard)
- افزودن محصولات جدید
- مدیریت دسته‌بندی‌ها و مشخصات آن‌ها
- مدیریت بنرها و اسلایدرهای صفحه اصلی
- بررسی و تایید نظرات کاربران
- مشاهده و تغییر وضعیت سفارش‌ها
- افزودن ویژگی‌ها و مشخصات اختصاصی برای هر دسته

### جستجو و فیلتر هوشمند
- جستجوی سریع محصولات
- فیلتر بر اساس قیمت، دسته، برند و ویژگی‌های مختلف
- نمایش محصولات تخفیف‌دار، پرفروش و محبوب

---

## ⚙️ نصب و راه‌اندازی پروژه

### 1️⃣ کلون یا دانلود پروژه
```bash
git clone https://github.com/arminahari-dev/digikala_clone_front.git
```

### 2️⃣ نصب وابستگی‌ها
```bash
npm install
```
در صورت تمایل می‌توانید از **yarn** نیز استفاده کنید:
```bash
npm i -g yarn
yarn
```

### 3️⃣ تنظیم متغیرهای محیطی
در مسیر اصلی پروژه، فایلی به نام `.env.local` ایجاد کرده و مقادیر زیر را در آن قرار دهید:

```bash
MONGODB_URL=<your MongoDB connection URL>
JWT_SECRET_KEY=<your JWT secret>
NEXT_PUBLIC_LIARA_ENDPOINT=<your Liara endpoint>
NEXT_PUBLIC_LIARA_BUCKET_NAME=<your Liara bucket name>
NEXT_PUBLIC_LIARA_ACCESS_KEY=<your Liara access key>
NEXT_PUBLIC_LIARA_SECRET_KEY=<your Liara secret key>
```

### 4️⃣ راه‌اندازی MongoDB
MongoDB را از لینک زیر (در صورت نیاز با فیلترشکن) دانلود و نصب کنید:  
[دانلود MongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.2.1-signed.msi)

سپس یک دیتابیس جدید ایجاد کرده و داده‌های آماده را از لینک زیر دانلود کنید و در مجموعه‌های مربوطه وارد نمایید:

📦 [دانلود داده‌ها از Google Drive](https://drive.google.com/drive/folders/1tonl8z-LbPM_umavCs9DBVs4hc0CmwVd?usp=sharing)

### 5️⃣ ساخت JWT Secret
برای تولید کلید JWT، دستور زیر را اجرا کنید و خروجی را در فایل `.env.local` قرار دهید:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 6️⃣ تنظیم Liara (ذخیره‌سازی ابری)
به [Liara.ir](https://liara.ir/) بروید، وارد حساب کاربری خود شوید و یک **Bucket جدید** ایجاد کنید. سپس مقادیر مربوطه را در فایل `.env.local` جای‌گذاری کنید.

### 7️⃣ اجرای پروژه
پس از تنظیم موارد بالا، پروژه را با دستور زیر اجرا کنید:
```bash
npm run build
```
و بعد از ساخته شدن .next قولدر بدون ارور شما میتونید دستور زیر را اجرا کنید:
```bash
npm run dev
```
یا
```bash
yarn dev
```

اکنون می‌توانید برنامه را در آدرس زیر مشاهده کنید:
```bash
http://localhost:3000
```

### 8️⃣ فعال‌سازی دسترسی مدیر (Admin)
پس از ایجاد حساب کاربری در مسیر زیر:
```bash
http://localhost:3000/authentication/login
```
به پایگاه داده مراجعه کرده و مقدار `role` کاربر خود را به `root` تغییر دهید تا به داشبورد مدیریت دسترسی داشته باشید.

---

## 📧 پشتیبانی
در صورت بروز مشکل یا نیاز به همکاری، می‌توانید در [GitHub Issues](https://github.com/arminahari-dev/digikala_clone_front/issues) مطرح کنید.

---

**توسعه‌دهنده:** Armin Ahari  
**نسخه:** 1.0.0  
**مجوز:** MIT License  