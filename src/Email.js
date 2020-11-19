import React,{Component, useState} from "react";
import QrReader from 'react-qr-reader'
import Se from "./S-Email";
import Sm from "./S-Mobile";
import './App.css'
class Email extends Component {
  state = {
    result: '',
    value : ''
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }


handleChangeE =event=>{
  console.log(event.target.value)
    this.setValue({value : event.target.value})
  
}
handleChangeM =event=>{
  console.log(event.target.value)
    this.setValue({value : event.target.value})
  
}
render(){
return (
  <div className="x">
  <div className=" row  text-white ">
        <div className="col-6">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
         </div>
  <div className="col-6">
    <h1 className="text-light">Welcome To SignUp Page</h1>
    <br></br>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1"><h3>Email address</h3></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Se(this.state.result)} onChange={this.handleChangeE}/>
    <small id="emailHelp" class="form-text text-muted text-dark">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1"><h3>Phone Number</h3></label>
    <input type="email" class="form-control"  value={Sm(this.state.result)} onChange={this.handleChangeM}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><h3>Password</h3></label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
</div>
</div>
</div>
);
};
}

export default Email;