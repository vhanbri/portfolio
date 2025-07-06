import React from 'react'

const Information = () => {
  return (
    <div className="about__stats">
       <div className="about__stat">
          <div className="about__stat-number">2+</div>
          <div className="about__stat-label">Years Experience</div>
          <div className="about__stat-icon">
            <i className="uil uil-award"></i>
          </div>
      </div>

      <div className="about__stat">
          <div className="about__stat-number">15+</div>
          <div className="about__stat-label">Projects Completed</div>
          <div className="about__stat-icon">
            <i className="uil uil-briefcase-alt"></i>
          </div>
      </div>

      <div className="about__stat">
          <div className="about__stat-number">24/7</div>
          <div className="about__stat-label">Support Available</div>
          <div className="about__stat-icon">
            <i className="uil uil-headphones"></i>
          </div>
      </div>

      <div className="about__stat">
          <div className="about__stat-number">100%</div>
          <div className="about__stat-label">Client Satisfaction</div>
          <div className="about__stat-icon">
            <i className="uil uil-smile"></i>
          </div>
      </div>
    </div>
  )
}

export default Information
