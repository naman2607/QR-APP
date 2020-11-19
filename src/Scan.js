import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import extractEmails from './emailAddress'
import GetMobileNumber from './MobileNumber'
import getUrl from './url'
class Scan extends Component {
  state = {
    result: ''
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

  render() {
    return (
      <div className="x">
      <div className=" row  text-light">
        <div className="col-6">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        
        />
         </div>
         {!this.state.result ? <h1 className="text-light">Welcome to Qr code Info Extractor</h1> :
         <div className="col-6">
           <p> Qr Code Conatins :  {this.state.result}</p>
           <br></br>
           <br></br>
        <p>Phone Number is {GetMobileNumber(this.state.result)}</p>
        <p>Email is {extractEmails(this.state.result)}</p>
        <p>Url is {getUrl(this.state.result)}</p>
      </div>}
      </div>
      </div>
    
    )
  }
}
export default Scan;