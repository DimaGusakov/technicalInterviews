import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FilterIcon, PenIcon } from "../icons";
import QuestionAccordeonImage from "@/assets/question accordeon.png";
import PlatformOverviewImage from "@/assets/ServicesSection/platformOverview.svg";
import React from "react";

export function ServicesSection() {
  return (
      <section className="relative w-full py-16 px-5 bg-purple-100 rounded-3xl">
        <div className="max-w-[1400px] mx-auto">
          {/* Header section */}
          <div className="flex flex-wrap justify-between items-end mb-16 max-[1307px]:flex-col max-[1307px]:items-center max-[1307px]:text-center max-[1307px]:gap-6">
            <h2 className="text-[40px] font-medium leading-[50.8px] text-black max-w-[495px]">
              ПОДГОТОВТЕСЬ К СОБЕСЕДОВАНИЮ В IT
            </h2>
            <p className="max-w-[396px] text-black-700 font-16-text">
              С YeaHub подготовка к собеседованию становится простым и
              захватывающим процессом.
            </p>
          </div>

          {/* Main content section */}
          <div className="flex gap-5 max-[1307px]:flex-col max-[1307px]:items-center">
            {/* Left card - Question accordion */}
            <Card className="flex-1 rounded-2xl overflow-hidden bg-white max-[1307px]:w-full max-[1307px]:max-w-[495px]">
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
                    className="-mx-2"
                    alt="Question accordeon"
                    src={QuestionAccordeonImage}
                />
              </CardContent>
            </Card>

            {/* Right column */}
            <div className="flex flex-col gap-6 max-[1307px]:items-center">
              {/* Yellow filter card with custom styling */}
              <div
                  className="rounded-xl p-6 flex flex-col gap-6 max-[1307px]:w-full max-[1307px]:max-w-[495px]"
                  style={{
                    width: '495px',
                    height: '414px',
                    borderRadius: '12px',
                    background: 'rgb(255, 252, 242)'
                  }}
              >
                {/* Platform overview image */}
                <img
                    className="w-full"
                    alt="Platform overview"
                    src={PlatformOverviewImage}
                />

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
              </div>

              {/* CTA Button */}
              <Button className="w-60 h-12 bg-purple-700 rounded-[40px] font-bt-1 text-white-900 max-[1307px]:mx-auto">
                Пройти собеседование
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}