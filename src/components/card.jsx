import React from 'react'
import fuji from '../assets/mount-fuji.jpg'
import Landmark from '../assets/landmark-icon.svg'

export default function card(props) {
    return (
        <div className='card'>
            <img src={props.imageUrl} className="card--img" alt="mount-fuji" />
            <div className='card--details'>
                <div className='card--header'>
                    <img src={Landmark} alt="" />
                    <span className='card--country'>{props.location} •</span>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"><span className='card--gmaps'>View on Google Maps</span></a>
                </div>
                <p className='card--title'>{props.title}</p>
                <p className='card--date'>{props.startDate} - {props.endDate}</p>
                <p className='card--desc'>{props.description}</p>
            </div>
        </div>

    )

}