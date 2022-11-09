import Rating from "./Rating";

function DriverCard(props) {

    return (
        <div className="driver-card-container">
            <div className="driver-card-img-container">
                <div className="driver-card-img" style={{ backgroundImage: `url(${props.img})` }}  ></div>
            </div>
            <div className="driver-card-detail">
                    <div className="driver-card-name">{props.name}</div>
                    <div className="driver-card-rating"><Rating>{props.rating}</Rating></div>
                    <div className="driver-card-car">{props.car.model} - {props.car.licensePlate} </div>
            </div>
        </div>
    )

}

export default DriverCard;