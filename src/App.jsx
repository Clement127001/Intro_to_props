import React from "react";
import Contact from "./assets/Contact";


//here we are make use of the main things that all the libraries is capable of thst is PROPS
//It make the code not to be hard coded and let our code to be reusable everytime

export default function App() {
  return (
    <div className="contacts">
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow" />
      <Contact
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com" />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com" />
      <Contact
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        mail="pumpkin@scrimba.com" />


    </div>

  )
}


