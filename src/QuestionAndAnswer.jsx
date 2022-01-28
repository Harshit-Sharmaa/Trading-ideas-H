import React from 'react'
import FAQ from './FAQ'
//import './style.css';
function QuestionAndAnswer() {

  let faQArrays = [
    {
      question: "Who can take this course?",
      answer: "This course is designed for stock market newbies, beginners and experts alike. We will cover all the concepts, from basics to advanced, required for successfully implementing the winning framework."
    },
    {
      question: "Do I have to attend all of the live sessions in real-time?",
      answer: "It's okay if you have to miss a workshop or two. We record every live workshop and make it available for you to replay, at your convenience. With that said, we strongly recommend you make time for them so you can ask questions directly to Jaspreet and join productive breakout discussions. "
    },
    {
      question: "What is the bootcamp fee?",
      answer: "The fee of bootcamp is Rs. 10000 inclusive of taxes. Once you enrol in this course, you get unlimited access to all the class recordings of the bootcamp. "
    },
    {
      question: "Will I be given buy and sell recommendations?",
      answer: "No. We are not a SEBI registered equity advisor and hence we will only be teaching you how to do profitable swing trading."
    },
  ]

  return (
    <section className="faq-body" id="faq">
      <h2 className="faq-heading">Common Questions</h2>
      {/* {faQArrays.map((question,i)=> <FAQ question={question} key={i}/>)} */}
      <FAQ question={faQArrays[0]} />
      <FAQ question={faQArrays[1]} />
      <FAQ question={faQArrays[2]} />
      <FAQ question={faQArrays[3]} />

    </section>
  )
}

export default QuestionAndAnswer;
