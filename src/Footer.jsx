import React from "react";

const Footer = () => {
    const handleClick = () => {
        window.open("https://rzp.io/l/zoTEgKr");
    };
    return (
        <div className="footer">
            <div className="container">
                <h1>Learn price section to make consistent profits</h1>
                <a onClick={handleClick}>
                    <div>
                        <img src="./photos/enroll-button2.png" className="enrollButton2" />

                    </div>
                </a>
                <img src="./photos/line.png" className="line" />
                <h3>©2021 Trading ideas (IN), Inc. All Rights Reserved.</h3>
            </div>
        </div>
    )
}

export default Footer;
