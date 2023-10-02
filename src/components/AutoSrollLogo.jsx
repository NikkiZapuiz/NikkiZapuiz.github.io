import React, { useEffect, useRef } from 'react';
import '/src/AutoScrollLogo.css';

function AutoScrollLogo() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        const scrollInterval = setInterval(() => {
            container.scrollLeft -= 1; 
            if (container.scrollLeft <= 0) {
                clearInterval(scrollInterval); 
            }
        },);

        return () => {
            clearInterval(scrollInterval); 
        };
    }, []);

    return (
        <div className="auto-scroll-logo-container" ref={containerRef} style={{ border: "none", overflow: "hidden" }}>
            <div className="auto-scroll-logo">
                <img src="/html5.png" alt="HTML5" />
                <img src="/css3.png" alt="CSS3" />
                <img src="/js.png" alt="JavaScript" />
                <img src="/php.png" alt="PHP" />
                <img src="/react.png" alt="React" />
                <img src="/laravel.png" alt="Laravel" />
                <img src="/mysql.png" alt="MySQL" />
                <img src="/AWS.png" alt="AWS" />
                <img src="/Bootstrap.png" alt="Bootstrap" />
            </div>
        </div>
    );
}

export default AutoScrollLogo;
