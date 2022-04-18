import React from 'react'
import Loading_icon from "../assets/images/Loading_icon.gif";

const Loading = () => {
  return (
    <div className='loading'>
      <img src={Loading_icon} alt="Loading_icon" />
    </div>
  );
}

export default Loading