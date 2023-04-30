import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

export default function Card(props) {
  let badgeTest;
  if (props.item.openSpots === 0) {
    badgeTest = "SOLD OUT"
  } else if (props.item.location === 'Online') {
    badgeTest == "Online"
  }

  return (
    <section>

        <div class="Card">
            { badgeTest && <div className='Card--badge'>{badgeTest}</div>}
            <img className='Card--img' src={`../images/${props.item.coverImg}`}></img>

            <div>
                <div className='Card--stats'>
                    <img className="Star" src="../images/Star 1.png"></img>
                    <p><strong>{props.item.stats.rating}</strong>  ({props.item.stats.reviewCount}) •   </p>
                    <p className="gray">{props.item.location}</p>
                </div>

                <p className='Card--title'>{props.item.title}</p>
                <p className='Card--price'><strong>{props.item.price}</strong> / person</p>

            </div>
        </div>
    </section>
  )
}