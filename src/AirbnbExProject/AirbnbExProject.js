
import "./AirbnbExProject.css";
import Navbar from "./Component";
import Hero from "./Hero";
import Card from "./Cards";
import data from "./data";

export default function AirbnbExProject() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
       {...item}
        // img={item.coverImg}
        // totalRating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // courseTitle={item.title}
        // priceFrom={item.price}
        // openSpots={item.openSpots}
      />
    )
  })

  return (
    <div className="airbnb-ex-project-wrapper">
      <Navbar />
      <Hero />
      <section-hero className="card-list">
          {cards}
      </section-hero>
    </div>
  )
}
