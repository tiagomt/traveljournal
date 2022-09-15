import React from "react";
import NavBar from "./components/Nav";
import TravelCard from "./components/Card";
import './style.css'
import data from "./data";


export default function App() {

  const dataTravel = data.map(destiny => {


    return (

      <TravelCard

        {...destiny}
      // dadoos={destiny}


      />

    )

  })


  return (
    <div>
      <NavBar />

      {/* Para cada elemento do array, será gerado um "destiny" */}
      {dataTravel}
    </div>
  )

}

