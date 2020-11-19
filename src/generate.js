import React,{useState} from 'react';
import './App.css'
var QRCode = require('qrcode.react');

const Generate = ()=>{
  const [value,setValue]=useState('');
  
  const handleChange = event=>{
    event.preventDefault();
    setValue(event.target.value)
  }

  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return(
    
    <div className="x">
       
  <div className="jumbotron bg-dark text-white">
  <h1 className="display-4">GENERATE YOUR QR CODE HERE</h1>
       
        <div className="form-group">
      <form>
        <label className="text-white text-center p-4">
          <h3>Enter The Info</h3>
          <textarea className="form-control" style={{padding:"50px"}}  type="text" value={value} onChange={handleChange} />
        </label>
      </form>
      <QRCode
        id="123456"
        value={value}
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <br></br>
      <a onClick={downloadQR}type="button" className="btn btn-success text-white btn-lg p-2 my-2"> Download QR </a>
    </div> 
    </div>
    </div>
  )
}
export default Generate;