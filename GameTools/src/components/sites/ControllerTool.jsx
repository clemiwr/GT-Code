import React from 'react';
import GamepadController from '../GamepadController';
import Accordion from '../Accordion'; // Stellen Sie sicher, dass der Pfad zur Accordion-Komponente korrekt ist
import '../../style/Controller.css';

function ControllerTool() {
    return (
        <div className="controller-tool">
            <h1 className="controller-title">Willkommen bei GameTools!</h1>
            <Accordion title="Beschreibung">
                <p className="controller-description">
                    Schließen Sie Ihren Gamecontroller an und erkunden Sie die vielfältigen Möglichkeiten unseres Tools. 
                    Auf der rechten unteren Seite sehen Sie eine interaktive SVG-Grafik, die Ihre Eingaben in Echtzeit visualisiert.
                    Jeder Tastendruck wird erkannt und die entsprechende Zone wird hervorgehoben, um Ihnen sofortiges Feedback zu geben.
                </p>
            </Accordion>
            <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
                <GamepadController />
            </div>
        </div>
    );
}

export default ControllerTool;
