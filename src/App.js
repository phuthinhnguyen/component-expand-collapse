import logo from './logo.svg';
import './App.css';
import React from 'react';
const style = {width:"100%",height:70,backgroundColor:"green",color:"white",fontSize:24,display:"flex",alignItems:"center"};
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={isExpand: false}
  }
 
  show=()=>{
    this.setState({isExpand:!this.state.isExpand});
  }
  render(){
    return(
      <>
        {!this.state.isExpand?
        (<><div style={style}>Conditional Rendering</div>
          <button onClick={this.show}>Xem giới thiệu</button></>):
        (<><div style={style}>Conditional Rendering</div>
        <button onClick={this.show}>Đóng giới thiệu</button><h2>Giới thiệu</h2><p>Trong ReactJS, đôi khi bạn có một số Component và tùy thuộc vào từng điều kiện...</p></>)}
      </>
          
     
    )
  }
}

export default App;
