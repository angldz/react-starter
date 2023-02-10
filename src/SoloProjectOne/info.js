import { FaAt, FaEnvelope, FaLinkedin, FaMailchimp, FaVoicemail } from "react-icons/fa";

export default function Info() {
    return (
        <div className="div-info">
            <img className="profile-picture" src="/kawai-potato.png"></img>
            <h1 className="name">Angel Dzikariene</h1>
            <h2 className="your-job">Frontend Developer</h2>
            <h3 className="your-website">cookiesandcream.website</h3>
            <div className="div-button">
                <button className="button-email"> <FaEnvelope /> Email</button>
                <button className="button-linkedin"><FaLinkedin /> LinkedIn</button>
            </div>
        </div>
    )
}