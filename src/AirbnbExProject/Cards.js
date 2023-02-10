import { FaStar } from "react-icons/fa"

import React from "react"

// export default function Cards() {
//     return(
//         <div className="cards-group">
//             <div className="katie">
//                 <button className="button-sold-out">Sold Out</button>
//             </div>
//             <div className="description">
//                 <div className="reviews">
//                     <FaStar />
//                     <span className="total-rating"> 5.0 </span>
//                     <span className="number-country"> (6) . USA </span>
//                 </div>
//                 <p className="course-title">Life lesson with Katie Zaferes </p>
//                 <p className="price"> <strong> From $136</strong> / person </p>
//             </div>
//         </div>
//     )
// }



/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText= "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="cards-group">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card-img" />
            <div className="description">
                <div className="reviews">
                     <FaStar />
                     <span className="total-rating">{props.stats.rating}</span>
                     <span className="review-count">({props.stats.reviewCount})• </span>
                     <span className="location">{props.location}</span>
                 </div>
                 <p className="course-title">{props.title}</p>
                 <p className="price"> <strong>From ${props.price}</strong> / person</p>
             </div>
        </div>
    ) 
}
