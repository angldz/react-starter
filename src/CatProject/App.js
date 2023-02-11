import React from "react"
import Contact from "./Contact"
import "./catproject.css";
import TryOut from "../CatProject/TryOut";
export default function App() {
    return (
        <div className="contacts-wrapper">
            <TryOut className="tryout"/>
            <div className="contacts">
                <Contact 
                    img="./images/mr-whiskerson.png"
                    name="Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contact 
                    img="./images/Fluffykins.png"
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contact 
                    img="./images/Felix.png"
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact 
                    img="./images/Pumpkin.png"
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </div>
        </div>
    )
}