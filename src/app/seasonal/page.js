import Image from "next/image";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";
export default function Page() {
  return (
    <main className="">
      <Nav/>


        <div
            dir={'rtl'}
            className={"w-full farsi"}
        >
            <div className={"m-12 md:m-24 lg:m-36 farsi"}>
                <h1 className={"title !text-4xl farsi"}>
                    روز جهانی
                    <span className={"p-1 text-light-aqua farsi"}>
                    زن
                    </span>
                </h1>
                <h1 className={"title farsi py-1"}>
                    و آغاز نیل هال
                </h1>

                <h1 className={"subheading farsi"}>
                    درباره نیل
                </h1>
                <h1 className={"article text-xs farsi"}>

                    نیل هال یک
                    استودیوی خلاق است که با تمرکز بر ارتقای جلوه بصری
                    برندها، خدمات مختلفی از جمله طراحی هویت برند
                    و عناصر بصری، طراحی فضاهای معماری
                    و فروشگاهی، بسته‌بندی، و تبلیغات  ارائه می‌دهد. ما در نیل به
                    دنبال روش‌های جدیدی از ارائه محصول و خدمات می‌گردیم
                    و هیچ محدودیتی برای تخیلمان قائل نیستیم.


                </h1>
                <img
                    className={"py-2"}
                    src={'NIL POSTER-02.jpg'}
                />

                <h1 className={"subheading farsi"}>
                    درباره مسابقه
                </h1>
                <h1 className={"article text-xs farsi"}>

                    تیم ما در نیل تصمیم گرفت تا در هشتم مارس ۲۰۲۴،
                    یعنی روز جهانی زن فعالیتش را آغاز کند. به
                    این مناسبت تصمیم گرفتیم تا با حمایت از زنان
                    دارای کسب‌و‌کارهای کوچگ، کارمان را
                    آغاز کنیم. شرکت در این مسابقه، فرصتی است برای
                    بهره بردن از خدمات ما در طراحی بصری، برندینگ،
                    تبلیغات و در نهایت، رشد برند و کسب و کار شما.


                </h1>
                <h1 className={"subheading farsi"}>
                    چه کسی می تواند در این مسابقه شرکت کند؟

                </h1>
                <h1 className={"article text-xs farsi"}>

                    این رقابت مخصوص زنانی است که
                    به تازگی کسب‌وکار خود را آغاز کرده‌‌اند و
                    به دنبال پیشرفت و ارتقای برندشان هستند.
                    این کسب و کار می‌تواند در هر زمینه‌ای (تولیدی یا خدماتی) باشد.


                </h1>

                <h1 className={"subheading farsi"}>
                    چطور شرکت کنیم؟
                </h1>
                <h1 className={"article text-xs farsi"}>

                    شما تا ۱۰م فروردین ۱۴۰۳ فرصت دارید که خود یا دوستانتان را به این رقابت معرفی کنید.
                    برای شرکت در مسابقه، توضیحی مختصر درباره‌ی خود و کارتان آماده کنید و
                    به همراه اطلاعات تماس و لینک صفحه کاری‌تان در
                    اینستاگرام، به یکی از سه روش زیر برای ما ارسال کنید:
                </h1>


                <h1 className="px-12  text-blue-400  flex items-center group hover:text-accent">
                    {/*<span className="text-accent">Phone</span>*/}
                    <Link href="https://t.me/Info_Nil" target="_blank" className={"hover:text-accent farsi"}>
                        پیام در تلگرام
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">*/}
                        {/*    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>*/}
                        {/*</svg>*/}
                    </Link>

                </h1>

                <h1 className="flex px-12  text-pink-300 items-center group hover:text-accent">
                    <Link
                        className={"farsi"}
                        href="https://www.instagram.com/nil_hall_creative/?igsh=MWw3YWg5cnV0ZXZvZA%3D%3D&utm_source=qr" target="_blank">
                        دایرکت اینستاگرام
                    </Link>
                </h1>


                <h1 className="px-12  text-red-300  flex items-center group hover:text-accent">
                    <Link
                        className={"farsi"}
                        href="mailto:info@nil-hall.com" target="_blank">
                        ارسال ایمیل
                    </Link>

                </h1>

                <h1 className={"subheading farsi"}>
                    چه چیزی به دست می‌آوریم؟
                </h1>
                <h1 className={"article text-xs farsi"}>
                    هشت برگزیده‌ی این مسابقه از مزایای زیر بهره‌مند می‌شوند:

                </h1>
                <h1 className={"article text-xs farsi"}>
                    ۱. بهره‌مندی از خدمات دیزاین یا ریدیزاین، بسته به نیازمندی‌های کار که می‌تواند شامل طراحی برند و
                    هویت برند، طراحی فضای فروشگاهی، بسته‌بندی، المان‌های
                    تبلیغاتی، عکاسی محصول و طراحی وبسایت و فروشگاه مجازی باشد.
                </h1>
                <h1 className={"article text-xs farsi"}>
                    ۲. کمک‌هزینه‌ی مالی برای چاپ و تولید اقلام طراحی‌شده توسط استودیوی نیل.

                </h1>
                <h1 className={"article text-xs farsi"}>
                    ۳. معرفی در شبکه‌های اجتماعی و تبلیغات مجازی رایگان.

                </h1>
                <h1 className={"article text-xs farsi"}>
                    ۴. دعوت ویژه به جشن آغاز نیل هال در تابستان سال ۱۴۰۳.

                </h1>

            </div>

        </div>

        <div
        >
            <div className={"m-12 md:m-24 lg:m-36 "}>
                <h1 className={"title !text-lg md:!text-4xl"}>
                    International
                    <span className={"p-1 text-light-aqua"}>
                Women's
            </span>
                    Day
                </h1>
                <h1 className={"title !text-lg md:!text-4xl"}>
                    and the Start of Nil Hall
                </h1>

                <h1 className={"subheading"}>
                    About Nil
                </h1>
                <h1 className={"article text-xs"}>

                    Nil Hall is a creative studio focused on enhancing the visual appeal of brands, offering various services including brand identity design, architectural and retail space design, packaging, and advertising. At Nil, we seek new ways of delivering products and services, with no limits to our imagination.

                </h1>

                <h1 className={"subheading"}>
                    About the Competition
                </h1>
                <h1 className={"article text-xs"}>

                    Our team at Nil decided to kick off its activities on March 8, 2024, International Women's Day. To mark the occasion, we've decided to start by supporting women with small businesses. Participating in this competition is an opportunity to benefit from our services in visual design, branding, advertising, and ultimately, brand and business growth.

                </h1>
                <h1 className={"subheading"}>
                    Who Can Participate in This Competition?
                </h1>
                <h1 className={"article text-xs"}>

                    This competition is specifically for women who have recently started their own businesses and are looking to progress and enhance their brands. This business can be in any field (manufacturing or services).

                </h1>

                <h1 className={"subheading"}>
                    How Can We Participate?
                </h1>
                <h1 className={"article text-xs"}>

                    You have until March 10, 2024, to introduce yourself or your friends to this competition. To participate, prepare a brief description of yourself and your work along with contact information and a link to your business page on Instagram, and send it to us in one of the following ways:

                </h1>


                <h1 className="px-12  text-blue-400  flex items-center group hover:text-accent">
                    <Link href="https://t.me/Info_Nil" target="_blank" className={""}>
                        Telegram Message
                    </Link>

                </h1>

                <h1 className="flex px-12  text-pink-300 items-center group hover:text-accent">
                    <Link
                        href="https://www.instagram.com/nil_hall_creative/?igsh=MWw3YWg5cnV0ZXZvZA%3D%3D&utm_source=qr" target="_blank">
                        Direct Instagram Message
                    </Link>
                </h1>


                <h1 className="px-12  text-red-300  flex items-center group hover:text-accent">
                    <Link
                        href="mailto:info@nil-hall.com" target="_blank">
                        Email Submission
                    </Link>

                </h1>

                <h1 className={"subheading"}>
                    What Do You Get?
                </h1>
                <h1 className={"article text-xs"}>
                    The eight winners of this competition will benefit from the following:

                </h1>
                <h1 className={"article text-xs"}>
                    1. Access to design or redesign services, depending on the needs of the business, which can include brand and identity design, retail space design, packaging, advertising elements, photography, and website design.
                </h1>
                <h1 className={"article text-xs"}>
                    2. Financial assistance for printing and production of designed items by Nil studio.
                </h1>
                <h1 className={"article text-xs"}>
                    3. Free promotion on social networks and digital advertising.
                </h1>
                <h1 className={"article text-xs"}>
                    4. Special invitation to the Nil Hall launch party in the summer of 2024.
                </h1>
            </div>
        </div>

      <Footer/>
       </main>
  );
}
