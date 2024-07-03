import React from 'react'
import profile from "./profileImg/image-jeremy.png";

export default function MainCard(props) {
    return (
      <article className='Control--card'>
        <section className='profile--zone'>
          <div>
          <img src={profile} alt="profile--photo"/>
          </div>
          <div className='center'>
          <h1>Report for </h1>
          <span>Jeremy Robson</span>
          </div>
        </section>
        <div className='controll-zone'>
          <button onClick={props.handleDailyClick}>Daily</button>
          <button onClick={props.handleWeeklyClick} >Weekly</button>
          <button onClick={props.handleMonthlyClick} >Monthly</button>
        </div>
      </article>
    )
}