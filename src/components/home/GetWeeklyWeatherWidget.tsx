import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  WeeklyContent,
} from '@/components';

const weekDatas = [
  { highTemp: 20, lowTemp: 10, date: '03 Nov', day: '일요일' },
  { highTemp: 20, lowTemp: 10, date: '04 Nov', day: '월요일' },
  { highTemp: 20, lowTemp: 10, date: '05 Nov', day: '화요일' },
  { highTemp: 20, lowTemp: 10, date: '07 Nov', day: '수요일' },
  { highTemp: 20, lowTemp: 10, date: '08 Nov', day: '목요일' },
  { highTemp: 20, lowTemp: 10, date: '09 Nov', day: '금요일' },
  { highTemp: 20, lowTemp: 10, date: '10 Nov', day: '토요일' },
];

function GetWeeklyWeatherWidget() {
  return (
    <Card className="w-1/4 h-full">
      <CardHeader>
        <CardTitle>7 Days</CardTitle>
        <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      {weekDatas.map((data) => (
        <WeeklyContent
          key={data.date}
          highTemp={data.highTemp}
          lowTemp={data.lowTemp}
          date={data.date}
          day={data.day}
        />
      ))}
    </Card>
  );
}

export { GetWeeklyWeatherWidget };
