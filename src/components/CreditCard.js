import mastercard from '../assets/images/master-card.png';
import visa from '../assets/images/visa.png';


function CreditCard(props) {
    return (
        <div className="credit-card-card" style={{ backgroundColor: props.bgColor, color: props.color }}>

            <div className="credit-card-type">
                <img src={props.type === 'Visa' ? visa : mastercard } alt="type" />
            </div>

            <div className="credit-card-number">
                <span>****</span>&nbsp;
                <span>****</span>&nbsp;
                <span>****</span>&nbsp;
                {props.number.substr(12)}
            </div>

            <div className="credit-card-details">
                <div>Expires {props.expirationMonth}/{props.expirationYear}</div>
                <div>{props.bank}</div>
            </div>
            <div className="credit-card-owner">{props.owner}</div>
        </div>
    )
}
export default CreditCard;