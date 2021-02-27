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
  const [input, setInput] = React.useState(''); //Store the input in the input box

  const handleChange = function(event){
    setInput(event.target.value);
  };
  const handleAdd = function(){
    console.log('ADDING')
    setInput('');
    props.addItem(input);
  };

  const generateList = () => {
    return props.wishList.map((item) => {
      return <li>
      {item}
    </li>
    })
  };

  return (
      <div className="wrapper">
        <h1>My Wishlist</h1>
      <div className="wishlist">
        <ul>
        {generateList()}
        </ul>
      </div>
      <input value={input} onChange={(e) => {handleChange(e)}}/>
      <button id={'add-button'} onClick={()=>{handleAdd()}}>ADD</button>
      <button id={'submit-button'}>SUBMIT</button>
      </div>
  
  );
};



export default connect(mapStateToProps, mapDispatchToProps) (App);
