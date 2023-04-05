function Destination(props) {
  return (
    <div className="destination">
      <img src={props.item.img} className="destination--img" alt="Japan" />
      <img
        src={require("../images/marker.png")}
        className="destination--marker"
        alt="marker"
      />
      <p className="destination--country">{props.item.country}</p>
      <a href={props.item.link} className="destination--link">
        View on Google Maps
      </a>
      <h1 className="destination--title">{props.item.title}</h1>
      <p className="destination--date">
        <strong>{props.item.date}</strong>
      </p>
      <p className="destination--info">{props.item.info}</p>
    </div>
  );
}
export default Destination;
