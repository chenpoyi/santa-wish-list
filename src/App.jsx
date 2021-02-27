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
  return (
      <div className="wrapper">
      <Wishlist items={props.wishList}/>
      <input value={input} onChange={(e) => {handleChange(e)}}/>
      <button onClick={()=>{handleAdd()}}>ADD</button>
      </div>
  
  );
};

const Wishlist = function(props){

  const generateList = () => {
    return props.items.map((item) => {
      return <WishlistItem item />
    })
  }
  return(
    <div>
      {props.items}
    </div>
  )
}

const WishlistItem = function(props){
  return(
    <li>
      {props.item}
    </li>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
