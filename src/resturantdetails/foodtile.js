import React, { useContext, useState } from "react";
import "./foodtile.css";
import { UserContext } from "../providers/userprovider";
const url = "https://edumatorest.herokuapp.com/cart";

function Foodtile(props) {
  const user = useContext(UserContext);
  const [v, setV] = useState("visible");

  function addfood() {
    setV("hidden");
    console.log(user.email);
    if (props.food) {
      var data = {
        ...props.food,
        email: user.email,
      };
      //console.log(data);
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  }

  return (
    <div class="tile">
      <img class="fimg" src={props.food ? props.food.img : ""} alt="food" />
      <div class="ftitle">{props.food ? props.food.name : ""}</div>
      <p class="fprice">{props.food ? props.food.price : ""}</p>
      <div class="fadd" onClick={addfood} style={{ visibility: v }}>
        <svg
          id="foodsvg"
          enable-background="new 0 0 512 512"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          color="blue"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m137 376h281.607l42.842-165.25c30.285-18.441 50.551-51.773 50.551-89.75 0-57.897-47.103-105-105-105s-105 47.103-105 105c0 16.095 3.645 31.354 10.145 45h-173.113l-20-90h-119.032v30h94.968l53.333 240h-11.301c-24.813 0-45 20.187-45 45s20.187 45 45 45h17.58c-1.665 4.695-2.58 9.742-2.58 15 0 24.813 20.187 45 45 45s45-20.187 45-45c0-5.258-.915-10.305-2.58-15h65.16c-1.665 4.695-2.58 9.742-2.58 15 0 24.813 20.187 45 45 45s45-20.187 45-45c0-5.258-.915-10.305-2.58-15h32.58v-30h-285c-8.271 0-15-6.729-15-15s6.729-15 15-15zm42.032-30-13.333-60h62.499l5 60zm136.666-60-5 60h-47.396l-5-60zm-59.896-30-5-60h72.396l-5 60zm85 90 5-60h65.146l-15.556 60zm77.924-90h-70.424l3.795-45.534c15.985 9.846 34.791 15.534 54.903 15.534 6.839 0 13.524-.665 20.002-1.919zm-11.726-210c41.355 0 75 33.645 75 75s-33.645 75-75 75-75-33.645-75-75 33.645-75 75-75zm-186.302 150 5 60h-66.666l-13.333-60zm-8.698 255c0 8.271-6.729 15-15 15s-15-6.729-15-15 6.729-15 15-15 15 6.729 15 15zm150 0c0 8.271-6.729 15-15 15s-15-6.729-15-15 6.729-15 15-15 15 6.729 15 15z"
              fill="#0944ed"
              data-original="#000000"
            />
            <path
              d="m392 166h30v-30h30v-30h-30v-30h-30v30h-30v30h30z"
              fill="#0944ed"
              data-original="#000000"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Foodtile;
