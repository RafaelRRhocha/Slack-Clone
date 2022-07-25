import { Clock, UserCircle, MagnifyingGlass, Question } from 'phosphor-react';
import React from 'react';

function Header() {
  return (
    <header className="bg-[#3f0f40] flex fixed w-[100%] items-center justify-center py-[10px]">
      <div className="flex items-center gap-3 ml-[215px]">
        <Clock className="text-white ml-[40px]" size={25} />
        <div className="flex items-center gap-5 border border-slate-600 rounded-lg px-5 w-[500px]">
          <MagnifyingGlass className="text-white" size={20} />
          <input className="input bg-[#3f0f40] focus:outline-none w-full max-w-xs" type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="flex items-center gap-5 p-2 ml-[200px]">
        <Question className="text-white" size={25} />
        <UserCircle className="text-white cursor-pointer hover:opacity-[0.3]" size={35} />
      </div>
    </header>
  )
}

export default Header;

