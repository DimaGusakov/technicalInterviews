import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ActivityIcon, UserIcon } from "../icons";
import StatisticsImage from "@/assets/statistics.png";
import React from "react";

export function ProgressTrackingSection() {
  return (
      <div className="flex flex-col xl:flex-row items-center xl:items-center gap-5 p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-3xl mb-[130px]">
        <div className="flex flex-col items-center xl:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-[124px] xl:gap-[124px]">
          <div className="flex flex-col items-center xl:items-start gap-4 sm:items-center xl:items-start">
            <h2 className="text-[rgb(20,20,20)] text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-medium leading-[115%] text-left sm:text-center xl:text-left uppercase">
              ОТСЛЕЖИВАЙТЕ СВОЙ ПРОГРЕСС
            </h2>

            <p className="text-[rgb(71,71,71)] text-sm sm:text-base font-normal leading-[120%] tracking-[0%] text-left sm:text-center xl:text-left">
              YeaHub предоставляет продвинутые инструменты
              <br className="hidden sm:block" />
              для мониторинга вашего обучения.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 xl:hidden">
            <div className="w-full max-w-[562px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[475px] bg-[#f0e7ff] rounded-2xl md:rounded-[16px_0px_0px_16px] overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <img
                    className="w-[280px] h-[300px] sm:w-[320px] sm:h-[350px] md:w-[360px] md:h-[395px] lg:w-[380px] lg:h-[417px] object-cover"
                    alt="Statistics"
                    src={StatisticsImage}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-start gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
              <Card className="border-none shadow-none w-full sm:w-auto">
                <CardContent className="flex flex-col items-start gap-4 p-0">
                  <div className="flex w-[43px] h-[45px] items-center justify-center bg-purple-500 rounded-lg overflow-hidden">
                    <UserIcon className="w-[26px] h-[26px] text-white" />
                  </div>

                  <p className="w-full sm:w-[280px] md:w-[296px] text-[rgb(71,71,71)] text-sm sm:text-base font-normal leading-[120%] tracking-[0%] text-left">
                    В вашем личном профиле доступна детализированная статистика,
                    включая количество пройденных вопросов и тем.
                  </p>
                </CardContent>
              </Card>

              <Separator orientation="vertical" className="hidden sm:block h-[149px]" />
              <Separator orientation="horizontal" className="block sm:hidden w-full" />

              <Card className="border-none shadow-none w-full sm:w-auto">
                <CardContent className="flex flex-col items-start gap-4 p-0">
                  <div className="flex w-[43px] h-[45px] items-center justify-center bg-purple-500 rounded-lg overflow-hidden">
                    <ActivityIcon className="w-[26px] h-[26px] text-white" />
                  </div>

                  <p className="w-full sm:w-[270px] md:w-[283px] text-[rgb(71,71,71)] text-sm sm:text-base font-normal leading-[120%] tracking-[0%] text-left">
                    Определите свой текущий уровень
                    <br className="hidden sm:block" />и выявите пробелы в знаниях для
                    <br className="hidden sm:block" />
                    более целенаправленного обучения или подготовки к поиску
                    работы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="hidden xl:block w-[562px] h-[475px] bg-[#f0e7ff] rounded-[16px_0px_0px_16px] overflow-hidden">
          <div className="flex items-center justify-center h-full">
            <img
                className="w-[380px] h-[417px] object-cover"
                alt="Statistics"
                src={StatisticsImage}
            />
          </div>
        </div>
      </div>
  );
}