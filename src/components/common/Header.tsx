import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Route } from 'react-router-dom';

function InputRegion() {
  return <Input type="search" placeholder="검색할 지역 이름을 입력하세요."/>;
}

function Header() {
  return (
    <header className="header">
      <ul>
        <li className="header__logo">
          <a href="/">Logo</a>
        </li>
        <li>
          <a href="/">Weather.io</a>
        </li>
        <li>
          <div className="search__bar">
            <Search></Search>
            <Route path='' element={<InputRegion/>}></Route>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
