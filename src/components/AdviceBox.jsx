import React from 'react'

export default function AdviceBox(props) {
  return (
    <div class="box">
      <div id="speech-bubble">
        <div id="advice">{props.advice.advice}</div>
      </div>
      <a href="" class="btn" onClick={props.getAdvice}>Click Me for Advice</a>
    </div>
  )
}
