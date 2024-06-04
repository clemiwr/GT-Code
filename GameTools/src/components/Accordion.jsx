import React, { useState, useRef, useEffect } from 'react';
import '../style/Accordion.css'; // Stellen Sie sicher, dass der Pfad zur CSS-Datei korrekt ist

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const content = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setHeight(isOpen ? `${content.current.scrollHeight}px` : '0px');
    }, [isOpen]);

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h2>{title}</h2>
                <span className={`icon ${isOpen ? 'open' : ''}`}>&#x25B2;</span>
            </div>
            <div 
                ref={content} 
                className="accordion-content" 
                style={{ maxHeight: height }}
            >
                <div className="accordion-content-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Accordion;