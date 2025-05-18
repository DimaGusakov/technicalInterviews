import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FigmaIcon, FilterIcon, PenIcon, SearchIcon } from "../icons";
import QuestionAccordeonImage from "@/assets/question accordeon.png";
import React from "react";

export function ServicesSection() {
  // Category data for mapping
  const categories = [
    { icon: <FigmaIcon />, name: "Figma" },
    {
      icon: <img  alt="Wireframing" className="w-[14px] h-[14px]" />,
      name: "Wireframing",
    },
    {
      icon: <img  alt="Wireframing" className="w-[14px] h-[14px]" />,
      name: "Wireframing",
    },
    { icon: <FigmaIcon />, name: "CSS" },
  ];

  // Difficulty levels data
  const difficultyLevels = [
    { level: "1–3", selected: false },
    { level: "4–6", selected: false },
    { level: "7–8", selected: false },
    { level: "9–10", selected: true },
  ];

  // Ratings data
  const ratings = [
    { rating: "1", selected: false },
    { rating: "2", selected: false },
    { rating: "3", selected: false },
    { rating: "4", selected: true },
    { rating: "5", selected: false },
  ];

  // Status options data
  const statusOptions = [
    { status: "Изученные", selected: false },
    { status: "Не изученные", selected: false },
    { status: "Сохранённые", selected: false },
    { status: "Все", selected: true },
  ];

  return (
    <section className="relative w-full py-16 px-5 bg-purple-100 rounded-3xl">
      <div className="max-w-[1400px] mx-auto">
        {/* Header section */}
        <div className="flex flex-wrap justify-between items-end mb-16">
          <h2 className="text-[40px] font-medium leading-[50.8px] text-black max-w-[495px]">
            ПОДГОТОВТЕСЬ К СОБЕСЕДОВАНИЮ В IT
          </h2>
          <p className="max-w-[396px] text-black-700 font-16-text">
            С YeaHub подготовка к собеседованию становится простым и
            захватывающим процессом.
          </p>
        </div>

        {/* Main content section */}
        <div className="flex flex-wrap gap-5">
          {/* Left card - Question accordion */}
          <Card className="flex-1 rounded-2xl overflow-hidden">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex items-start gap-9">
                <div className="flex w-[43px] h-[45px] items-center justify-center bg-black-50 rounded-lg">
                  <PenIcon />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="max-w-[392px] text-black-700 font-16-reg">
                    Наша платформа предлагает обширную базу актуальных вопросов
                    по широкому спектру тем
                    <br />и навыков, которая регулярно обновляется.
                  </p>
                </div>
              </div>
              <img
                className="w-full h-[352px] -mx-2"
                alt="Question accordeon"
                src={QuestionAccordeonImage}
              />
            </CardContent>
          </Card>

          {/* Right column */}
          <div className="flex flex-col gap-6 max-w-[495px]">
            {/* Yellow filter card */}
            <Card className="rounded-2xl overflow-hidden bg-yellow-main">
              <CardContent className="p-6 flex flex-col gap-[18px]">
                {/* Filter interface */}
                <div className="flex items-start justify-center gap-5 p-5 bg-white rounded-[17px] shadow-main-shadow">
                  <div className="flex flex-col w-52 gap-[17px]">
                    {/* Search input */}
                    <div className="flex flex-col gap-[2.84px]">
                      <div className="flex w-[184px] h-[34px] items-center gap-[5.69px] px-[17px] py-[8.5px] bg-white-900 rounded-full border border-black-50">
                        <div className="flex items-center gap-[5.69px] flex-1">
                          <SearchIcon />
                          <span className="text-black-300 text-[11.4px] font-normal">
                            Введите запрос…
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Categories section */}
                    <div className="flex flex-col gap-[5.69px]">
                      <span className="text-black-700 text-[10px] font-normal">
                        Категории вопросов
                      </span>
                      <div className="flex flex-wrap gap-[5.69px]">
                        {categories.map((category, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="flex items-center gap-[5.69px] px-[8.5px] py-[7px] rounded-[8.5px] border-black-200 bg-transparent"
                          >
                            {category.icon}
                            <span className="text-black-800 text-[11.4px] font-medium whitespace-nowrap">
                              {category.name}
                            </span>
                          </Badge>
                        ))}
                      </div>
                      <span className="text-purple-800 text-[10px] font-normal underline cursor-pointer">
                        Посмотреть все
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[17px]">
                    {/* Difficulty level section */}
                    <div className="flex flex-col gap-[5.69px]">
                      <span className="text-black-700 text-[10px] font-normal">
                        Уровень сложности
                      </span>
                      <div className="flex flex-wrap w-[163px] gap-[5.69px]">
                        {difficultyLevels.map((item, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={`px-[8.5px] py-[7px] rounded-[8.5px] ${
                              item.selected
                                ? "border-purple-700"
                                : "border-black-200"
                            } bg-transparent`}
                          >
                            <span className="text-black-800 text-[11.4px] font-medium whitespace-nowrap">
                              {item.level}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Rating section */}
                    <div className="flex flex-col gap-[5.69px]">
                      <span className="text-black-700 text-[10px] font-normal">
                        Рейтинг
                      </span>
                      <div className="flex flex-wrap w-[142px] gap-[5.69px]">
                        {ratings.map((item, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={`px-[8.5px] py-[7px] rounded-[8.5px] ${
                              item.selected
                                ? "border-purple-700"
                                : "border-black-200"
                            } bg-transparent`}
                          >
                            <span className="text-black-800 text-[11.4px] font-medium whitespace-nowrap">
                              {item.rating}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Status section */}
                    <div className="flex flex-col gap-[5.69px]">
                      <span className="text-black-700 text-[10px] font-normal">
                        Статус
                      </span>
                      <div className="flex flex-wrap w-[178px] gap-[5.69px]">
                        {statusOptions.map((item, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={`px-[8.5px] py-[7px] rounded-[8.5px] ${
                              item.selected
                                ? "border-purple-700"
                                : "border-black-200"
                            } bg-transparent`}
                          >
                            <span className="text-black-800 text-[11.4px] font-medium whitespace-nowrap">
                              {item.status}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter description */}
                <div className="flex items-start gap-6">
                  <div className="flex w-[43px] h-[45px] items-center justify-center bg-yellow-700 rounded-lg">
                    <FilterIcon />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="max-w-[289px] text-black-700 font-16-reg">
                      Используйте удобные фильтры для поиска вопросов по
                      интересующим вас темам и уровню сложности.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button className="w-60 h-12 bg-purple-700 rounded-[40px] font-bt-1 text-white-900">
              Пройти собеседование
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
