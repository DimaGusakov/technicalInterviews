import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainPhoto from "../../assets/mainphoto.png";
import {
  BarChartIcon,
  BookIcon,
  BookmarkIcon,
  FigmaIcon,
  LayoutIcon,
} from "../icons";
import React from "react";

export function HeroSection() {
    const heroSectionStyles = {
        marginTop: '37px',
      };
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

  // Tool icons for the floating card
  const toolIcons = [
    { icon: <FigmaIcon className="w-10 h-10 rotate-[5deg]" /> },
    { icon: <LayoutIcon className="w-10 h-10 rotate-[5deg]" /> },
    { icon: <LayoutIcon className="w-10 h-10 rotate-[5deg]" /> },
    { icon: <FigmaIcon className="w-10 h-10 rotate-[5deg]" /> },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4 relative">
      <div className="relative">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-4 lg:w-1/2" style={heroSectionStyles}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700 w-fit rounded-full"
                  style={{ padding: '6px 12px' }}
                >
                  Топ вопросов
                </Badge>

                <h1 className="font-medium text-6xl leading-[69px] tracking-tight">
                  YEAHUB
                  <br />
                  ПОМОГАЕТ РАСТИ
                  <br />И ДОСТИГАТЬ ЦЕЛЕЙ
                </h1>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-base max-w-[527px]">
                  Развивайте и улучшайте свои навыки на одной платформе:
                  изучайте новое, готовьтесь к собеседованиям, погружайтесь в
                  нюансы или обновляйте знания — YeaHub поможет справиться с
                  любой задачей
                </p>

                <Button className="w-60 h-12 rounded-full bg-purple-700 text-white hover:bg-purple-800">
                  Присоединиться
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Image and floating elements */}
          <div className="lg:w-1/2 relative">
            {/* Main image */}
            <img
              src={MainPhoto}
              alt="Person using YEAHUB"
              className="w-full max-w-[498px] h-auto ml-auto"
            />

            {/* Floating tools card */}
            <Card className="absolute top-7 left-0 lg:left-1/4 w-[152px] bg-white shadow-lg rounded-xl rotate-[-5deg]">
              <CardContent className="flex flex-wrap gap-2 p-3">
                {toolIcons.map((tool, index) => (
                  <div key={index} className="p-3 bg-black/10 rounded-lg">
                    {tool.icon}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Progress card */}
            <Card className="absolute top-48 right-0 w-[186px] bg-white shadow-md rounded-md overflow-hidden">
              <CardContent className="p-3">
                <h3 className="font-medium text-base text-black-800">
                  Прогресс
                </h3>
                <div className="mt-2">
                  <p className="text-[10px] text-gray-500 font-medium">
                    Пройдено 3 из 3 вопрос изучен!
                  </p>
                  <div className="flex h-1 mt-1.5 gap-[0.78px]">
                    <div className="flex-1 h-1 bg-green-600 rounded-l-full"></div>
                    <div className="flex-1 h-1.5 -mt-[0.25px] -mb-[0.25px] bg-green-600"></div>
                    <div className="flex-1 h-1 bg-green-600 rounded-r-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute h-[206px] w-[70px] top-[365px] left-1/2 -translate-x-1/2 bg-purple-100 opacity-50"></div>
        <div className="absolute w-5 h-[90px] top-[441px] right-16 bg-purple-100 opacity-50"></div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {featureCards.map((card, index) => (
            <Card key={index} className={`${card.bgColor} rounded-xl`}>
              <CardContent className="flex flex-col items-start gap-10 p-6">
                <div
                  className={`flex w-[43px] h-[45px] items-center justify-center ${card.iconBgColor} rounded-lg`}
                >
                  {card.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium w-full">{card.title}</h3>
                  <p className="text-base text-gray-700 w-full">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
