import React from "react";
import "./CardCss/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Here is a maid when you need them!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cleaning.jpg"
              text='"Cleaning is just putting stuff in less obvious places"'
              label="Cleaning"
              path="/Cleaning"
            />
            <CardItem
              src="images/cook.jpg"
              text="“A recipe has no soul. You as the cook must bring soul to the recipe.”"
              label="Cooking"
              path="/Cooking"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              text="Children are great imitators.so give them somehing greate to imitate"
              label="Baby Sitting"
              path="/BabyCare"
            />
            <CardItem
              src="images/img-9.jpg"
              text="The closest thing to being cared for is to care for someone else"
              label="Elderly Care"
              path="/ElderCare"
            />
            <CardItem
              src="images/wardboy.jpg"
              text="A ward boy duties and responsibilities involves maintaining the cleanliness of the patient's room in a hospital or clinic"
              label="Word Boy"
              path="/WardBoy"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
