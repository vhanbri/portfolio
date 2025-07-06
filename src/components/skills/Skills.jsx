import React, { useState, useEffect } from 'react';
import "./skills.css";

const Skills = () => {
    const [animatedSkills, setAnimatedSkills] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    const skillsData = {
        frontend: {
            title: "Frontend Development",
            icon: "uil uil-brackets-curly",
            skills: [
                { name: "HTML", level: 95, icon: "uil uil-html5-alt" },
                { name: "CSS", level: 90, icon: "uil uil-css3-simple" },
                { name: "JavaScript", level: 85, icon: "uil uil-java-script" },
                { name: "React", level: 80, icon: "uil uil-react" },
                { name: "TypeScript", level: 75, icon: "uil uil-typescript" },
                { name: "Tailwind", level: 85, icon: "uil uil-wind" },
                { name: "Bootstrap", level: 80, icon: "uil uil-bootstrap" },
                { name: "Git", level: 85, icon: "uil uil-github-alt" }
            ]
        },
        backend: {
            title: "Backend Development",
            icon: "uil uil-server-network",
            skills: [
                { name: "Node.js", level: 88, icon: "uil uil-server" },
                { name: "PHP", level: 75, icon: "uil uil-php" },
                { name: "Python", level: 80, icon: "uil uil-python" },
                { name: "C#", level: 70, icon: "uil uil-c-plus-plus" },
                { name: "MySQL", level: 85, icon: "uil uil-database" },
                { name: "Firebase", level: 80, icon: "uil uil-fire" },
                { name: ".NET", level: 75, icon: "uil uil-apps" },
                { name: "C++", level: 70, icon: "uil uil-c-plus-plus" }
            ]
        },
        tools: {
            title: "Tools & Technologies",
            icon: "uil uil-tools",
            skills: [
                { name: "VS Code", level: 95, icon: "uil uil-code-branch" },
                { name: "Docker", level: 70, icon: "uil uil-docker" },
                { name: "AWS", level: 65, icon: "uil uil-cloud" },
                { name: "Figma", level: 80, icon: "uil uil-palette" },
                { name: "Webpack", level: 75, icon: "uil uil-web-grid" },
                { name: "REST APIs", level: 85, icon: "uil uil-exchange" },
                { name: "GraphQL", level: 65, icon: "uil uil-graph-bar" },
                { name: "MongoDB", level: 75, icon: "uil uil-database-alt" }
            ]
        }
    };

    useEffect(() => {
        // Trigger animation immediately on component mount
        const timer = setTimeout(() => {
            animateSkills();
        }, 500); // Small delay for better visual effect

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [isVisible]);

    const animateSkills = () => {
        const newAnimatedSkills = {};
        
        Object.keys(skillsData).forEach(category => {
            skillsData[category].skills.forEach(skill => {
                setTimeout(() => {
                    setAnimatedSkills(prev => ({
                        ...prev,
                        [skill.name]: skill.level
                    }));
                }, Math.random() * 1000);
            });
        });
    };

    const getSkillLevel = (skillName) => {
        // Find the actual skill level from skillsData
        for (const category of Object.values(skillsData)) {
            const skill = category.skills.find(s => s.name === skillName);
            if (skill) {
                return animatedSkills[skillName] || skill.level;
            }
        }
        return 0;
    };

    const getSkillLevelText = (level) => {
        if (level >= 90) return "Expert";
        if (level >= 80) return "Advanced";
        if (level >= 70) return "Intermediate";
        return "Beginner";
    };

    return (
        <section className="skills section" id="skills">
            <div className="skills__container container">
                <div className="skills__header">
                    <h2 className="section__title">Skills & Expertise</h2>
                    <p className="section__subtitle">Technologies I work with</p>
                </div>

                <div className="skills__content">
                    {Object.entries(skillsData).map(([category, data]) => (
                        <div key={category} className="skills__category">
                            <div className="skills__category-header">
                                <div className="skills__category-icon">
                                    <i className={data.icon}></i>
                                </div>
                                <h3 className="skills__category-title">{data.title}</h3>
                            </div>

                            <div className="skills__grid">
                                {data.skills.map((skill, index) => (
                                    <div 
                                        key={skill.name} 
                                        className="skills__item"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="skills__item-header">
                                            <div className="skills__item-info">
                                                <i className={skill.icon}></i>
                                                <span className="skills__name">{skill.name}</span>
                                            </div>
                                            <span className="skills__percentage">
                                                {getSkillLevel(skill.name)}%
                                            </span>
                                        </div>
                                        
                                        <div className="skills__bar">
                                            <div 
                                                className="skills__progress"
                                                style={{ width: `${getSkillLevel(skill.name)}%` }}
                                            ></div>
                                        </div>
                                        
                                        <span className="skills__level">
                                            {getSkillLevelText(skill.level)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills__stats">
                    <div className="skills__stat">
                        <div className="skills__stat-number">16+</div>
                        <div className="skills__stat-label">Technologies</div>
                    </div>
                    <div className="skills__stat">
                        <div className="skills__stat-number">2+</div>
                        <div className="skills__stat-label">Years Experience</div>
                    </div>
                    <div className="skills__stat">
                        <div className="skills__stat-number">15+</div>
                        <div className="skills__stat-label">Projects Built</div>
                    </div>
                    <div className="skills__stat">
                        <div className="skills__stat-number">100%</div>
                        <div className="skills__stat-label">Code Quality</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;