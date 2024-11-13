import useKakaoLoader from '@/assets/hooks/useKakaoLoader';
import {
  Header,
  GetTodayWiget,
  GetHourlyWidget,
  GetMapWidget,
  GetTodayHighlightWiget,
  GetWeeklyWeatherWidget
} from '@/components'; //index.ts를 통해 관리


function HomePage() {
  useKakaoLoader();

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-5  bg-slate-500">
          <div className="w-full flex items-center gap-5">
            <GetTodayWiget />
            <GetHourlyWidget />
            <GetMapWidget />
          </div>
          <div className="w-full flex items-center gap-5">
            <GetTodayHighlightWiget />
            <GetWeeklyWeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
