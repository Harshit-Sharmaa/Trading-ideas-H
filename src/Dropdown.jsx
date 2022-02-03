import React from "react";

const Dropdown = (props) => {
    const handleClick = () => {
        window.open("https://rzp.io/l/zoTEgKr");
    };

    return (
        <div className="dd">
            <a href="#overview" onClick={() => props.setOpen(false)}><h2>Overview</h2></a>
            <a href="#testimonials" onClick={() => props.setOpen(false)}><h2>Testimonials</h2></a>
            <a href="#syllabus" onClick={() => props.setOpen(false)}><h2>Syllabus</h2></a>
            <a href="#schedule" onClick={() => props.setOpen(false)}><h2>Schedule</h2></a>
            <a href="#faq" onClick={() => props.setOpen(false)}><h2>FAQ</h2></a>
            <a onClick={handleClick}><button>Enroll Now</button></a>
        </div>
    )


}
export default Dropdown;