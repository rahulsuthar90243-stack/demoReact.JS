import React from 'react'



export const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src='{props.logo}'
            alt=""
          />
          <button>
            save<i class="ri-bookmark-line"></i>
          </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.daysLeft}</span></h3>
          <h3>{props.job}</h3>
          <div className="job-type">
            <h4 className="time">{props.tag1}</h4>
            <h4 className="time">{props.tag2}</h4>
          </div>
        </div>

        <div className="buttom">
          <div className="location">
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <div className="button">
            <button>Apply New</button>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Card;
