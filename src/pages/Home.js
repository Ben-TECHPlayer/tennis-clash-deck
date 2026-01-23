import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Données des slides
    const slides = [
        {
            id: 1,
            type: "kyrgios",
            title: "KYRGIOS IS BACK!!!",
            subtitle: "GO TO PLAY WITH HIM!!!",
            cta: "Let's go!!!",
            link: "/card/players/legends/database/Kyrgios",
            bgClass: "bg-blue"
        },
        {
            id: 2,
            type: "legends",
            title: "LEGENDS ARE HERE!!!",
            subtitle: "GO TO MEET OSAKA, KYRGIOS, AND MORE...",
            cta: "Go to Card Database",
            link: "/card",
            bgClass: "bg-white"
        },
        {
            id: 3,
            type: "tournament",
            title: "AUSTRALIAN OPEN TOURNAMENT",
            subtitle: "JANUARY 22-26",
            cta: "Attend in tournament",
            link: "/games",
            bgClass: "bg-dark"
        },
        {
            id: 4,
            type: "champions",
            title: "The champions are here!!!",
            subtitle: "GO TO PLAY ",
            cta: "Go to it!!!",
            link: "/card",
            bgClass: "bg-champions"
        },
    ];

    // Changement automatique de slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // 5 secondes
        return () => clearInterval(timer);
    }, [slides.length]);

    // Navigation manuelle
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <main className="home-slider-container">
            
            {/* --- CARROUSEL --- */}
            <div className="carousel">
                
                {/* Flèche Gauche */}
                <button className="arrow left" onClick={prevSlide}>❮</button>

                {/* Slides */}
                {slides.map((slide, index) => (
                    <div 
                        className={`slide ${index === currentSlide ? 'active' : ''} ${slide.bgClass}`} 
                        key={slide.id}
                    >
                        {/* CONTENU SPÉCIFIQUE PAR TYPE DE SLIDE */}
                        
                        {/* 1. SLIDE KYRGIOS */}
                        {slide.type === "kyrgios" && (
                            <div className="slide-content kyrios-layout">
                                <div className="badge">KYRGIOS IS BACK!!!</div>
                                <h1>{slide.title}</h1>
                                <div className="char-showcase">
                                    <img src={`${process.env.PUBLIC_URL}/assets/kyrgios_full.png`} alt="Kyrgios" className="big-char" onError={(e) => e.target.style.display='none'}/>
                                </div>
                                <h2>{slide.subtitle}</h2>
                                <Link to={slide.link} className="btn-slider primary">{slide.cta}</Link>
                                {/* Déco de fond */}
                                <div className="circle c1"></div>
                                <div className="circle c2"></div>
                            </div>
                        )}

                        {/* 2. SLIDE LEGENDS */}
                        {slide.type === "legends" && (
                            <div className="slide-content legends-layout">
                                <h1>{slide.title}</h1>
                                <div className="cards-row">
                                    {/* On affiche quelques cartes miniatures */}
                                    <img src={`${process.env.PUBLIC_URL}/assets/osaka.svg`} alt="Card" className="mini-card tilt-left"/>
                                    <img src={`${process.env.PUBLIC_URL}/assets/osaka.svg`} alt="Card" className="mini-card center"/> {/* Remplace par Sabalenka si tu as */}
                                    <img src={`${process.env.PUBLIC_URL}/assets/osaka.svg`} alt="Card" className="mini-card tilt-right"/> {/* Remplace par Paul si tu as */}
                                </div>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn-slider secondary">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 3. SLIDE GRAND TOUR */}
                        {slide.type === "tournament" && (
                            <div className="slide-content tour-layout">
                                <div className="ao-logo-big">AO</div>
                                <h1>{slide.title}</h1>
                                <div className="date-badge">📅 January 22-26</div>
                                <Link to={slide.link} className="btn-slider accent">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 4. SLIDE CHAMPIONS */}
                        {slide.type === "champions" && (
                            <div className="slide-content champions-layout">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn-slider primary">{slide.cta}</Link>
                            </div>
                        )}
                    </div>
                ))}

                {/* Flèche Droite */}
                <button className="arrow right" onClick={nextSlide}>❯</button>

                {/* Points de navigation (Dots) */}
                <div className="dots-container">
                    {slides.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Section Bonus en dessous (optionnel) */}
            <div className="quick-access">
                <p>Bienvenue dans l'arène ultime de Tennis Clash !</p>
            </div>
        </main>
    );
}

export default Home;