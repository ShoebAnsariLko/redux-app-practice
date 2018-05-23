import React from 'react';
import {connect} from 'react-redux';
import {addNumber} from '../actions/mathActions'
class Main extends React.Component {
   render(){
    return (
      <div className="App">
      <h1>Main Component</h1>
      <h3>Starting Number-{this.props.user.result}</h3>
      <button onClick={()=>this.props.addNumber(30)}>ADD Number</button>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
return{
  user:state.math
}
}
const mapDispatchToProps=(dispatch)=>{
return{
  addNumber:(number)=>{
    dispatch(addNumber(number))
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
