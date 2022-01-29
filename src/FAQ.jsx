import React, { useState } from 'react'
function FAQ({ question }) {
  const [state, setstate] = useState(true)
  function changeView() {
    console.log("change view function have been clicked");
    //setstate(prev=> prev= !prev);
    setstate(!state)
  }
  console.count(question)
  return (
    <div className="faq-question">
      <div className="question-body">
        <h3 id={question.class}> <img src="./photos/bluebox.png" className='bluebox' />{question.question}</h3>
        <p onClick={changeView}>{state ? <i class={"fas fa-chevron-right"}></i> : <i class="fas fa-chevron-up" style={{ color: "#0189DF" }}></i>}</p>
      </div>
      <p className={state ? "hidePtag" : "showPtag"}>{question.answer}</p>
    </div>
  )
}
export default FAQ
