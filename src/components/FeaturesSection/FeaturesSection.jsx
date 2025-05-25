import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BarChart3Icon, LayoutGridIcon } from "../icons";
import QuestionsImage from "@/assets/FeaturesSection/questions.svg";
import React from "react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3Icon className="w-6 h-6" />,
      text: "Наш тренажёр предоставляет уникальный шанс углубить свои знаний и поднять их на новый уровень",
    },
    {
      icon: <LayoutGridIcon className="w-6 h-6" />,
      text: "Изучение технологий ещё никогда не было таким доступным и эффективным",
    },
  ];

  return (
      <div className="flex max-[1307px]:flex-col min-[1308px]:flex-row max-[1307px]:items-center items-center gap-5 py-10 max-[1307px]:px-5 pr-10 bg-white rounded-3xl mb-[130px] max-[1307px]:text-center">

        <div className="max-[1307px]:block hidden max-[1307px]:order-1 max-[1307px]:mb-6">
          <h2 className="text-3xl font-bold text-black text-center">
            УДОБНЫЙ ТРЕНАЖЁР
          </h2>
        </div>

        <div className="max-[1307px]:block hidden max-[1307px]:order-2 max-[1307px]:mb-8">
          <p className="text-base text-gray-700 text-center">
            Практикуйте изученные темы в нашем тренажёре.
          </p>
        </div>

        <div className="flex items-center justify-center w-[598px] max-[1307px]:w-full max-w-[598px] h-[455px] rounded-r-2xl max-[1307px]:order-3 max-[1307px]:mb-10" style={{background: 'rgb(255, 252, 242)', borderRadius: '0px 16px 16px 0px'}}>
          <div className="w-[550px] max-[1307px]:w-full max-w-[550px] h-[400px] bg-white rounded-t-2xl" style={{borderRadius: '16px 16px 0px 0px'}}>
            <div className="p-6 pb-0">
              <h3 className="text-lg font-medium text-black-900">
                СПИСОК ВОПРОСОВ
              </h3>
            </div>

            <div className="flex items-center justify-center h-[calc(100%-60px)]">
              <img
                  src={QuestionsImage}
                  alt="Questions interface"
                  className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col max-[1307px]:items-center items-start gap-14 max-[1307px]:w-full min-[1308px]:block max-[1307px]:hidden">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold text-black">
              УДОБНЫЙ ТРЕНАЖЁР
            </h2>
            <p className="text-base text-gray-700">
              Практикуйте изученные темы в нашем тренажёре.
            </p>
          </div>

          <div className="flex flex-col w-full items-start gap-10">
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-start gap-4">
                <div className="flex w-11 h-11 items-center justify-center bg-yellow-400 rounded-lg p-3">
                  {features[0].icon}
                </div>
                <p className="w-72 text-base text-gray-700">
                  {features[0].text}
                </p>
              </div>

              <Separator orientation="vertical" className="h-32" />

              <div className="flex flex-col items-start gap-4">
                <div className="flex w-11 h-11 items-center justify-center bg-yellow-400 rounded-lg p-3">
                  {features[1].icon}
                </div>
                <p className="w-56 text-base text-gray-700">
                  {features[1].text}
                </p>
              </div>
            </div>

            <Button className="w-60 h-12 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium">
              Начать обучение
            </Button>
          </div>
        </div>

        <div className="max-[1307px]:block hidden max-[1307px]:order-4 max-[1307px]:mb-10 max-[1307px]:w-full">
          <div className="flex flex-row items-start justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex w-11 h-11 items-center justify-center bg-yellow-400 rounded-lg p-3">
                {features[0].icon}
              </div>
              <p className="max-w-md text-base text-gray-700 text-center">
                {features[0].text}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex w-11 h-11 items-center justify-center bg-yellow-400 rounded-lg p-3">
                {features[1].icon}
              </div>
              <p className="max-w-md text-base text-gray-700 text-center">
                {features[1].text}
              </p>
            </div>
          </div>
        </div>

        <div className="max-[1307px]:block hidden max-[1307px]:order-5">
          <Button className="w-60 h-12 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium">
            Начать обучение
          </Button>
        </div>
      </div>
  );
}