import { FaMapMarkerAlt } from 'react-icons/fa'; // Font Awesome map marker icon

export default function Entry(props) {
  return (
    <>
    <div className="entry-container">
      <img className="entry-img" src={props.entry.img} />

      <div className="entry-text">
        <div className="entry-location">
          <FaMapMarkerAlt className="location-icon"/>
          <span>{props.entry.country}</span>
          <a href={props.entry.link} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>

        <h3>{props.entry.place}</h3>
        <div className="entry-date">{props.entry.date}</div>
        <p className="entry-description">
          {props.entry.description}
        </p>
      </div>
    </div>

 
  </>
  );
}
