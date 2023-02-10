import { ImLocation } from 'react-icons/im';

export default function Card(props) {
    return(
        <div className="cards-group">
            <div className="cards-group-inner">
                <img src={props.imageUrl} className="card-img"/>
                <div className="card-description">
                    <div className="location">
                        <ImLocation className="location-icon" /> {props.location}
                        <a href={props.location.googleMapsUrl} className="location-link">View on Google Maps</a>
                    </div>
                    <div className="title">{props.title}</div>
                    <div className="date">{props.startDate} - {props.endDate}</div>
                    <div className="desc">{props.desc}</div>
                </div>
            </div>
        </div>

    )
}