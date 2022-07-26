import PropTypes from "prop-types"
import React from 'react';

function SideBarOptions({Icon, title}) {
  return (
    <div className="text-white cursor-pointer flex gap-2 items-center justify-left p-[10px] transition-opacity hover:bg-[#212429] hover:opacity-[0.5] ">
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
};
