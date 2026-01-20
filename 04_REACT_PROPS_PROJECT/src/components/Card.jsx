import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div>
        <div className='card'>
        <div className='top'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0jFU_BZ7aZJasVjcDhoMmlQIGkgwx7i_9g&s" alt="aznlogo" />
        <button> <Bookmark /></button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
              <h3>$120/hour</h3>
              <p>Mumbai,India</p>
          </div>
            <button>View Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Card