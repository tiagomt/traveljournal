import React from "react"

function TravelCard(props) {

    return (

        <div className="card">

            <img src={props.imageUrl} alt="" className="card--image" />

            <div className="card--content">
                <span className="card--country">{props.location}</span>

                <span>View on Google Maps</span>

                <h1>{props.title}</h1>

                <span>{props.startDate} - </span>
                <span>{props.endDate}</span>


                <p>{props.description}</p>
            </div>

            {/* <p>{props.destiny.title}</p> */}
        </div>

    )


}

export default TravelCard