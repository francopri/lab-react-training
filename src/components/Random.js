function Random(props) {

    return (
        <div className="random-border">

            Random value between {props.min} and {props.max} ={'>'} {Math.floor((Math.random() * props.max))}

        </div>
    )
}

export default Random;