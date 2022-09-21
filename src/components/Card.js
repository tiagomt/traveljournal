import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function TravelCard(props) {

    return (

        <div className="card">

            <img src={props.imageUrl} alt="" className="card--image" />

            <div className="card--content">
                <FontAwesomeIcon icon={faLocationDot} className="nav--locationIcon" />

                <span className="card--country">{props.location}</span>

                <span className="card--googleMaps">View on Google Maps</span>

                <h1 className="card--title">{props.title}</h1>

                <span className="startDate card--dates">{props.startDate} - </span>
                <span className="endDate card--dates">{props.endDate}</span>


                <p className="card--description">{props.description}</p>
            </div>

            {/* <p>{props.destiny.title}</p> */}
        </div>

    )


}

export default TravelCard