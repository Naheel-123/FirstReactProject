import React from 'react'
import '../../App.css';

export default function Video() {
  return (
    <div>
        <div className='darklayout'></div>
        <video width="1500" height="700" autoPlay muted loop> 
            <source src="https://hydrodefrost.com/wp-content/uploads/2023/07/pexels-chris-flaten-6159395-1080p.mp4?fbclid=IwAR2fgPZp7NjCl1zomtY_5rFjr-RLhSpktx1YM_CO0pXVET4l9ofVSrd3kd0" type="video/mp4"/>
        </video>
        <h1 className='firstheading'>Say BYE To Frost Covered</h1><h1 className='secondheading'> WindShields</h1>
        <p className='firstparagraph'>And Hello To A Safer Driving Experience!</p>
        <button className='secondbutton'>Shop Now</button>
        <img className='firstimage' src='https://i0.wp.com/hydrodefrost.com/wp-content/uploads/2023/08/benifite.png?resize=1080%2C55&ssl=1'></img>
    </div>
  )
}
