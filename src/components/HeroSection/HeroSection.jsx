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

  return (
      <>
        <style jsx>{`
          @media (max-width: 1307px) {
            .hero-main-content {
              flex-direction: column !important;
            }
            .hero-text-content {
              width: 100% !important;
              text-align: center !important;
              align-items: center !important;
              order: 1;
            }
            .hero-image-content {
              width: 100% !important;
              order: 2;
            }
            .hero-feature-cards {
              order: 3;
            }
            .hero-title {
              text-align: center !important;
            }
            .hero-description {
              text-align: center !important;
            }
          }
          
          @media (min-width: 1308px) {
            .hero-main-content {
              flex-direction: row !important;
            }
            .hero-text-content {
              width: 50% !important;
            }
            .hero-image-content {
              width: 50% !important;
            }
          }
        `}</style>

        <section className="w-full max-w-7xl mx-auto py-10 px-4 relative">
          <div className="relative">
            {/* Main content area */}
            <div className="hero-main-content flex gap-10 mb-[40px]">
              {/* Left side - Text content */}
              <div className="hero-text-content flex flex-col gap-4" style={heroSectionStyles}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 w-fit rounded-full"
                        style={{ padding: '6px 12px' }}
                    >
                      Топ вопросов
                    </Badge>

                    <h1 className="hero-title font-medium text-6xl leading-[69px] tracking-tight">
                      YEAHUB
                      <br />
                      ПОМОГАЕТ РАСТИ
                      <br />И ДОСТИГАТЬ ЦЕЛЕЙ
                    </h1>
                  </div>

                  <div className="flex flex-col gap-6">
                    <p className="hero-description text-base max-w-[527px]">
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
              <div className="hero-image-content relative">
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
            <div className="hero-feature-cards grid grid-cols-1 md:grid-cols-3 gap-8 mb-[170px]">
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
                        <h3 className="text-xl font-medium w-full">{card.title}</h3>
                        <p className="text-base text-gray-700 w-full">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>
      </>
  );
}