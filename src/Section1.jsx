import React from "react";

const Section1 = () => {
    return (
        <div className="section1">
            <div className="enroll">
                <h1>Master the 15 Minutes
                    Swing Trading system</h1>
                <h3 className="first">Join the <b>ultimate Swing Trading Bootcamp</b> with </h3>
                <h3 style={{ fontWeight: "bold", color: "#0189DF", fontSize: "25px", lineHeight: "0.5rem" }}>Jaspreet Singh</h3>
                <h3 style={{ fontWeight: "bold" }}>(IIT Alumnus and Full Time Swing Trader).</h3>
                <h3>Master the art and science of making consistent profits by only spending 15 minutes daily.</h3>
                <div>
                    <a href="https://rzp.io/l/zoTEgKr">
                        <img src="./photos/enrollbutton1.png" className="enrollbutton1" />
                    </a>
                </div>
                <h3 style={{ lineHeight: "0rem", fontSize: "13px", marginTop: "1.3rem" }}>Batch starts From</h3>
                <h3 style={{ lineHeight: "1rem" }}><b>20 Feb 2022 - 28 Feb 2022</b></h3>
            </div>
            <img src="./photos/phone.png" className="phonesilver" />
        </div>
    )
}

export default Section1;