import React, { useState, useEffect } from 'react';
import '/src/TypingAnimation.css';

function TypingAnimation() {
    const [text, setText] = useState('');
    const messages = ['<Dedicated />', '<Creative />', '<Passionate />', '<Self-motivated />', '<Team Player />', '<Front-end />', '<Back-end />', "<Let's bring your Website to life />"];

    useEffect(() => {
        let currentIndex = 0;
        let currentText = '';
        const typingSpeed = 100;

        const typeMessage = () => {
            if (currentIndex < messages.length) {
                if (currentText.length < messages[currentIndex].length) {
                    currentText += messages[currentIndex][currentText.length];
                    setText(currentText);
                    setTimeout(typeMessage, typingSpeed);
                } else {
                    setTimeout(eraseMessage, 1000);
                }
            } else {
                currentIndex = 0;
                currentText = '';
                setTimeout(typeMessage, typingSpeed);
            }
        };

        const eraseMessage = () => {
            if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                setText(currentText);
                setTimeout(eraseMessage, typingSpeed / 2);
            } else {
                currentIndex++;
                setTimeout(typeMessage, 500);
            }
        };

        const clearAllTimeouts = () => {
            clearTimeout();
        };

        typeMessage();

        return clearAllTimeouts;
    }, []);

    return (
        <div className="typing-animation">
            <p className='mt-2 text-center'>{text}</p>
        </div>
    )
}

export default TypingAnimation;
