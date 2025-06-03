import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BarChart3Icon, LayoutGridIcon } from "../icons";
import QuestionsImage from "@/assets/FeaturesSection/questions.svg";
import React from "react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      text: "Наш тренажёр предоставляет уникальный шанс углубить свои знаний и поднять их на новый уровень",
    },
    {
      icon: <LayoutGridIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      text: "Изучение технологий ещё никогда не было таким доступным и эффективным",
    },
  ];

  return (
      <div className="flex max-[1307px]:flex-col min-[1308px]:flex-row max-[1307px]:items-center items-center gap-3 sm:gap-4 md:gap-5 py-6 sm:py-8 md:py-10 px-3 sm:px-4 max-[1307px]:px-5 pr-6 sm:pr-8 md:pr-10 bg-white rounded-2xl sm:rounded-3xl mb-20 sm:mb-24 md:mb-[130px] max-[1307px]:text-center">

        <div className="max-[1307px]:block hidden max-[1307px]:order-1 max-[1307px]:mb-4 sm:max-[1307px]:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
            УДОБНЫЙ ТРЕНАЖЁР
          </h2>
        </div>

        <div className="max-[1307px]:block hidden max-[1307px]:order-2 max-[1307px]:mb-6 sm:max-[1307px]:mb-8">
          <p className="text-sm sm:text-base text-gray-700 text-center px-2">
            Практикуйте изученные темы в нашем тренажёре.
          </p>
        </div>

        <div className="flex items-center justify-center w-full sm:w-[500px] md:w-[550px] lg:w-[598px] max-[1307px]:w-full max-w-[598px] h-[320px] sm:h-[400px] md:h-[440px] lg:h-[455px] rounded-r-xl sm:rounded-r-2xl max-[1307px]:order-3 max-[1307px]:mb-6 sm:max-[1307px]:mb-8 md:max-[1307px]:mb-10" style={{background: 'rgb(255, 252, 242)', borderRadius: '0px 12px 12px 0px'}}>
          <div className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px] max-[1307px]:w-full max-w-[550px] h-[280px] sm:h-[350px] md:h-[380px] lg:h-[400px] bg-white rounded-t-xl sm:rounded-t-2xl mx-2 sm:mx-3 md:mx-4" style={{borderRadius: '12px 12px 0px 0px'}}>
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 pb-0">
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-black-900">
                СПИСОК ВОПРОСОВ
              </h3>
            </div>

            <div className="flex items-center justify-center h-[calc(100%-40px)] sm:h-[calc(100%-50px)] md:h-[calc(100%-60px)] p-2 sm:p-3 md:p-4">
              <img
                  src={QuestionsImage}
                  alt="Questions interface"
                  className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col max-[1307px]:items-center items-start gap-8 sm:gap-10 md:gap-12 lg:gap-14 max-[1307px]:w-full min-[1308px]:block max-[1307px]:hidden">
          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              УДОБНЫЙ ТРЕНАЖЁР
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Практикуйте изученные темы в нашем тренажёре.
            </p>
          </div>

          <div className="flex flex-col w-full items-start gap-6 sm:gap-8 md:gap-10">
            <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                <div className="flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 items-center justify-center bg-yellow-400 rounded-lg p-2 sm:p-2.5 md:p-3">
                  {features[0].icon}
                </div>
                <p className="w-60 sm:w-64 md:w-72 text-sm sm:text-base text-gray-700">
                  {features[0].text}
                </p>
              </div>

              <Separator orientation="vertical" className="h-24 sm:h-28 md:h-32" />

              <div className="flex flex-col items-start gap-3 sm:gap-4">
                <div className="flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 items-center justify-center bg-yellow-400 rounded-lg p-2 sm:p-2.5 md:p-3">
                  {features[1].icon}
                </div>
                <p className="w-48 sm:w-52 md:w-56 text-sm sm:text-base text-gray-700">
                  {features[1].text}
                </p>
              </div>
            </div>

            <Button className="w-48 sm:w-52 md:w-56 lg:w-60 h-10 sm:h-11 md:h-12 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium text-sm sm:text-base">
              Начать обучение
            </Button>
          </div>
        </div>

        <div className="max-[1307px]:block hidden max-[1307px]:order-4 max-[1307px]:mb-6 sm:max-[1307px]:mb-8 md:max-[1307px]:mb-10 max-[1307px]:w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-2 sm:px-4">
            <div className="flex flex-col items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 items-center justify-center bg-yellow-400 rounded-lg p-2 sm:p-2.5 md:p-3">
                {features[0].icon}
              </div>
              <p className="max-w-xs sm:max-w-md text-sm sm:text-base text-gray-700 text-center">
                {features[0].text}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 items-center justify-center bg-yellow-400 rounded-lg p-2 sm:p-2.5 md:p-3">
                {features[1].icon}
              </div>
              <p className="max-w-xs sm:max-w-md text-sm sm:text-base text-gray-700 text-center">
                {features[1].text}
              </p>
            </div>
          </div>
        </div>

        <div className="max-[1307px]:block hidden max-[1307px]:order-5">
          <Button className="w-48 sm:w-52 md:w-56 lg:w-60 h-10 sm:h-11 md:h-12 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium text-sm sm:text-base">
            Начать обучение
          </Button>
        </div>
      </div>
  );
}