import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart3Icon, LayoutGridIcon } from "../icons";
import QuestionImage1 from "@/assets/q1.png";
import QuestionImage2 from "@/assets/q2.png";
import QuestionImage3 from "@/assets/q3.png";
import QuestionImage4 from "@/assets/q4.png";
import React from "react";

export function FeaturesSection() {
  // Question data for mapping
  const questions = [
    {
      id: 1,
      image: QuestionImage1, // placeholder for sedfgh.png
      title: "Что такое Virtual DOM, и как он работает?",
      rating: 4,
      complexity: 10,
      hasBorder: true,
    },
    {
      id: 2,
      image: QuestionImage2, // placeholder for code.png
      title: "Какие типы данных есть в JS?",
      rating: 3,
      complexity: 2,
      hasBorder: true,
    },
    {
      id: 3,
      image: QuestionImage3, // placeholder for frame2087327451.png
      title: "Что такое this?",
      rating: 4,
      complexity: 5,
      hasBorder: false,
    },
    {
      id: 4,
      image: QuestionImage4, // placeholder for frame2087327452.png
      title: "Что такое замыкание в JavaScript?",
      rating: 4,
      complexity: 4,
      hasBorder: false,
    },
  ];

  // Feature items data
  const features = [
    {
      icon: <BarChart3Icon className="w-6 h-6" />,
      text: "Наш тренажёр предоставляет уникальный шанс углубить свои знания и поднять их на новый уровень",
    },
    {
      icon: <LayoutGridIcon className="w-6 h-6" />,
      text: "Изучение технологий ещё никогда не было таким доступным и эффективным",
    },
  ];

  return (
    <div className="flex items-center gap-5 py-10 pr-10 bg-white rounded-3xl">
      <div className="flex flex-col items-start justify-end w-[598px] h-[455px] pt-6 px-6 bg-yellow-main rounded-[0px_16px_16px_0px] gap-6">
        <Card className="bg-white rounded-[16px_16px_0px_0px] border-none w-full">
          <CardHeader className="p-6 pb-0">
            <CardTitle className="font-20-med text-black-900">
              СПИСОК ВОПРОСОВ
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <Card className="w-full shadow-main-shadow">
              <CardContent className="p-6 pl-6 pr-[107px]">
                <div className="flex flex-col items-start gap-3">
                  {questions.map((question) => (
                    <div
                      key={question.id}
                      className={`flex items-start gap-2 ${question.hasBorder ? "pb-2 border-b-[0.5px] border-black-100" : ""}`}
                    >
                      <img
                        className="w-[71px] h-[51px] object-cover"
                        alt="Question image"
                        src={question.image}
                      />

                      <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-[5px] h-[5px] bg-collection-1-brand rounded-[2.5px]" />
                          <div className="font-14-med text-black-900">
                            {question.title}
                          </div>
                        </div>

                        <div className="flex items-start gap-6">
                          <div className="flex items-start gap-2.5 px-1.5 py-1 bg-black-10 rounded">
                            <div className="flex items-center gap-3">
                              <span className="font-12-reg text-black-800">
                                Рейтинг:
                              </span>
                              <Badge className="bg-purple-700 text-white px-[5px] py-0 h-auto">
                                <span className="font-12-reg">
                                  {question.rating}
                                </span>
                              </Badge>
                            </div>
                          </div>

                          <div className="flex items-start gap-0.5">
                            <div className="flex items-start gap-2.5 px-1.5 py-1 bg-black-10 rounded">
                              <div className="flex items-center gap-3">
                                <span className="font-12-reg text-black-800">
                                  Cложность:
                                </span>
                                <Badge className="bg-purple-700 text-white px-[5px] py-0 h-auto">
                                  <span className="font-12-reg">
                                    {question.complexity}
                                  </span>
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start gap-[60px]">
        <div className="flex flex-col items-start gap-4">
          <h2 className="w-[558px] font-h2 text-variable-collection-text-black">
            УДОБНЫЙ ТРЕНАЖЁР
          </h2>
          <p className="w-[558px] font-16-reg text-black-700">
            Практикуйте изученные темы в нашем тренажёре.
          </p>
        </div>

        <div className="flex flex-col w-[558px] items-start gap-10">
          <div className="flex w-[554px] items-start gap-5">
            <div className="flex flex-col items-start gap-4">
              <div className="flex w-[43px] h-[45px] items-center justify-center bg-yellow-700 rounded-lg overflow-hidden p-3">
                {features[0].icon}
              </div>
              <p className="w-[292px] font-16-reg text-black-700">
                {features[0].text}
              </p>
            </div>

            <Separator orientation="vertical" className="h-[127px]" />

            <div className="flex flex-col items-start gap-4">
              <div className="flex w-[43px] h-[45px] items-center justify-center bg-yellow-700 rounded-lg overflow-hidden p-3">
                {features[1].icon}
              </div>
              <p className="w-[222px] font-16-reg text-black-700">
                {features[1].text}
              </p>
            </div>
          </div>

          <Button className="w-60 h-12 bg-purple-700 rounded-[40px] font-bt-1 text-white-900">
            Начать обучение
          </Button>
        </div>
      </div>
    </div>
  );
}
