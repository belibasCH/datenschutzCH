import React from "react";
import { useState } from 'react';



const Card = ({imageUrl, action, title, content}) => {
  const [status, setStatus] = useState(false);

    const handleclick = () => {
        action(!status);
        setStatus(() => !status);
    }

  return (
    <div className={status? "card active" : "card"  } onClick={handleclick}>
        <img src={imageUrl} alt="cardImage"/>
        <div className="card-title">{title}</div>
        {/* <div className="card-content">{content}</div> */}
    </div>
    )
}

export default Card;
