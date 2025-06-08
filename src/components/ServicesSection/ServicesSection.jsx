import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FilterIcon, PenIcon } from "../icons";
import QuestionAccordeonImage from "@/assets/question accordeon.png";
import PlatformOverviewImage from "@/assets/ServicesSection/platformOverview.svg";
import React from "react";

export function ServicesSection() {
  return (
      <section className="relative w-full py-8 sm:py-12 md:py-14 lg:py-16 px-3 sm:px-4 md:px-5 bg-purple-100 rounded-2xl sm:rounded-3xl">
        <div className="max-w-[1400px] mx-auto">
          {/* Header section */}
          <div className="flex flex-wrap justify-between items-end mb-8 sm:mb-12 md:mb-14 lg:mb-16 max-[1307px]:flex-col max-[1307px]:items-center max-[1307px]:text-center max-[1307px]:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight sm:leading-[50.8px] text-black max-w-[495px]">
              ПОДГОТОВТЕСЬ К СОБЕСЕДОВАНИЮ В IT
            </h2>
            <p className="max-w-[396px] text-black-700 text-sm sm:text-base font-16-text">
              С YeaHub подготовка к собеседованию становится простым и
              захватывающим процессом.
            </p>
          </div>

          {/* Main content section */}
          <div className="flex gap-3 sm:gap-4 md:gap-5 max-[1307px]:flex-col max-[1307px]:items-center">
            {/* Left card - Question accordion */}
            <Card className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-white max-[1307px]:w-full max-[1307px]:max-w-[495px]">
              <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="flex items-start gap-3 sm:gap-6 md:gap-7 lg:gap-9">
                  <div className="flex w-[35px] h-[37px] sm:w-[40px] sm:h-[42px] md:w-[43px] md:h-[45px] items-center justify-center bg-black-50 rounded-lg flex-shrink-0">
                    <PenIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="max-w-[392px] text-black-700 text-sm sm:text-base font-16-reg">
                      Наша платформа предлагает обширную базу актуальных вопросов
                      по широкому спектру тем
                      <br className="hidden sm:block" />и навыков, которая регулярно обновляется.
                    </p>
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                  <img
                      className="-mx-1 sm:-mx-2 w-full h-auto object-contain"
                      alt="Question accordeon"
                      src={QuestionAccordeonImage}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Right column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-[1307px]:items-center">
              {/* Yellow filter card with custom styling */}
              <div
                  className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-[1307px]:w-full max-[1307px]:max-w-[495px]"
                  style={{
                    width: 'min(495px, 100%)',
                    height: 'auto',
                    minHeight: '280px',
                    borderRadius: '12px',
                    background: 'rgb(255, 252, 242)'
                  }}
              >
                {/* Platform overview image */}
                <div className="w-full overflow-hidden">
                  <img
                      className="w-full h-auto object-contain"
                      alt="Platform overview"
                      src={PlatformOverviewImage}
                  />
                </div>

                {/* Filter description */}
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="flex w-[35px] h-[37px] sm:w-[40px] sm:h-[42px] md:w-[43px] md:h-[45px] items-center justify-center bg-yellow-700 rounded-lg flex-shrink-0">
                    <FilterIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="max-w-[289px] text-black-700 text-sm sm:text-base font-16-reg">
                      Используйте удобные фильтры для поиска вопросов по
                      интересующим вас темам и уровню сложности.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-48 sm:w-52 md:w-56 lg:w-60 h-10 sm:h-11 md:h-12 bg-purple-700 rounded-[40px] font-bt-1 text-white-900 text-sm sm:text-base max-[1307px]:mx-auto">
                Пройти собеседование
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}