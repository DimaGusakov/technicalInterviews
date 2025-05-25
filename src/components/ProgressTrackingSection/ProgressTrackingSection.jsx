import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ActivityIcon, UserIcon } from "../icons";
import StatisticsImage from "@/assets/statistics.png";
import React from "react";

export function ProgressTrackingSection() {
  return (
      <div className="flex flex-col xl:flex-row items-center xl:items-center gap-5 p-10 bg-white rounded-3xl mb-[130px]">
        <div className="flex flex-col items-start gap-[124px] xl:gap-[124px]">
          <div className="flex flex-col items-start gap-4 sm:items-center xl:items-start">
            <h2 className="text-[rgb(20,20,20)] text-[40px] font-medium leading-[115%] text-left uppercase">
              ОТСЛЕЖИВАЙТЕ СВОЙ ПРОГРЕСС
            </h2>

            <p className="text-[rgb(71,71,71)] text-base font-normal leading-[120%] tracking-[0%] xl:text-left sm:text-center">
              YeaHub предоставляет продвинутые инструменты
              <br />
              для мониторинга вашего обучения.
            </p>
          </div>

          <div className="flex flex-col items-start gap-10 xl:hidden">
            <div className="w-[562px] h-[475px] bg-[#f0e7ff] rounded-[16px_0px_0px_16px] overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <img
                    className="w-[380px] h-[417px] object-cover"
                    alt="Statistics"
                    src={StatisticsImage}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-10">
            <div className="flex items-start gap-5">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-4 p-0">
                  <div className="flex w-[43px] h-[45px] items-center justify-center bg-purple-500 rounded-lg overflow-hidden">
                    <UserIcon className="w-[26px] h-[26px] text-white" />
                  </div>

                  <p className="w-[296px] text-[rgb(71,71,71)] text-base font-normal leading-[120%] tracking-[0%] text-left">
                    В вашем личном профиле доступна детализированная статистика,
                    включая количество пройденных вопросов и тем.
                  </p>
                </CardContent>
              </Card>

              <Separator orientation="vertical" className="h-[149px]" />

              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-4 p-0">
                  <div className="flex w-[43px] h-[45px] items-center justify-center bg-purple-500 rounded-lg overflow-hidden">
                    <ActivityIcon className="w-[26px] h-[26px] text-white" />
                  </div>

                  <p className="w-[283px] text-[rgb(71,71,71)] text-base font-normal leading-[120%] tracking-[0%] text-left">
                    Определите свой текущий уровень
                    <br />и выявите пробелы в знаниях для
                    <br />
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