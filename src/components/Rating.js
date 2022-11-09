function Rating(props) {
    return (
        <div>
            {('★'.repeat(Math.round(+props.children))).padEnd(5, '☆')}

        </div>
    )
}

export default Rating

