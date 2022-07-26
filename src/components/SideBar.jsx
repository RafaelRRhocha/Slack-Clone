import {
  Record,
  Pen,
  ChatCircleText,
  ChatsCircle,
  At,
  PencilSimple,
  FlagBanner,
  DotsThreeVertical,
  CaretUp,
  CaretDown,
  Plus,
} from 'phosphor-react';
import React from 'react';
import SideBarOptions from './SideBarOptions';

function SideBar() {
  return (
    <div className="pt-[15vh] flex flex-col">
      <div className="border-b border-[#8f8f90] flex justify-left items-center gap-3 p-[10px]">
        <div className="flex flex-col items-left">
          <h1 className="text-white text-[20px]">diasodhas</h1>
          <div className="flex flex-row items-center gap-2">
            <Record size={15} />
            <p className="text-[14px]">ddsihdhiaosda</p>
          </div>
        </div>
        <Pen className="p-1 text-[#1a1d21] text-[30px] cursor-pointer bg-white rounded-full hover:animate-pulse" />
      </div>
      <SideBarOptions Icon={ ChatCircleText } title="Conversations" />
      <SideBarOptions Icon={ ChatsCircle } title="Direct Messages" />
      <SideBarOptions Icon={ At } title="Mentions and Reactions" />
      <SideBarOptions Icon={ PencilSimple } title="Drafts" />
      <SideBarOptions Icon={ FlagBanner } title="Saved Items" />
      <SideBarOptions Icon={ DotsThreeVertical } title="More" />
      <SideBarOptions Icon={ CaretUp } title="Show Less" />
      <hr className="my-[10px] border-[#8f8f90]" />
      <SideBarOptions Icon={ CaretDown } title="Channels" />
      <hr className="my-[10px] border-[#8f8f90]" />
      <SideBarOptions Icon={ Plus } addChannel title="Add Channel" />
    </div>
  );
}

export default SideBar
