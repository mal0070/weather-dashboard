import { Card, CardHeader, CardDescription, CardContent } from '@/components';

interface Props {
  title: string;
  desc: string;
  imgUrl: string;
  num: number;
  unit: string;
}

function GetExtraWiget({ title, desc, imgUrl, num, unit }: Props) {
  return (
    <Card className="w-full h-fit bg-neutral-50">
      <CardHeader>
        <CardDescription className="font-semibold text-neutral-700">
          {title}
          <span className="text-neutral-400 font-normal ml-1">{desc}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <img src={imgUrl} alt="" className="h-10 w-10" />
        <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
          {num}
          {title === '체감 온도' ? (
            <span className="text-lg ml-1">&#8451;</span>
          ) : (
            <span className="text-lg ml-1">{unit}</span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

export { GetExtraWiget };
