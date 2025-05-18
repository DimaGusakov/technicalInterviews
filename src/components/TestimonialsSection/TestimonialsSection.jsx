import { Card, CardContent } from "@/components/ui/card";
import { BookmarkIcon, GraduationCapIcon } from "../icons";
import QuizImage from "@/assets/quiz.png";
import React from "react";

export function TestimonialsSection() {
  // Data for the feature cards
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
      bgColor: "bg-yellow-main",
      iconBgColor: "bg-yellow-700",
    },
  ];

  return (
    <section className="relative w-full max-w-[1216px] h-auto py-16 mx-auto">
      <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-variable-collection-text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)] mb-12">
        РЕЖИМ ПРОХОЖДЕНИЯ СОБЕСЕДОВАНИЙ
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image */}
        <div className="relative w-full md:w-[60%]">
          <div className="relative">
            <img
              className="w-full h-auto object-cover rounded-lg"
              alt="Quiz interface"
              src={QuizImage}
            />
            <img
              className="absolute top-[90px] right-0 w-[107px] h-[85px]"
              alt="Vector decoration"
              
            />
            <img
              className="absolute top-[266px] right-0 w-[107px] h-[85px]"
              alt="Vector decoration"
              
            />
          </div>
        </div>

        {/* Right side - Cards */}
        <div className="flex flex-col w-full md:w-[40%] gap-6">
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

          <div className="mt-4 font-20-med font-[number:var(--20-med-font-weight)] text-black-700 text-[length:var(--20-med-font-size)] tracking-[var(--20-med-letter-spacing)] leading-[var(--20-med-line-height)] [font-style:var(--20-med-font-style)]">
            ЭТО ИДЕАЛЬНЫЙ СПОСОБ ПОДГОТОВИТЬСЯ
            <br />К РЕАЛЬНЫМ СОБЕСЕДОВАНИЯМ.
          </div>
        </div>
      </div>
    </section>
  );
}
