import React from "react";
import CountUp from "react-countup";

const Section2 = () => {
    return (
        <div className="section2">
            <div className="students">
                <h1><CountUp end={1000} duration={5} suffix="+" /></h1>
                <h2>Students</h2>
            </div>
            <div className="hours">
                <h1><CountUp end={500} duration={5} suffix="+" /></h1>
                <h2>Hours of classes</h2>
            </div>
            <div className="rating">
                <h1><CountUp end={10} duration={5} suffix="+" /></h1>
                <h2>Batches</h2>
            </div>
        </div>
    )
}

export default Section2;