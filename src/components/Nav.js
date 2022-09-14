import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

    return (
        <nav>
            {/* <FontAwesomeIcon icon="fa-solid fa-earth-europe" /> */}
            <FontAwesomeIcon icon={faEarthEurope} className="nav--eartIcon" />

            <p>My Travel Journal</p>

        </nav>
    )

}

export default NavBar