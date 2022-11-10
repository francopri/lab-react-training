function Rating(props) {
    return (
        <div>
            {/* math.round arredonda para baixo */}
            {('★'.repeat(Math.round(+props.children))).padEnd(5, '☆')}

        </div>
    )
}

export default Rating

