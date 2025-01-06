import { FaMapMarkerAlt } from 'react-icons/fa'; // Font Awesome map marker icon

export default function Entry(props) {
  return (
    <>
    <div className="entry-container">
      <img className="entry-img" src={props.img} />

      <div className="entry-text">
        <div className="entry-location">
          <FaMapMarkerAlt className="location-icon"/>
          <span>{props.country}</span>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>

        <h3>{props.place}</h3>
        <div className="entry-date">{props.date}</div>
        <p className="entry-description">
          {props.description}
        </p>
      </div>
    </div>

 
  </>
  );
}
