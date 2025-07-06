import React, {useState, useEffect} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [isVisible, setIsVisible] = useState(true);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const educationData = [
        {
            title: "Bachelor's Degree",
            subtitle: "Computer Science",
            institution: "Cebu Institute of Technology - University",
            date: "June 2019 - June 2023",
            description: "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.",
            skills: ["Programming", "Data Structures", "Algorithms", "Software Engineering"]
        },
        {
            title: "Web Development Certification",
            subtitle: "Full Stack Development",
            institution: "Online Learning Platform",
            date: "2022 - 2023",
            description: "Specialized training in modern web technologies including React, Node.js, and database management.",
            skills: ["React", "Node.js", "JavaScript", "Database Design"]
        },
        {
            title: "Secondary Education",
            subtitle: "Science & Technology Track",
            institution: "High School",
            date: "2015 - 2019",
            description: "Strong foundation in mathematics, sciences, and early programming concepts.",
            skills: ["Mathematics", "Physics", "Basic Programming", "Problem Solving"]
        }
    ];

    const experienceData = [
        {
            title: "Software Engineer I",
            subtitle: "Full-time Position",
            institution: "Confidential Company",
            date: "2023 - Present",
            description: "Designed and implemented new features to enhance the functionality and performance of document solutions products.Performed advanced debugging to identify and resolve software issues, ensuring optimal system performance.",
            skills: ["Java", "C++", "Team Collaboration", "Firmware Development"]
        },
        {
            title: "Backend Web Developer Intern",
            subtitle: "Internship Program",
            institution: "Sun Asterisk",
            date: "Jul 2022 - Aug 2022",
            description: "Gained hands-on experience in backend development, API design, and database management in a professional environment.",
            skills: ["Backend Development", "API Design", "Database Management", "Professional Skills"]
        },
        /*{
          title: "Freelance Developer",
            subtitle: "Various Projects",
            institution: "Independent",
            date: "2021 - 2023",
            description: "Worked on multiple client projects, developing custom web solutions and gaining real-world experience.",
            skills: ["Client Communication", "Project Management", "Full-stack Development", "Problem Solving"]
        }*/
    ];

    useEffect(() => {
        // Set content as visible immediately on component mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Very small delay to ensure component is rendered

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 } // Lower threshold for better mobile experience
        );

        const qualificationSection = document.querySelector('.qualification');
        if (qualificationSection) {
            observer.observe(qualificationSection);
        }

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    const currentData = toggleState === 1 ? educationData : experienceData;

    return (
        <section className="qualification section"> 
            <div className="qualification__container container">
                <div className="qualification__header">
                    <h2 className="section__title">My Journey</h2>
                    <p className="section__subtitle">Education & Professional Experience</p>
                </div>

                <div className="qualification__tabs">
                    <button
                        className={`qualification__button ${toggleState === 1 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(1)}
                    >  
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        <span>Education</span>
                    </button>

                    <button
                        className={`qualification__button ${toggleState === 2 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(2)}
                    > 
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        <span>Experience</span>
                    </button>
                </div>

                <div className="qualification__content">
                    <div className="qualification__timeline">
                        {currentData.map((item, index) => (
                            <div 
                                key={index} 
                                className={`qualification__item qualification__item--visible ${isVisible ? 'qualification__item--animate' : ''}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="qualification__timeline-marker">
                                    <div className="qualification__timeline-dot">
                                        <i className={toggleState === 1 ? "uil uil-graduation-cap" : "uil uil-briefcase-alt"}></i>
                                    </div>
                                    {index < currentData.length - 1 && (
                                        <div className="qualification__timeline-line"></div>
                                    )}
                                </div>
                                
                                <div className="qualification__card">
                                    <div className="qualification__card-header">
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <span className="qualification__badge">{item.subtitle}</span>
                                    </div>
                                    
                                    <div className="qualification__institution">
                                        <i className="uil uil-university"></i>
                                        <span>{item.institution}</span>
                                    </div>
                                    
                                    <div className="qualification__date">
                                        <i className="uil uil-calendar-alt"></i>
                                        <span>{item.date}</span>
                                    </div>
                                    
                                    <p className="qualification__description">
                                        {item.description}
                                    </p>
                                    
                                    <div className="qualification__skills">
                                        {item.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="qualification__skill">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="qualification__summary">
                    <div className="qualification__stat">
                        <div className="qualification__stat-number">4+</div>
                        <div className="qualification__stat-label">Years Learning</div>
                    </div>
                    <div className="qualification__stat">
                        <div className="qualification__stat-number">2+</div>
                        <div className="qualification__stat-label">Work Experience</div>
                    </div>
                    <div className="qualification__stat">
                        <div className="qualification__stat-number">10+</div>
                        <div className="qualification__stat-label">Technologies</div>
                    </div>
                    <div className="qualification__stat">
                        <div className="qualification__stat-number">100%</div>
                        <div className="qualification__stat-label">Commitment</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
