import React from 'react';
import GamepadController from '../GamepadController';
function ControllerTool() {
    return (
        <>
            <div style={{ color: '#e6e8db' }}>
                <h1>Willkommen bei GameTools!</h1>
                <p>Dies ist die Controller Tool.</p>
            </div>
            <GamepadController />
        </>
    );
}

export default ControllerTool;