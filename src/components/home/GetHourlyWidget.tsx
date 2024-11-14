import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components';
import { ForecastDay, HourlyData } from '@/types';
import { useMemo } from 'react';

interface Props {
  data: ForecastDay;
}

function useFomattedTime(time: string) {
  return useMemo(() => {
    const [date, hourString] = time.split(' '); //["2024-11-14", "13:16"]
    const [hour, minute] = hourString.split(':').map(Number);

    let formattedTime;

    if (hour === 0) {
      formattedTime = '오전 0시';
    } else if (hour === 12) {
      formattedTime = '낮 12시';
    } else {
      const isAM = hour < 12;
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12; //12시간 형식으로 변환
      const period = isAM ? '오전' : '오후';
      formattedTime = `${period} ${formattedHour}시`;
    }
    return formattedTime;
  }, [time]);
}

function GetHourlyWidget({ data }: Props) {
  if (!data || !data.hour) {
    return <div>데이터 로딩중</div>;
  }
  return (
    <Card className="flex-1 max-w-[calc(50%-40px)] h-full">
      <CardHeader>
        <CardTitle className="text-xl">Hourly</CardTitle>
        <CardDescription>
          오늘의 시간대별 날씨를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center gap-4 overflow-x-scroll">
        {data.hour.map((item: HourlyData) => {
          const formattedTime = useFomattedTime(item.time);
          return (
            <Card className="w-24 min-w-24 h-fit flex flex-col items-center pt-[10px] pb-[6px] gap-1 bg-neutral-50">
              <span className="text-sm">{formattedTime}</span>
              {item.condition.icon.includes('day') ? (
                <img
                  src={`src/assets/icons/${item.condition.code}d.svg`}
                  className="h-14 w-14"
                />
              ) : (
                <img
                  src={`src/assets/icons/${item.condition.code}n.svg`}
                  className="h-14 w-14"
                />
              )}

              <div className="w-full flex items-start justify-center">
                <span className="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">
                  {item.temp_c}
                </span>
                <span className="text-[13px] ml-[1px] mt-[1px] font-medium">
                  &#8451;
                </span>
              </div>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
}

export { GetHourlyWidget };
