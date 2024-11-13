//파일 import를 할 때 코드를 줄이기 위해

/*공통적으로 사용되는 컴포넌트*/
export {GetTodayWiget} from "./home/GetTodayWiget";
export {GetHourlyWidget} from './home/GetHourlyWidget';
export {GetMapWidget} from './home/GetMapWidget';
export {GetSunriseAndSunset} from "./home/GetSunriseAndSunset";
export {GetExtraWiget} from './home/GetExtraWiget';
export {GetTodayHighlightWiget} from './home/GetTodayHighlightWiget';
export {GetWeeklyWeatherWidget} from './home/GetWeeklyWeatherWidget';
export {WeeklyContent} from './home/WeeklyContent';

/* UI 기초 컴포넌트 */
export { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; //./ui/
export { Button, buttonVariants } from "./ui/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./ui/card";
export { Input } from "./ui/input";
export { Separator } from "./ui/separator";
export { SearchBar } from "./ui/search-bar";
export {Header} from "./common/header/Header";
