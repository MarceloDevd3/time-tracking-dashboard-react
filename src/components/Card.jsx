import React from 'react'

import Point from "./profileImg/icon-ellipsis.svg"
export default function Card(props) {

   
    return (
       <article className={props.name} >
         <div className='limite'>
         <img src={props.backBg}  alt="background" className='bg'/>
         </div>
          <section className='subCard'>
             <div className='row row1'>
                <h2 className='row--title'>{props.title}</h2>
                <button><img src={Point} alt="ellipsis"/></button>
             </div>
             <div className='row row2'>
             <h3 className='hours'>{props.data}hrs</h3>
             <p className='weeks-hours'> {props.week}hrs</p>
             </div>
          </section>
        
       </article>
    );
}