import React, { useState } from 'react'
import './projects.css'
import TinaImage from '../../assets/tina_png.png'
import TeknoplatImage from '../../assets/teknoplat.png'
import AllianceImage from '../../assets/alliance.png'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Your actual projects - easy to add more projects here
  const projects = [
    {
      id: 1,
      title: "TINA AI Chatbot",
      description: "An intelligent AI-powered chatbot designed to assist with school-related inquiries. Features natural language processing, 24/7 availability, and accurate information delivery for students.",
      image: TinaImage,
      technologies: ["React", "Node.js", "OpenAI API", "Natural Language Processing"],
      liveLink: "https://tina-2-0.vercel.app/",
      category: "AI Application"
    },
    {
      id: 2,
      title: "TeknoPlat",
      description: "A comprehensive video conference application designed for entrepreneurs to pitch their ideas and receive real-time validation. Features intelligent scoring algorithms that evaluate pitch authenticity, interactive live streaming capabilities, and collaborative feedback systems to help entrepreneurs refine their business proposals.",
      image: TeknoplatImage,
      technologies: ["React", "Redux", "Django", "100ms Live API"],
      liveLink: "https://github.com/christian-anunciado/TeknoPlat",
      category: "Business Platform"
    },
    {
      id: 3,
      title: "Alliance Subscription Monitoring System",
      description: "A comprehensive subscription monitoring dashboard for Alliance that tracks user subscriptions, analytics, and provides real-time insights into subscription trends and user behavior.",
      image: AllianceImage,
      technologies: ["React", "Chart.js", "Dashboard Analytics", "CSS3"],
      //githubLink: "https://github.com/yourusername/alliance-subscription-monitor",
      liveLink: "https://github.com/vhanbri/Alliance_Subscription_Monitoring",
      category: "Dashboard"
    }
  ]

  // Dynamic projects per slide based on screen size and number of projects
  const getProjectsPerSlide = () => {
    if (window.innerWidth <= 768) return 1 // Mobile: 1 project per slide
    if (window.innerWidth <= 1024) return 2 // Tablet: 2 projects per slide
    return Math.min(3, projects.length) // Desktop: up to 3 projects per slide, but not more than available
  }

  const [projectsPerSlide] = useState(getProjectsPerSlide())
  const totalSlides = Math.ceil(projects.length / projectsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Work</span>

      <div className="projects__container container">
        <div className="projects__carousel">
          <div 
            className="projects__wrapper"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="projects__slide">
                <div className="projects__grid">
                  {projects.slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide).map((project) => (
                    <div key={project.id} className="projects__card">
                      <div className="projects__image-container">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className={`projects__image ${project.id === 3 ? 'projects__image--alliance' : ''}`} 
                        />
                        <div className="projects__overlay">
                          <div className="projects__actions">
                            {project.githubLink && (
                              <a href={project.githubLink} className="projects__link" target="_blank" rel="noopener noreferrer">
                                <i className="uil uil-github-alt"></i>
                              </a>
                            )}
                            <a href={project.liveLink} className="projects__link" target="_blank" rel="noopener noreferrer">
                              <i className="uil uil-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="projects__content">
                        <div className="projects__category">{project.category}</div>
                        <h3 className="projects__title">{project.title}</h3>
                        <p className="projects__description">{project.description}</p>
                        
                        <div className="projects__technologies">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="projects__tech">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Only show navigation if there are multiple slides */}
        {totalSlides > 1 && (
          <>
            <div className="projects__navigation">
              <button className="projects__nav-btn projects__nav-prev" onClick={prevSlide}>
                <i className="uil uil-angle-left"></i>
              </button>
              <button className="projects__nav-btn projects__nav-next" onClick={nextSlide}>
                <i className="uil uil-angle-right"></i>
              </button>
            </div>

            <div className="projects__indicators">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`projects__indicator ${currentSlide === index ? 'projects__indicator--active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects 