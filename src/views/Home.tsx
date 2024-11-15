import { useEffect, useState } from 'react';
import {
  Header,
  GetTodayWiget,
  GetHourlyWidget,
  GetMapWidget,
  GetTodayHighlightWiget,
  GetWeeklyWeatherWidget,
} from '@/components'; //index.ts를 통해 관리
import axios from 'axios';
import { Weather, ForecastTideDay, ForecastDay } from '@/types';
import { useAtom } from 'jotai';
import { cityNameAtom } from '@/stores';

const API_KEY = '1074e7f79975413996e05050241411';
const BASE_URL = 'http://api.weatherapi.com/v1';

const defaultWeatherData: Weather = {
  current: {
    cloud: 0,
    condition: { text: '', icon: '', code: 0 },
    dewpoint_c: 0,
    dewpoint_f: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    gust_kph: 0,
    gust_mph: 0,
    heatindex_c: 0,
    heatindex_f: 0,
    humidity: 0,
    is_day: 1,
    last_updated: '',
    last_updated_epoch: 0,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 0,
    pressure_mb: 0,
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    vis_km: 0,
    vis_miles: 0,
    wind_degree: 0,
    wind_dir: '',
    wind_kph: 0,
    wind_mph: 0,
    windchill_c: 0,
    windchill_f: 0,
  },
  location: {
    country: '',
    lat: 0,
    localtime: '',
    localtime_epoch: 0,
    lon: 0,
    name: '',
    region: '',
    tz_id: '',
  },
  forecast: { forecastday: [] },
};

const defaultTideData: ForecastTideDay = {
  astro: {
    is_moon_up: 0,
    is_sun_up: 0,
    moon_illumination: 0,
    moon_phase: '',
    moonrise: '',
    moonset: '',
    sunrise: '',
    sunset: '',
  },
  date: '',
  date_epoch: 0,
  day: {
    avghumidity: 0,
    avgtemp_c: 0,
    avgtemp_f: 0,
    avgvis_km: 0,
    avgvis_miles: 0,
    condition: { text: '', icon: '', code: 0 },
    daily_chance_of_rain: 0,
    daily_chance_of_snow: 0,
    daily_will_it_rain: 0,
    daily_will_it_snow: 0,
    maxtemp_c: 0,
    maxtemp_f: 0,
    maxwind_kph: 0,
    maxwind_mph: 0,
    mintemp_c: 0,
    mintemp_f: 0,
    totalprecip_in: 0,
    totalprecip_mm: 0,
    totalsnow_cm: 0,
    uv: 0,
    tides: [
      {
        tide: [],
      },
    ],
  },
  hour: [],
};

function HomePage() {
  const [cityName , setCityName] = useAtom(cityNameAtom);
  


  const [weatherData, setWeatherData] = useState<Weather>(defaultWeatherData);
  const [tideData, setTideData] = useState<ForecastTideDay>(defaultTideData);
  const [oneWeekWeatherSummary, setOneWeekWeatherSummary] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/forecast.json?q=${cityName}&key=${API_KEY}`
      );
      console.log(res);

      if (res.status === 200) {
        setWeatherData(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log('fetchApi 호출이 완료되었습니다.');
    }
  };

  const fetchTideApi = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/marine.json?key=${API_KEY}&q=${cityName}&days=1`
      );
      console.log(res);
      if (res.status === 200) {
        setTideData(res.data.forecast.forecastday[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('tide 데이터 호출');
    }
  };

  const fetchGetOneWeekApi = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/marine.json?q=${cityName}&days=7&key=${API_KEY}`
      );
      console.log(res);

      if (res.status === 200 && res.data) {
        const newData = res.data.forecast.forecastday.map(
          (item: ForecastDay) => {
            return {
              maxTemp: Math.round(item.day.maxtemp_c),
              minTemp: Math.round(item.day.mintemp_c),
              date: item.date_epoch,
              iconCode: item.day.condition.code,
              isDay: item.day.condition.icon.includes('day'),
            };
          }
        );
        setOneWeekWeatherSummary(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
    fetchTideApi();
    fetchGetOneWeekApi();
  }, [cityName]);

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-5">
          <div className="w-full flex items-center gap-5">
            <GetTodayWiget data={weatherData} />
            <GetHourlyWidget data={weatherData.forecast.forecastday[0]} />
            <GetMapWidget />
          </div>
          <div className="w-full flex items-center gap-5">
            <GetTodayHighlightWiget
              currentData={weatherData}
              tideData={tideData}
            />
            <GetWeeklyWeatherWidget data={oneWeekWeatherSummary} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
