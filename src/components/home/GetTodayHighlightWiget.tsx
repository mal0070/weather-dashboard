import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  GetSunriseAndSunset,
  GetExtraWiget,
} from '@/components';
import { ForecastTideDay, Tide, Weather } from '@/types';

interface Props {
  currentData: Weather;
  tideData: ForecastTideDay;
}



function GetTodayHighlightWiget({ currentData, tideData }: Props) {
  if (!currentData || !tideData) {
    return <div>데이터를 불러오는 중...</div>;
  }

  /*const tideTimesWithUnits = tideData.day.tides[0].tide.map((item: Tide) => {
    const [_, hourString] = item.tide_time.split(' ');
    const [hour] = hourString.split(':').map(Number);
    const formattedUnit = hour < 12 ? 'am' : 'pm';

    return {
      displayTime: item.tide_time.split(" ")[1],
      unit: formattedUnit,
      type: item.tide_type
    };
  });*/

  const datas = [
    {
      title: '습도',
      desc: 'Huminity',
      imgUrl: 'src/assets/icons/Humidity.svg',
      num: 64,
      unit: '%',
    },
    {
      title: '기압',
      desc: 'Pressure',
      imgUrl: 'src/assets/icons/Wind.svg',
      num: 1024,
      unit: 'hPa',
    },
    {
      title: '가시거리',
      desc: 'visiablity',
      imgUrl: 'src/assets/icons/Fog.svg',
      num: 64,
      unit: '%',
    },
    {
      title: '체감온도',
      desc: 'Feels like',
      imgUrl: 'src/assets/icons/Hot.svg',
      num: 19,
      unit: `&#8451;`,
    },
  ];

  return (
    <Card className="flex-1 h-full">
      <CardHeader>
        <CardTitle className="text-xl">Today's Highlight</CardTitle>
        <CardDescription>
          오늘 날씨 중 주의 깊게 살펴보아야할 이벤트
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <Card className="w-full bg-neutral-100">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                해양 및 조수 데이터
                <span className="text-neutral-400 font-normal ml-1">
                  Marin and Sailing
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex items-center justify-between">
              <img src="src/assets/icons/Waves.png" className="h-14" />
              <div className="w-fit grid grid-cols-4 gap-3">
      
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-muted-foreground">
                        1회 - 만조
                      </p>
                      <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                        05:48
                        <span className="ml-[1px]">am</span>
                      </p>
                    </div>
                  
              </div>
            </CardContent>
          </Card>
          <Card className="w-full bg-neutral-100">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                일출/일몰
                <span className="text-neutral-400 font-normal ml-1">
                  Sunrise & Sunset
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2">
              <GetSunriseAndSunset
                imgUrl={'src/assets/icons/1000d.svg'}
                label={'Sunrise'}
                time={tideData.astro.sunrise}
              />
              <GetSunriseAndSunset
                imgUrl={'src/assets/icons/1000n.svg'}
                label={'Sunset'}
                time={tideData.astro.sunset}
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
          {datas.map((data)=>{
             return <GetExtraWiget 
             title={data.title}
             desc={data.desc}
             imgUrl={data.imgUrl}
             num={data.num}
             unit={data.unit}
             />
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export { GetTodayHighlightWiget };
