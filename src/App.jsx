import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./redux/actions";

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};

const App = function (props) {
  const [input, setInput] = React.useState(""); //Store the input in the input box

  //When user types in the input field
  const handleChange = function (event) {
    setInput(event.target.value);
  };
  //When user clicks the add button
  const handleAdd = function () {
    console.log("ADDING");
    if (input.length > 0) {
      setInput("");
      props.addItem(input);
    }
  };

  //Generate the list of items in the wishlist based on the wishlist prop
  const generateList = () => {
    return props.wishList.map((item) => {
      return <li>{item}</li>;
    });
  };

  return (
    <div className="wrapper">
      <h1>My Wishlist</h1>
      <div className="wishlist">
        <ul>{generateList()}</ul>
      </div>
      <input
        value={input}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        id={"add-button"}
        onClick={() => {
          handleAdd();
        }}
      >
        ADD
      </button>
      <button id={"submit-button"}>SUBMIT</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
