import React, { Component } from 'react';
import User from '../component/user'
import {connect} from 'react-redux'
import {setName} from '../actions/userActions'
import Main from '../component/main'
class App extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={()=>this.props.setName("PRInce")}>ChangeUser</button>
        <User userName={this.props.user.name}/>
        <Main/>
      </div>
    );
  }
}

const mapStateToProp =(state)=>{
  return{
      math:state.math,
      user:state.user
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
    setName:(name)=>{
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProp,mapDispatchToProps)(App);
