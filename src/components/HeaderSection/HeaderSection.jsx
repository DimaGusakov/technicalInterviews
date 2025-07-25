import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export const HeaderSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); // Исправлено: добавлено присвоение

    // Navigation links data
    const navLinks = [
        { text: "О Нас", active: false },
        { text: "Команда", active: true },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="mt-6 mb-15 px-4 sm:px-6 lg:px-8">
            <header className="flex items-center justify-between py-2 max-w-7xl mx-auto">
                {/* Logo and Navigation Container */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
                    {/* Logo */}
                    <div className="w-20 h-6 sm:w-24 sm:h-7 lg:w-[99px] lg:h-8 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 99 32"
                            className="w-full h-full"
                            fill="none"
                        >
                            <path d="M16.4364 5.95825H21.1694L13.9611 18.6021V24.9104H9.50004V18.6021L2.29167 5.95825H7.02471L11.7306 14.568L16.4364 5.95825Z" fill="#141414"/>
                            <path d="M26.9147 25.2083C24.8474 25.2083 23.1337 24.5675 21.7736 23.286C20.4135 21.9864 19.7335 20.2987 19.7335 18.223C19.7335 16.1654 20.4045 14.4867 21.7464 13.1872C23.1065 11.8876 24.7839 11.2378 26.7787 11.2378C28.7372 11.2378 30.3602 11.8515 31.6477 13.0789C32.9352 14.2882 33.579 15.8856 33.579 17.8711C33.579 18.232 33.5518 18.6833 33.4974 19.2248H24.1129C24.258 20.0731 24.5753 20.7139 25.065 21.1471C25.5727 21.5803 26.1802 21.7969 26.8875 21.7969C27.4859 21.7969 28.0027 21.6525 28.4379 21.3637C28.8732 21.0568 29.1452 20.6507 29.254 20.1453L33.035 21.1471C32.6723 22.4827 31.9288 23.4935 30.8045 24.1794C29.6983 24.8653 28.4017 25.2083 26.9147 25.2083ZM24.2489 16.5173H29.4172C29.3084 16.03 29.0182 15.6058 28.5467 15.2448C28.0934 14.8658 27.5131 14.6763 26.8059 14.6763C25.5365 14.6763 24.6842 15.2899 24.2489 16.5173Z" fill="#141414"/>
                            <path d="M48.0416 21.4449C48.1867 21.4449 48.3953 21.3998 48.6673 21.3095V24.9646C48.2865 25.109 47.7515 25.1812 47.0624 25.1812C45.3215 25.1812 44.1428 24.6938 43.5262 23.7192C42.5832 24.6938 41.2322 25.1812 39.4732 25.1812C38.095 25.1812 36.9707 24.8202 36.1002 24.0982C35.2479 23.3762 34.8218 22.3835 34.8218 21.12C34.8218 19.9468 35.2117 18.9992 35.9914 18.2772C36.7712 17.5552 37.823 17.131 39.1468 17.0047L43.0366 16.6527V16.382C43.0366 15.8585 42.8552 15.4434 42.4926 15.1365C42.1299 14.8116 41.6675 14.6492 41.1053 14.6492C40.0898 14.6492 39.4823 15.1365 39.2828 16.1112L35.393 15.5697C35.6287 14.0535 36.2997 12.9525 37.4059 12.2666C38.5302 11.5807 39.8722 11.2378 41.4317 11.2378C43.2814 11.2378 44.7321 11.68 45.7839 12.5644C46.8539 13.4308 47.3888 14.6672 47.3888 16.2737V20.7139C47.3888 21.2012 47.6064 21.4449 48.0416 21.4449ZM43.0366 19.658V19.3602L40.4797 19.658C40.0444 19.7121 39.6999 19.8565 39.446 20.0912C39.1921 20.3078 39.0652 20.5695 39.0652 20.8763C39.0652 21.2373 39.2193 21.5171 39.5276 21.7156C39.854 21.9142 40.262 22.0044 40.7517 21.9864C41.4045 21.9503 41.9485 21.7337 42.3838 21.3366C42.819 20.9395 43.0366 20.38 43.0366 19.658Z" fill="#141414"/>
                            <path d="M58.4545 11.2378C59.9777 11.2378 61.2199 11.68 62.1811 12.5644C63.1603 13.4489 63.6499 14.6853 63.6499 16.2737V24.9104H59.2977V17.6003C59.2977 16.7881 59.0982 16.1834 58.6993 15.7863C58.3003 15.3712 57.7563 15.1636 57.0672 15.1636C56.3781 15.1636 55.825 15.3802 55.4079 15.8134C55.009 16.2466 54.8095 16.8783 54.8095 17.7086V24.9104H50.4573V5.95825H54.8095V12.6186C55.6981 11.6981 56.9131 11.2378 58.4545 11.2378Z" fill="#141414"/>
                            <path d="M74.9419 11.5085H79.2941V24.9104H74.9419V23.8004C74.0533 24.7209 72.8383 25.1812 71.2969 25.1812C69.8462 25.1812 68.6131 24.7209 67.5975 23.8004C66.6002 22.8618 66.1015 21.5532 66.1015 19.8746V11.5085H70.4537V18.927C70.4537 19.7031 70.6532 20.2897 71.0521 20.6868C71.4511 21.0658 71.9951 21.2554 72.6842 21.2554C73.3733 21.2554 73.9173 21.0388 74.3163 20.6056C74.7334 20.1724 74.9419 19.5406 74.9419 18.7104V11.5085Z" fill="#141414"/>
                            <path d="M90.0712 11.2378C91.9209 11.2378 93.4895 11.8966 94.777 13.2142C96.0646 14.5138 96.7083 16.1834 96.7083 18.223C96.7083 20.2265 96.0736 21.8871 94.8042 23.2047C93.5348 24.5224 91.9662 25.1812 90.0984 25.1812C88.5026 25.1812 87.1969 24.6938 86.1814 23.7192V24.9104H81.8292V5.95825H86.1814V12.6727C87.1788 11.7161 88.4754 11.2378 90.0712 11.2378ZM89.2008 21.4178C90.0349 21.4178 90.7422 21.129 91.3225 20.5514C91.9028 19.9558 92.1929 19.1797 92.1929 18.223C92.1929 17.2483 91.9028 16.4722 91.3225 15.8946C90.7603 15.299 90.0531 15.0011 89.2008 15.0011C88.3303 15.0011 87.6049 15.299 87.0246 15.8946C86.4625 16.4722 86.1814 17.2483 86.1814 18.223C86.1814 19.1797 86.4625 19.9558 87.0246 20.5514C87.6049 21.129 88.3303 21.4178 89.2008 21.4178Z" fill="#141414"/>
                        </svg>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:block">
                        <NavigationMenuList className="flex items-center gap-4 lg:gap-6">
                            {navLinks.map((link, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        className={`text-sm lg:text-base cursor-pointer hover:text-purple-700 transition-colors ${
                                            link.active ? "font-bold text-purple-700" : "text-black"
                                        }`}
                                    >
                                        {link.text}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Authentication buttons */}
                <div className="hidden sm:flex items-center gap-3 lg:gap-6">
                    <Button
                        onClick={handleLogin}
                        variant="ghost"
                        className="text-purple-700 font-semibold px-3 lg:px-4 text-sm lg:text-base hover:bg-purple-50"
                    >
                        Вход
                    </Button>

                    <Button
                        onClick={handleRegister}
                        className="bg-purple-700 text-white rounded-full h-10 lg:h-12 px-4 lg:px-6 font-medium text-sm lg:text-base hover:bg-purple-800 transition-colors"
                    >
                        Регистрация
                    </Button>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMobileMenu}
                    className="sm:hidden flex flex-col gap-1 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </header>

            {/* Mobile menu */}
            <div className={`sm:hidden overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-4 py-4 bg-white border-t border-gray-100">
                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-4 mb-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`text-base py-2 px-3 rounded-lg transition-colors ${
                                    link.active
                                        ? "font-bold text-purple-700 bg-purple-50"
                                        : "text-black hover:bg-gray-50"
                                }`}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Authentication buttons */}
                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={handleLogin}
                            variant="ghost"
                            className="text-purple-700 font-semibold w-full justify-center py-3 hover:bg-purple-50"
                        >
                            Вход
                        </Button>

                        <Button
                            onClick={handleRegister}
                            className="bg-purple-700 text-white rounded-full w-full py-3 font-medium hover:bg-purple-800 transition-colors"
                        >
                            Регистрация
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;