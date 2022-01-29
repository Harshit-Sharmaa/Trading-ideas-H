import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="head">
            <h1>Trading Ideas</h1>
            <div className="burger">
                <p onClick={() => { setOpen(!open) }}>{open ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}</p>
            </div>
            {open && <Dropdown setOpen={setOpen} />}
            <div className="navs">
                <a href="#overview" onClick={() => setOpen(false)}><h2>Overview</h2></a>
                <a href="#testimonials"><h2>Testimonials</h2></a>
                <a href="#syllabus"><h2>Syllabus</h2></a>
                <a href="#schedule"><h2>Schedule</h2></a>
                <a href="#faq"><h2>FAQ</h2></a>
                <a href="https://pages.razorpay.com/pl_Ip5FrTNNGxXLGe/view"><button>Enroll Now</button></a>
            </div>
        </div>
    )
}

export default Header;
