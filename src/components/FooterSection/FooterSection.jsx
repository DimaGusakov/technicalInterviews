import { Separator } from "@/components/ui/separator";
import YouTube from '../../assets/FooterSection/Youtube.svg';
import Github from '../../assets/FooterSection/Github.svg';
import Instagram from '../../assets/FooterSection/Instagram.svg';
import Telegram from '../../assets/FooterSection/Telegram.svg';
import Figma from '../../assets/FooterSection/Figma.svg';
import React from "react";

export function FooterSection() {
    const socialLinks = [
        {
            icon: <img src={YouTube} alt="YouTube" className="w-7 h-7"/>,
            href: "#",
        },
        {
            icon: <img src={Github} alt="GitHub" className="w-7 h-7" />,
            href: "#",
        },
        {
            icon: <img src={Instagram} alt="Instagram" className="w-[29px] h-7" />,
            href: "#",
        },
        {
            icon: <img src={Telegram} alt="Discord" className="w-7 h-7" />,
            href: "#",
        },
    ];

    return (
        <footer className="w-full bg-[rgb(24,0,62)] rounded-t-[20px] py-8 sm:py-12 lg:py-16">
            <div className="px-4 sm:px-8 lg:px-16 xl:px-28 max-w-[1440px] mx-auto">
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="99" height="32" viewBox="0 0 99 32" fill="none" className="w-20 h-6 sm:w-24 sm:h-8 lg:w-[99px] lg:h-8">
                            <path d="M16.4364 5.95834H21.1694L13.9611 18.6022V24.9105H9.50004V18.6022L2.29167 5.95834H7.02471L11.7306 14.568L16.4364 5.95834Z" fill="white"/>
                            <path d="M26.9147 25.2083C24.8474 25.2083 23.1337 24.5676 21.7736 23.2861C20.4135 21.9865 19.7335 20.2988 19.7335 18.2231C19.7335 16.1654 20.4045 14.4868 21.7464 13.1872C23.1065 11.8877 24.7839 11.2379 26.7787 11.2379C28.7372 11.2379 30.3602 11.8516 31.6477 13.0789C32.9352 14.2883 33.579 15.8857 33.579 17.8711C33.579 18.2321 33.5518 18.6834 33.4974 19.2249H24.1129C24.258 20.0732 24.5753 20.714 25.065 21.1472C25.5727 21.5804 26.1802 21.797 26.8875 21.797C27.4859 21.797 28.0027 21.6526 28.4379 21.3638C28.8732 21.0569 29.1452 20.6508 29.254 20.1454L33.035 21.1472C32.6723 22.4828 31.9288 23.4936 30.8045 24.1795C29.6983 24.8654 28.4017 25.2083 26.9147 25.2083ZM24.2489 16.5174H29.4172C29.3084 16.0301 29.0182 15.6059 28.5467 15.2449C28.0934 14.8659 27.5131 14.6763 26.8059 14.6763C25.5365 14.6763 24.6842 15.29 24.2489 16.5174Z" fill="white"/>
                            <path d="M48.0416 21.445C48.1867 21.445 48.3953 21.3999 48.6673 21.3096V24.9647C48.2865 25.1091 47.7515 25.1813 47.0624 25.1813C45.3215 25.1813 44.1428 24.6939 43.5262 23.7192C42.5832 24.6939 41.2322 25.1813 39.4732 25.1813C38.095 25.1813 36.9707 24.8203 36.1002 24.0983C35.2479 23.3763 34.8218 22.3836 34.8218 21.1201C34.8218 19.9469 35.2117 18.9992 35.9914 18.2773C36.7712 17.5553 37.823 17.1311 39.1468 17.0048L43.0366 16.6528V16.382C43.0366 15.8586 42.8552 15.4435 42.4926 15.1366C42.1299 14.8117 41.6675 14.6493 41.1053 14.6493C40.0898 14.6493 39.4823 15.1366 39.2828 16.1113L35.393 15.5698C35.6287 14.0536 36.2997 12.9526 37.4059 12.2667C38.5302 11.5808 39.8722 11.2379 41.4317 11.2379C43.2814 11.2379 44.7321 11.6801 45.7839 12.5645C46.8539 13.4309 47.3888 14.6673 47.3888 16.2737V20.714C47.3888 21.2013 47.6064 21.445 48.0416 21.445ZM43.0366 19.6581V19.3602L40.4797 19.6581C40.0444 19.7122 39.6999 19.8566 39.446 20.0913C39.1921 20.3079 39.0652 20.5696 39.0652 20.8764C39.0652 21.2374 39.2193 21.5172 39.5276 21.7157C39.854 21.9143 40.262 22.0045 40.7517 21.9865C41.4045 21.9504 41.9485 21.7338 42.3838 21.3367C42.819 20.9396 43.0366 20.3801 43.0366 19.6581Z" fill="white"/>
                            <path d="M58.4545 11.2379C59.9777 11.2379 61.2199 11.6801 62.1811 12.5645C63.1603 13.449 63.6499 14.6854 63.6499 16.2737V24.9105H59.2977V17.6004C59.2977 16.7882 59.0982 16.1835 58.6993 15.7864C58.3003 15.3713 57.7563 15.1637 57.0672 15.1637C56.3781 15.1637 55.825 15.3803 55.4079 15.8135C55.009 16.2467 54.8095 16.8784 54.8095 17.7087V24.9105H50.4573V5.95834H54.8095V12.6187C55.6981 11.6981 56.9131 11.2379 58.4545 11.2379Z" fill="white"/>
                            <path d="M74.9419 11.5086H79.2941V24.9105H74.9419V23.8005C74.0533 24.721 72.8383 25.1813 71.2969 25.1813C69.8462 25.1813 68.6131 24.721 67.5975 23.8005C66.6002 22.8619 66.1015 21.5533 66.1015 19.8747V11.5086H70.4537V18.927C70.4537 19.7032 70.6532 20.2898 71.0521 20.6869C71.4511 21.0659 71.9951 21.2555 72.6842 21.2555C73.3733 21.2555 73.9173 21.0389 74.3163 20.6057C74.7334 20.1725 74.9419 19.5407 74.9419 18.7105V11.5086Z" fill="white"/>
                            <path d="M90.0712 11.2379C91.9209 11.2379 93.4895 11.8967 94.777 13.2143C96.0646 14.5139 96.7083 16.1835 96.7083 18.2231C96.7083 20.2266 96.0736 21.8872 94.8042 23.2048C93.5348 24.5225 91.9662 25.1813 90.0984 25.1813C88.5026 25.1813 87.1969 24.6939 86.1814 23.7192V24.9105H81.8292V5.95834H86.1814V12.6728C87.1788 11.7162 88.4754 11.2379 90.0712 11.2379ZM89.2008 21.4179C90.0349 21.4179 90.7422 21.1291 91.3225 20.5515C91.9028 19.9559 92.1929 19.1797 92.1929 18.2231C92.1929 17.2484 91.9028 16.4723 91.3225 15.8947C90.7603 15.2991 90.0531 15.0012 89.2008 15.0012C88.3303 15.0012 87.6049 15.2991 87.0246 15.8947C86.4625 16.4723 86.1814 17.2484 86.1814 18.2231C86.1814 19.1797 86.4625 19.9559 87.0246 20.5515C87.6049 21.1291 88.3303 21.4179 89.2008 21.4179Z" fill="white"/>
                        </svg>
                    </div>

                    {/* Tagline */}
                    <div className="text-white mb-6 sm:mb-8 lg:mb-10 font-body-16 text-center sm:text-left text-sm sm:text-base max-w-[289px] mx-auto sm:mx-0">
                        Выбери, каким будет IT завтра, вместе с нами
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5 mb-8 sm:mb-12 lg:mb-16">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-white hover:opacity-80 transition-opacity">
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="text-xs text-center sm:text-left sm:text-sm text-[#FFFFFF99] mb-8 sm:mb-10 lg:mb-12 max-w-full lg:max-w-[1216px] leading-relaxed">
                        YeaHub — это полностью открытый проект, призванный объединить и
                        улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
                        Дизайн проекта также открыт для ознакомления в Figma.
                    </div>

                    {/* Divider */}
                    <Separator className="bg-white/10 mb-4 sm:mb-5" />

                    {/* Footer Bottom */}
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
                        <div className="text-xs sm:text-sm text-[#FFFFFF99] order-2 sm:order-1">
                            © 2024 YeaHub
                        </div>
                        <div className="flex items-center gap-2 order-1 sm:order-2">
                            <a href="#" className="text-white hover:opacity-80 transition-opacity">
                                <img src={Figma} alt="Figma" className="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                            <a href="#" className="text-white hover:opacity-80 transition-opacity">
                                <img src={Github} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}