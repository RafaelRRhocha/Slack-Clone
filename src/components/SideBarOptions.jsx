import PropTypes from "prop-types"
import React from 'react';
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SideBarOptions({addChannel, Icon, title, id}) {
  const dispatch = useDispatch();

  const addNewChannel = () => {
    const channelName = prompt('insira o nome do canal');

    console.log(channelName);

    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      })
    }
  }

  const selectedChannel = () => {
    if (id) {
      dispatch(enterRoom({
        roomId: id,
      }))
    }
  }

  return (
    <div onClick={addChannel ? addNewChannel : selectedChannel} className="text-white cursor-pointer flex gap-2 items-center justify-left p-[10px] transition-opacity hover:bg-[#212429] hover:opacity-[0.5] ">
      {Icon && <Icon size={ 25 } />}
      {Icon ? (
        <p>{title}</p>
      ) : (
        <p># { title }</p>
      )}
    </div>
  );
}

export default SideBarOptions;

SideBarOptions.propTypes = {
  Icon: PropTypes.string,
  title: PropTypes.string,
  addChannel: PropTypes.bool,
  id: PropTypes.number,
};
