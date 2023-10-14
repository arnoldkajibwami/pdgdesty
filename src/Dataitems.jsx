import React from "react";
import Items from "./Items";
import Data from "./Data";


const Dataitems = () => {
    return (
        <>
            <div className="mt-5 allDestinations">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div className="mb-1">
                                <Items
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    by={item.by}
                                    article={item.article}
                                    date={item.date}
                                    item={item}
                                    more={item.more}
                                    key={index}
                                />
                            </div>
                        </>
                    )
                })}

            </div>

        </>
    )
}

export default Dataitems;