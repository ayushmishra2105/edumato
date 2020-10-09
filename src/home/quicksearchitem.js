import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./quicksearchitem.css";
import { UserContext } from "../providers/userprovider";

function Quicksearchitem() {
  const user = useContext(UserContext);
  var mealtype = [
    {
      _id: 1,
      name: "breakfast",
      mealtype: 1,
    },
    {
      _id: 2,
      name: "lunch",
      mealtype: 2,
    },
    {
      _id: 3,
      name: "dinner",
      mealtype: 3,
    },
    {
      _id: 4,
      name: "snacks",
      mealtype: 4,
    },
    {
      _id: 5,
      name: "drinks",
      mealtype: 5,
    },
    {
      _id: 6,
      name: "nightlife",
      mealtype: 6,
    },
  ];
  const displaytiles = () => {
    return mealtype.map((meal) => {
      if (user) {
        return (
          <Link to={`/list/${meal.mealtype}`}  key={meal._id}>
            <div className="col-md-4 col-sm-6 tilecontainer">
              <div className="card">
                <img
                  src={`./images/${meal.name}.png`}
                  alt="food"
                  className="cimage"
                />
                <div className="ctitle">{meal.name}</div>
                <div className="ctext">
                  Start your day with exclusive breakfast option
                </div>
              </div>
            </div>
          </Link>
        );
      } else {
        return (
          <React.Fragment key={meal._id}>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Oops!
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">Please login to continue</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>

                    <button type="button" className="btn btn-primary">
                      ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 tilecontainer"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <div className="card">
                <img
                  src={`./images/${meal.name}.png`}
                  alt="food"
                  className="cimage"
                />
                <div className="ctitle">{meal.name}</div>
                <div className="ctext">
                  Start your day with exclusive breakfast option
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
    });
  };

  return (
    <div className="qsearch container">
      <div className="qheading">Explore</div>
      <div className="qtext">Find the meal for your time and choice</div>

      <div className="row tilecontainer">{displaytiles()}</div>
    </div>
  );
}

export default Quicksearchitem;
