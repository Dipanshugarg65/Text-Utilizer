import React from 'react'
import '../App.css';
import photo from '../Image/photo2.png'
export default function About(props) {

   
    let myStyle = {
      color: props.mode === "dark" ? "white" : "#042743",
      backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
      border: "1px solid",
      borderColor: props.mode === "dark" ? "White" : "black",
    };
    
    return (
      <div className="container">
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your text </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <h5>Here You Can analyze your text with simple way. </h5>
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or copy your text
                and even remove extra spaces very easily.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use </strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <h5>You no need to pay for this, it's free to use </h5>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible </strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <h5>Open in any browsers easily to perform </h5>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
          <div>
            <div className="logo">
              <div style={{ textAlign: "center" }} className="left">
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "30%",
                    border: "2px solid white",
                    marginTop: "100px",
                  }}
                  src={photo}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h5 align="center">This text-Utilizer developed by--</h5>
              <h3 align="center">
                {" "}
                <i>Deepanshu garg</i>
              </h3>
              <h3 align="center">
                {" "}
                <i>Full stack Developer </i>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
}
