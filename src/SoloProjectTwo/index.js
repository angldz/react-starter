import React from "react";
import "./SoloProjectTwo.css";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

export default function SoloProjectTwo() {
    const cards = data.map(item => {
        return (
            <Card
            key={item.id}
            {...item}
            // title={item.title}
            // imageUrl={item.imageUrl}
            // location={item.location}
            // googleMapsUrl={item.googleMapsUrl}
            // startDate={item.startDate}
            // endDate={item.endDate}
            // desc={item.desc}
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
