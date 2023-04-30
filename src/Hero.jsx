import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

export default function Hero() {
    return(
        <section className='Heros'>
            <div className='HerosImg-Con'>
                <img className="HerosImg"src="./images/Group 77.png"></img>
            </div>
            <h2 className='Heros--Head'>Online Experiences</h2>
            <p className='Heros--para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}