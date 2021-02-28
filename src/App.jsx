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
    input.length > 0 && !checkDuplicate() ? props.addItem(input) : alert('This item is a duplicate!');
    setInput("");
  };

  //when user clicks the submit button
  const handleSubmit = function () {
    //Loops through each item in the list and deletes them.
    if (props.wishList.length > 0) {
      alert("Wish list submitted to Santa!");
      props.wishList.forEach((item) => {
        props.deleteItem(item);
      });
    } else {
      alert("Your wishlist is empty!");
    }
  };

  //when user clicks list item
  const handleClick = function (e) {
    props.deleteItem(e.target.innerText);
  };
  //Generate the list of items in the wishlist based on the wishlist prop
  const generateList = () => {
    return props.wishList.map((item) => {
      return (
        <li className={"wishlist-item"} onClick={handleClick}>
          {item}
        </li>
      );
    });
  };
  //Check for duplicate when adding to list
  const checkDuplicate = function () {
    return props.wishList.find((element) => element === input);
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
      <button
        id={"submit-button"}
        onClick={() => {
          handleSubmit();
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
