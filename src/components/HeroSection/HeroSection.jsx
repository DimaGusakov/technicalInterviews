import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainPhoto from "../../assets/HeroSection/mainphoto.png";
import FigmaIcon from "../../assets/HeroSection/figma.svg";
import ProgressIcon from "../../assets/HeroSection/progress.svg";
import {
  BarChartIcon,
  BookIcon,
  BookmarkIcon,
} from "../icons";
import React from "react";

export function HeroSection() {
  // Feature cards data
  const featureCards = [
    {
      icon: <BookIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "БОЛЬШАЯ БАЗА ВОПРОСОВ",
      description: "Изучай технологии по актуальным теоритеческим вопросам",
      bgColor: "bg-white",
      iconBgColor: "bg-[#ececec]",
    },
    {
      icon: <BarChartIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "ПРОГРЕСС ОБУЧЕНИЯ",
      description:
          "Смотрите аналитику по пройденным темам, повторяйте изученные",
      bgColor: "bg-purple-100",
      iconBgColor: "bg-purple-500",
    },
    {
      icon: <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "УДОБНЫЙ ТРЕНАЖЁР",
      description:
          "Улучшайте свои навыки в нашем тренажёре по запоминанию вопросов",
      bgColor: "bg-white",
      iconBgColor: "bg-[#ececec]",
    },
  ];

  return (
      <section className="w-full max-w-7xl mx-auto py-6 sm:py-8 md:py-10 px-3 sm:px-4 relative">
        <div className="relative">
          {/* Main content area */}
          <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
            {/* Left side - Text content */}
            <div className="w-full xl:w-1/2 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-9 text-center xl:text-left items-center xl:items-start">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col gap-1">
                  <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 w-fit rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm"
                  >
                    Топ вопросов
                  </Badge>

                  <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
                    YEAHUB
                    <br />
                    ПОМОГАЕТ РАСТИ
                    <br />И ДОСТИГАТЬ ЦЕЛЕЙ
                  </h1>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <p className="text-sm sm:text-base max-w-[527px] px-2 sm:px-0">
                    Развивайте и улучшайте свои навыки на одной платформе:
                    изучайте новое, готовьтесь к собеседованиям, погружайтесь в
                    нюансы или обновляйте знания — YeaHub поможет справиться с
                    любой задачей
                  </p>

                  <Button className="w-48 sm:w-52 md:w-56 lg:w-60 h-10 sm:h-11 md:h-12 rounded-full bg-purple-700 text-white hover:bg-purple-800 mx-auto xl:mx-0 text-sm sm:text-base">
                    Присоединиться
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Image and floating elements */}
            <div className="w-full xl:w-1/2 relative flex justify-center xl:justify-end">
              {/* Main image with responsive sizing */}
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-full">
                <img
                    src={MainPhoto}
                    alt="Person using YEAHUB"
                    className="w-full h-auto"
                />

                {/* Figma icon on the left - responsive positioning */}
                <div className="absolute -rotate-6 left-0 sm:-left-2 md:-left-4 lg:-left-8 xl:-left-12 2xl:-left-19 top-4 sm:top-6 md:top-8 lg:top-10 z-10">
                  <img
                      src={FigmaIcon}
                      alt="Figma design elements"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-full xl:h-full object-contain"
                  />
                </div>

                {/* Progress icon on the right - responsive positioning */}
                <div className="absolute right-0 sm:-right-2 md:-right-4 lg:-right-8 xl:-right-12 2xl:-right-17 top-32 sm:top-36 md:top-40 lg:top-44 xl:top-48 z-10">
                  <img
                      src={ProgressIcon}
                      alt="Progress tracking"
                      className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-25 lg:h-25 xl:w-full xl:h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-20 sm:mb-32 md:mb-[170px]">
            {featureCards.map((card, index) => (
                <Card
                    key={index}
                    className={`
                ${card.bgColor} rounded-xl
                ${index === 1 ? 'md:transform md:translate-y-10' : ''}
              `}
                >
                  <CardContent className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 p-4 sm:p-5 md:p-6">
                    <div
                        className={`flex w-[35px] h-[37px] sm:w-[40px] sm:h-[42px] md:w-[43px] md:h-[45px] items-center justify-center ${card.iconBgColor} rounded-lg`}
                    >
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-medium w-full">{card.title}</h3>
                      <p className="text-sm sm:text-base text-gray-700 w-full">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
}