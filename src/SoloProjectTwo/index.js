import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

export default function SoloProjectTwo() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return(
        <div className="solo-project-two-wrapper">
            <Header />
            {cards}
        </div> 
    )
}
