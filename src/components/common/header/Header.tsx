import { SearchBar } from "@/components"; //index.ts를 통해 관리
import { useState } from "react";
import { useAtom } from 'jotai';
import { cityNameAtom } from '@/stores';

function Header() {
  const [cityName , setCityName] = useAtom(cityNameAtom);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      setInputValue("");
      setCityName(inputValue);
      console.log(cityName);
    }
  };

  return (
        <header className="w-full h-20 flex items-center p-6 gap-6">
          <div className="w-1/2 flex items-center justify-start gap-6">
            {/*헤더의 50%영역만 주기 위해* 시맨틱 태그 영역은 전체를 잡는게 좋다.*/}
            <div className="h-full flex items-center justify-center gap-2">
              <img src="src/assets/icons/logo.svg" alt="logo" className="h-10" />
              <h3 className="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight">
                Weather.io
              </h3>
            </div>
              <SearchBar
                placeholder="검색할 지역 이름을 영어로 입력하세요."
                className="flex-1"
                onInput={handleChange}
                value={inputValue}
                onKeyDown={handleKeyDown}
              />
          </div>
        </header>
  );
}

export { Header };
