function IdCard({ lastName, firstName, gender, height, birth, picture }) {

    return (

        <div className='idCard-border'>
            <div>
                <img src={picture} alt='profile pic' />
            </div>
            <div className="idCard-content">
                <div><strong> First Name: </strong>{firstName} </div>
                <div> <b>Last Name:</b> {lastName} </div>
                <div> <b> Gender:</b> {gender} </div>
                <div><b> Height:</b> {height} </div>
                <div><b> Birth:</b>  {birth} </div>
            </div>
        </div>
    );
}

export default IdCard;