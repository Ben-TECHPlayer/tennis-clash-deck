import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Préparer les slides
    const slides = [
        {
            id: 1,
            type: "season-trends",
            title: "BUBLIK SEASON",
            subtitle: "MARCH 28-APRIL 20",
            bgClass: "bg-season"
        },
        {
            id: 2,
            type: "grand-tour",
            title: "LEGENDS OPEN",
            subtitle: "APRIL 13-MAY 11",
            link: "/games",
            cta: "Go to play!!!",
            bgClass: "bg-tour",
        },
        {
            id: 3,
            type: "new-legend-trends",
            title: "BUBLIK IS HERE!!!",,
            bgClass: "bg-new-legend"
        },
        {
            id: 4,
            type: "tournament",
            title: "INTERNAZIONALI BNL D'ITALIA!",
            subtitle: "APRIL 16-21",
            cta: "Win this tournament and go to ESports Tournament Roma Open in May",
            link: "/games",
            bgClass: "bg-tournament"
        },
        {
            id: 5,
            type: "legends",
            title: "LEGENDS ARE HERE!!!",
            subtitle: "GO TO MEET OSAKA, KYRGIOS, AND MORE...",
            cta: "Go to Card Database",
            link: "/card",
            bgClass: "bg-legends"
        },
        {
            id: 6,
            type: "champions",
            title: "The champions are here!!!",
            subtitle: "GO TO PLAY ",
            cta: "Go to it!!!",
            link: "/card",
            bgClass: "bg-champions"
        },
    ];

    // Mettre en place le chargement automatique du slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // 5 secondes
        return () => clearInterval(timer);
    }, [slides.length]);

    // Donner la possibilité aux utilisateurs de naviguer manuellement
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
                        
                        {/* 1. SLIDE SEASON TRENDS */}
                        {slide.type === "season-trends" && (
                            <div className="slide-content season-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bublik.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <h1>{slide.title}</h1>
                                <div className="date-badge">📅 March 27-April 20</div>
                            </div>
                        )}
                        
                        {/* 2. SLIDE GRAND TOUR */}
                        {slide.type === "grand-tour" && (
                            <div className="slide-content tour-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/legends-open.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <h1>{slide.title}</h1>
                                <div className="date-badge">📅 April 13-May 11</div>
                                <Link to={slide.link} className="btn-slider accent">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 3. SLIDE NEW LEGENDS */}
                        {slide.type === "legends" && (
                            <div className="slide-content legends-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bublik.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn-slider secondary">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 4. SLIDE TOURNAMENT */}
                        {slide.type === "tournament" && (
                            <div className="slide-content tour-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/roma-tournament.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <h1>{slide.title}</h1>
                                <div className="date-badge">📅 April 16-21</div>
                                <Link to={slide.link} className="btn-slider accent">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 5. SLIDE LEGENDS */}
                        {slide.type === "legends" && (
                            <div className="slide-content legends-layout"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/legends.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn-slider secondary">{slide.cta}</Link>
                            </div>
                        )}

                        {/* 6. SLIDE CHAMPIONS */}
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

                <button className="arrow right" onClick={nextSlide}>❯</button>

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

            <div className="quick-access">
                <p>Welcome to Tennis Clash!</p>
            </div>
        </main>
    );
}

export default Home;
