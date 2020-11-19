import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Home = () => {
const handleChangeG = event =>{
    
}
    return(
        <div className="z">
            <div className=" jumbotron font-weight-bold text-center my-0">
               <h1> WELCOME TO QR APP</h1>
            </div>
            <div className="row">
                <div className="col-md-6 p-0 my-0">
                        <div className="body">
                            </div>
                </div>
                <div className="col-md-2 text-center">
                    <h3 className="text-light" style={{marginTop:"100%"}}>Generate</h3>
                    <Link to="/generate">
                    <button type="button"  className="btn btn-success btn-block">
                       GENERATE
                        </button>
                        </Link>

                </div>
                <div className="col-md-2 text-center">
                    <h3 className="text-light" style={{marginTop:"100%"}}>Scan</h3>
                    <Link to ="/scan">
                    <button type="button" className="btn  btn-success btn-block ">
                    SCAN
                    </button>
                    </Link>

                </div>
                <div className="col-md-2 text-center ">
                    <h3 className="text-light" style={{marginTop:"100%"}}>Application</h3>
                    <Link to ="/signup">
                    <button type="button" className="btn  btn-success btn-block ">
                        SignUp Form
                    </button>
                    </Link>

                </div>
            </div>
        </div>
    
)
    }

export default Home
