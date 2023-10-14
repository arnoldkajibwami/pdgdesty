import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

export default function HomeNews() {
    const filtered = Data.filter(item => {
        return item.news === "new";

    });


    return (
        <section>
            <div className="admincart admin container">

                {filtered.map((item) => {
                    return (
                        <div key={item.id} className=" cardss">
                            <div className="cardss-img" style={{ backgroundImage: `url(${item.image})` }}>
                            </div>

                            <div className="cardss-info">
                                <h6 className="text-title">{item.title}</h6>
                                <p className="text-body text-description">{item.description}</p>
                                <p className="text-body">{item.date}</p>
                                <Link to="./newsdetails">
                                    <button  className="btn btn-primary">{item.more}</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div >
        </section >
    )
};


