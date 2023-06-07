import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from 'react-bootstrap';
// import logo from "../../../public/1.jpg";
import logo from "./1.jpg";
import logo1 from "./2.jpg";


function Card() {
  return (
    <>
      <div className=" container card p-2 my-4 d-grid ">
      <div class="container ">
  <div class="row align-items-center">
    <div class="col ">
    <p className="Text col ">About Me</p>
          <div className="text">
            <p className="discrebtion">I am looking forward to furthering my
                                  programming experience, I'm seeking for an
                                  opportunity where my academic back- ground
                                  and my experience can be further enhanced.
                                  </p>
            <button type="button" className="btn btn-secondary">Contact Us </button>
          </div>
    </div>
    <div class="col">
    <img className='col' style={{ width:555}} src={logo} alt='as'/>
    </div>
</div>
</div>
         
      </div>
      <div className=" container card p-2 my-4 d-grid ">
      <div class="container ">
  <div class="row align-items-center">
    
    <div class="col">
    <img className='col' style={{ width:555}} src={logo1} alt='as'/>
    </div>
    <div class="col text-center">
    <p className="Text col ">About Me</p>
          <div className="text">
            <p className="discrebtion">I am looking forward to furthering my
                                  programming experience, I'm seeking for an
                                  opportunity where my academic back- ground
                                  and my experience can be further enhanced.
                                  </p>
            <button type="button" className="btn btn-secondary">Contact Us </button>
          </div>
    </div>
</div>
</div>
         
      </div>
    </>
  )
}

export default Card