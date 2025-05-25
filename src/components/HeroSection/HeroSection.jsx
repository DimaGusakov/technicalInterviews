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
      icon: <BookIcon className="w-6 h-6" />,
      title: "БОЛЬШАЯ БАЗА ВОПРОСОВ",
      description: "Изучай технологии по актуальным теоритеческим вопросам",
      bgColor: "bg-white",
      iconBgColor: "bg-[#ececec]",
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: "ПРОГРЕСС ОБУЧЕНИЯ",
      description:
          "Смотрите аналитику по пройденным темам, повторяйте изученные",
      bgColor: "bg-purple-100",
      iconBgColor: "bg-purple-500",
    },
    {
      icon: <BookmarkIcon className="w-6 h-6" />,
      title: "УДОБНЫЙ ТРЕНАЖЁР",
      description:
          "Улучшайте свои навыки в нашем тренажёре по запоминанию вопросов",
      bgColor: "bg-white",
      iconBgColor: "bg-[#ececec]",
    },
  ];

  return (
      <section className="w-full max-w-7xl mx-auto py-10 px-4 relative">
        <div className="relative">
          {/* Main content area */}
          <div className="flex flex-col xl:flex-row gap-10 mb-10">
            {/* Left side - Text content */}
            <div className="w-full xl:w-1/2 flex flex-col gap-4 mt-9 text-center xl:text-left items-center xl:items-start">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 w-fit rounded-full px-3 py-1.5"
                  >
                    Топ вопросов
                  </Badge>

                  <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                    YEAHUB
                    <br />
                    ПОМОГАЕТ РАСТИ
                    <br />И ДОСТИГАТЬ ЦЕЛЕЙ
                  </h1>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-sm sm:text-base max-w-[527px]">
                    Развивайте и улучшайте свои навыки на одной платформе:
                    изучайте новое, готовьтесь к собеседованиям, погружайтесь в
                    нюансы или обновляйте знания — YeaHub поможет справиться с
                    любой задачей
                  </p>

                  <Button className="w-60 h-12 rounded-full bg-purple-700 text-white hover:bg-purple-800 mx-auto xl:mx-0">
                    Присоединиться
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Image and floating elements */}
            <div className="w-full xl:w-1/2 relative">
              {/* Main image */}
              <img
                  src={MainPhoto}
                  alt="Person using YEAHUB"
                  className="w-full h-auto ml-auto"
              />

              {/* Figma icon on the left */}
              <div className="absolute -rotate-6 -left-5 lg:-left-19 top-10">
                <img
                    src={FigmaIcon}
                    alt="Figma design elements"
                    className="w-full h-full object-contain"
                />
              </div>

              {/* Progress icon on the right */}
              <div className="absolute -right-15 lg:-right-17 top-48">
                <img
                    src={ProgressIcon}
                    alt="Progress tracking"
                    className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[170px]">
            {featureCards.map((card, index) => (
                <Card
                    key={index}
                    className={`
                ${card.bgColor} rounded-xl
                ${index === 1 ? 'md:transform md:translate-y-10' : ''}
              `}
                >
                  <CardContent className="flex flex-col items-start gap-10 p-6">
                    <div
                        className={`flex w-[43px] h-[45px] items-center justify-center ${card.iconBgColor} rounded-lg`}
                    >
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg sm:text-xl font-medium w-full">{card.title}</h3>
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