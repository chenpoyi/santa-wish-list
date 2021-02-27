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
  return (
    <div className="App-container">
      <h1>My Wishlist</h1>
      {props.wishList}
      <button onClick={()=>{props.addItem('Hello')}}>ADD</button>
    </div>
  );
};



export default connect(mapStateToProps, mapDispatchToProps) (App);
