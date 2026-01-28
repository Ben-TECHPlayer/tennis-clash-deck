import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Données des slides
    const slides = [
        // {
        //     id: 1,
        //     type: "kyrgios",
        //     title: "KYRGIOS IS BACK!!!",
        //     subtitle: "GO TO PLAY WITH HIM!!!",
        //     cta: "Let's go!!!",
        //     link: "/card/players/legends/database/Kyrgios",
        //     bgClass: "bg-blue"
        // },
        {
            id: 1,
            type: "season-trends",
            title: "LUNAR NEW YEAR",
            subtitle: "JANUARY 26-FEBRUARY 9",
        //     cta: "Attend in tournament",
            // link: "/games",
            bgClass: "bg-dark"
        },
        {
            id: 2,
            type: "grand-tour",
            title: "AUSTRALIAN TOUR",
            subtitle: "DECEMBER 29-FEBRUARY 9",
            link: "/games",
            cta: "Go to play!!!",
            bgClass: "bg-dark",
        },
        {
            id: 3,
            type: "tournament",
            title: "AUSTRALIAN OPEN",
            subtitle: "JANUARY 29-FEBRUARY 2",
            link: "/games",
            cta: "Last chance for us to win this AO tournament!",
            bgClass: "bg-dark",
        },
        {
            id: 3,
            type: "legends",
            title: "LEGENDS ARE HERE!!!",
            subtitle: "GO TO MEET OSAKA, KYRGIOS, AND MORE...",
            cta: "Go to Card Database",
            link: "/card",
            bgClass: "bg-white"
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
                        
                        
                        {/* 3. SLIDE GRAND TOUR */}
                        {slide.type === "season-trends" && (
                            <div className="slide-content season-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/new-year-lunar.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                {/* <div className="ao-logo-big">AO</div> */}
                                <h1>{slide.title}</h1>
                                {/* <div className="char-showcase">
                                    <img src={`${process.env.PUBLIC_URL}/assets/new-year-lunar.jpg`} alt="Kyrgios" className="big-char" onError={(e) => e.target.style.display='none'}/>
                                </div> */}
                                <div className="date-badge">📅 December 29-February 9</div>
                                {/* <Link to={slide.link} className="btn-slider accent">{slide.cta}</Link> */}
                            </div>
                        )}
                        
                        {/* 3. SLIDE GRAND TOUR */}
                        {slide.type === "grand-tour" && (
                            <div className="slide-content tour-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/ao-open.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <div className="ao-logo-big">AO</div>
                                <h1>{slide.title}</h1>
                                <div className="date-badge">📅 December 29-February 9</div>
                                <Link to={slide.link} className="btn-slider accent">{slide.cta}</Link>
                            </div>
                        )}

                        {slide.type === "tournament" && (
                            <div className="slide-content tour-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/ao-open.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <div className="ao-logo-big">AO</div>
                                <h1>{slide.title}</h1>
                                <div className="date-badge">📅 January 29-February 2</div>
                                <Link to={slide.link} className="btn-slider accent">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 2. SLIDE LEGENDS */}
                        {slide.type === "legends" && (
                            <div className="slide-content legends-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/legends.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <h1>{slide.title}</h1>
                                <div className="cards-row">
                                    {/* On affiche quelques cartes miniatures */}
                                    </div>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn-slider secondary">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 4. SLIDE CHAMPIONS */}
                        {slide.type === "champions" && (
                            <div className="slide-content champions-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/cover.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
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
                <p>Welcome to Tennis Clash!</p>
            </div>
        </main>
    );
}

export default Home;