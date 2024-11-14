import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  WeeklyContent,
  CardContent,
} from '@/components';

interface WeatherInfo {
  maxTemp: number;
  minTemp: number;
  date: string;
  iconCode: string;
  isDay: boolean;
}

interface Props {
  data: WeatherInfo[];
}

/*const weekDatas = [
  { highTemp: 20, lowTemp: 10, date: '03 Nov', day: '일요일' },
  { highTemp: 20, lowTemp: 10, date: '04 Nov', day: '월요일' },
  { highTemp: 20, lowTemp: 10, date: '05 Nov', day: '화요일' },
  { highTemp: 20, lowTemp: 10, date: '07 Nov', day: '수요일' },
  { highTemp: 20, lowTemp: 10, date: '08 Nov', day: '목요일' },
  { highTemp: 20, lowTemp: 10, date: '09 Nov', day: '금요일' },
  { highTemp: 20, lowTemp: 10, date: '10 Nov', day: '토요일' },
];*/

function GetWeeklyWeatherWidget({ data }: Props) {
  return (
    <Card className="w-1/4 h-full">
      <CardHeader>
        <CardTitle>7 Days</CardTitle>
        <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {data.map((item: WeatherInfo) => {
          return <WeeklyContent data={item} key={item.date} />;
        })}
      </CardContent>
    </Card>
  );
}

export { GetWeeklyWeatherWidget };
