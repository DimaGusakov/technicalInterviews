import { Card, CardContent } from "@/components/ui/card";
import { BookmarkIcon, GraduationCapIcon } from "../icons";
import QuizImage from "@/assets/quiz.svg";
import React from "react";

export function TestimonialsSection() {
  const featureCards = [
    {
      id: 1,
      icon: <GraduationCapIcon className="w-6 h-6 text-white" />,
      text: "Практикуйте изученные темы в режиме собеседований.",
      bgColor: "bg-purple-100",
      iconBgColor: "bg-purple-500",
    },
    {
      id: 2,
      icon: <BookmarkIcon className="w-6 h-6 text-white" />,
      text: "Воспользуйтесь удобными карточками для запоминания и возможностью сохранения материала для последующего повторения.",
      bgColor: "bg-[rgb(255,252,242)]",
      iconBgColor: "bg-yellow-700",
    },
  ];

  return (
      <section className="relative w-full max-w-[1216px] h-auto py-16 mx-auto px-5">
        <h2 className="text-[40px] font-medium leading-[115%] text-center uppercase text-black mb-12">
          РЕЖИМ ПРОХОЖДЕНИЯ СОБЕСЕДОВАНИЙ
        </h2>

        {/* Desktop layout */}
        <div className="flex flex-row gap-8 min-[1307px]:flex max-[1306px]:hidden">
          {/* Left side - Image */}
          <div className="relative w-[60%]">
            <div className="relative">
              <img
                  className="w-full h-auto object-cover rounded-lg"
                  alt="Quiz interface"
                  src={QuizImage}
              />
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="flex flex-col w-[40%] gap-6">
            {featureCards.map((card) => (
                <Card
                    key={card.id}
                    className={`${card.bgColor} border-none rounded-xl`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6">
                      <div
                          className={`flex w-[43px] h-[45px] items-center justify-center ${card.iconBgColor} rounded-lg`}
                      >
                        {card.icon}
                      </div>
                      <p className="font-16-reg font-[number:var(--16-reg-font-weight)] text-black-700 text-[length:var(--16-reg-font-size)] tracking-[var(--16-reg-letter-spacing)] leading-[var(--16-reg-line-height)] [font-style:var(--16-reg-font-style)]">
                        {card.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
            ))}

            <div className="mt-4 text-[rgb(71,71,71)] text-xl font-medium leading-[120%] text-left uppercase">
              ЭТО ИДЕАЛЬНЫЙ СПОСОБ ПОДГОТОВИТЬСЯ
              <br />К РЕАЛЬНЫМ СОБЕСЕДОВАНИЯМ.
            </div>
          </div>
        </div>

        {/* Mobile layout - everything in column */}
        <div className="flex flex-col items-center gap-8 max-[1306px]:flex min-[1307px]:hidden">
          {/* Image */}
          <div className="w-full max-w-[600px]">
            <img
                className="w-full h-auto object-cover rounded-lg"
                alt="Quiz interface"
                src={QuizImage}
            />
          </div>

          {/* Cards in column */}
          {featureCards.map((card) => (
              <Card
                  key={card.id}
                  className={`${card.bgColor} border-none rounded-xl w-full max-w-[600px]`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6">
                    <div
                        className={`flex w-[43px] h-[45px] items-center justify-center ${card.iconBgColor} rounded-lg`}
                    >
                      {card.icon}
                    </div>
                    <p className="font-16-reg font-[number:var(--16-reg-font-weight)] text-black-700 text-[length:var(--16-reg-font-size)] tracking-[var(--16-reg-letter-spacing)] leading-[var(--16-reg-line-height)] [font-style:var(--16-reg-font-style)]">
                      {card.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
          ))}

          {/* Bottom text */}
          <div className="text-[rgb(71,71,71)] text-xl font-medium leading-[120%] text-center uppercase max-w-[600px]">
            ЭТО ИДЕАЛЬНЫЙ СПОСОБ ПОДГОТОВИТЬСЯ
            <br />К РЕАЛЬНЫМ СОБЕСЕДОВАНИЯМ.
          </div>
        </div>
      </section>
  );
}