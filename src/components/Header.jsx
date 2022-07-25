import { Clock, UserCircle, MagnifyingGlass } from 'phosphor-react';
import React from 'react';

function Header() {
  return (
    <header className="bg-[#3f0f40] flex fixed w-[100%] items-center justify-between py-[10px]">
      <div className="flex gap-5 items-center ml-[20px]">
        <UserCircle className="text-white cursor-pointer hover:opacity-[0.3]" size={35} />
        <Clock className="text-white ml-[40px]" size={25} />
      </div>
      <div className="flex gap-2">
        <MagnifyingGlass className="text-white" size={25} />
        <input type="text" />
      </div>
    </header>
  )
}

export default Header;

