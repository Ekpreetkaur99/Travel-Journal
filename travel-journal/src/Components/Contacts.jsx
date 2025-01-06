import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

export default function Contacts(props){
    return(
            <div className="contact">
            <article className="contact-card">
              <img src={props.img}></img>
                <h3>{props.name}</h3>
                <div className="info-group">
                <FaPhoneAlt size={20} />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                <FaEnvelope size={20} />
                <p>{props.email}</p>
                </div>
            </article>
        </div>
    )
}