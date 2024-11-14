import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from '@/components';

import { CalendarDays, MapPinned } from 'lucide-react';
import { Weather } from '@/types';

interface Props {
  data: Weather;
}

function GetTodayWiget({ data }: Props) {
  return (
    <Card className="w-1/4 min-w-[25%]">
      <CardHeader>
        <CardTitle>Today</CardTitle>
        <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full flex flex-col">
          <div className="flex items-center gap-4">
            {data.current.condition.icon.includes('day') ? (
              <img
                src={`src/assets/icons/${data.current.condition.code}d.svg`}
                alt="weather-icon"
                className="h-16 w-16"
              />
            ) : (
              <img
                src={`src/assets/icons/${data.current.condition.code}n.svg`}
                alt="weather-icon"
                className="h-16 w-16"
              />
            )}

            <div className="w-full flex items-start gap-1">
              <span className="poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight">
                {Math.round(data.current.temp_c)}
              </span>
              <span className="text-4xl font-extrabold">&#8451;</span>
            </div>
          </div>
          <Separator className="mt-2 mb-3" />
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-start gap-2">
              <CalendarDays className="h-4 w-4" />
              <p className="leading-6">{data.location.localtime.split(" ")[0]}</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <MapPinned className="h-4 w-4" />
              <p className="leading-6">{data.location.name}&middot;{data.location.country}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { GetTodayWiget };
