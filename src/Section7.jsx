import React from "react";
import instagram from "./instagram.svg"
import telegram from "./telegram.svg.svg"

const Section7 = () => {
    return (
        <div className="section7">
            <div className="jaspreet">
                <img src="./photos/Jaspreet.png" />
            </div>
            <div className="info">
                <h2 style={{ color: "#0189DF", fontWeight: "normal" }}>Meet the instructor</h2>
                <h1>Jaspreet Singh</h1>
                <h2>IIT Alumni, Ex. Grofers, DineOut</h2>
                <h2>Full Time Swing Trader</h2>
                <div className="icons">
                    <a href="https://www.youtube.com/channel/UCe-ci2Ho4zH2Uh-2qNw5yuA"><i class="fab fa-youtube-square"></i></a>
                    <a href="https://www.facebook.com/people/Trading-ideas/100076782444610/"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/jaspreet_trades"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://t.me/jaspreettradingideas"><i class="fab fa-telegram-plane"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Section7;