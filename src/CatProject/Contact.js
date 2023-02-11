import { FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact(props) {
    // console.log("props", props);
    // console.log("email", email);
    return (<div className="contact-card">
                <img className="images" src={props.img} alt="" />
                <h1>{props.name}</h1>
                <div className="group-telephone">
                    < FaPhone />
                    <p> {props.phone} </p>
                </div>
                <div className="group-email">
                    < FaEnvelope />
                    <p> {props.email} </p>
                </div>
            </div>
    )
}


// Challenge: fix the bug, now that we've destructured the props object

// export default function Contact({img, name, phone, email}) {
//     // console.log("props", props);
//     console.log("email", email);
//     return (<div className="contact-card">
//                 <img className="images" src={img} alt="" />
//                 <h1>{name}</h1>
//                 <div className="group-telephone">
//                     < FaPhone />
//                     <p> {phone} </p>
//                 </div>
//                 <div className="group-email">
//                     < FaEnvelope />
//                     <p> {email} </p>
//                 </div>
//             </div>
//     )
// }