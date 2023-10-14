import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Items(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cardss">
      <div className="cardss-img" style={{ backgroundImage: `url(${props.image})` }}>
      </div>

      <div className="cardss-info">
        <h5 className="text-title">{props.title}</h5>
        <p className="text-body text-description">{props.description}</p>
        <p className="text-body">{props.date}</p>
        <Link to="./newsdetails">
          <button className="btn btn-primary">{props.more}</button>
        </Link>
      </div>
    </div>
  )
}


