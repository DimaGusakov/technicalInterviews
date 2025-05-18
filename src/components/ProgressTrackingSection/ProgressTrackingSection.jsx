import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ActivityIcon, UserIcon } from "../icons";
import StatisticsImage from "@/assets/statistics.png";
import React from "react";

export function ProgressTrackingSection() {
  return (
    <div className="flex items-center gap-5 p-10 bg-white rounded-3xl">
      <div className="flex flex-col items-start gap-[124px]">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-variable-collection-text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            ОТСЛЕЖИВАЙТЕ СВОЙ ПРОГРЕСС
          </h2>

          <p className="font-16-reg font-[number:var(--16-reg-font-weight)] leading-[var(--16-reg-line-height)] text-black-700 text-[length:var(--16-reg-font-size)] tracking-[var(--16-reg-letter-spacing)] [font-style:var(--16-reg-font-style)]">
            YeaHub предоставляет продвинутые инструменты
            <br />
            для мониторинга вашего обучения.
          </p>
        </div>

        <div className="flex flex-col items-start gap-10">
          <div className="flex items-start gap-5">
            <Card className="border-none shadow-none">
              <CardContent className="flex flex-col items-start gap-4 p-0">
                <div className="flex w-[43px] h-[45px] items-center justify-center bg-purple-500 rounded-lg overflow-hidden">
                  <UserIcon className="w-[26px] h-[26px] text-white" />
                </div>

                <p className="w-[296px] font-16-reg font-[number:var(--16-reg-font-weight)] text-black-700 text-[length:var(--16-reg-font-size)] leading-[var(--16-reg-line-height)] tracking-[var(--16-reg-letter-spacing)] [font-style:var(--16-reg-font-style)]">
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

                <p className="w-[283px] font-16-reg font-[number:var(--16-reg-font-weight)] text-black-700 text-[length:var(--16-reg-font-size)] tracking-[var(--16-reg-letter-spacing)] leading-[var(--16-reg-line-height)] [font-style:var(--16-reg-font-style)]">
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
  );
}
