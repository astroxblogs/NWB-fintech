import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
    text: string | string[];
    className?: string;
    delay?: number;
    typingSpeed?: number;
    deletingSpeed?: number;
    waitTime?: number;
    cursorClassName?: string;
}

export function TypingText({
    text,
    className = "",
    delay = 0,
    typingSpeed = 100,
    deletingSpeed = 50,
    waitTime = 2000,
    cursorClassName = "bg-indigo-600"
}: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    // Handle initial delay
    useEffect(() => {
        const timer = setTimeout(() => setStartTyping(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!startTyping) return;

        const textArray = Array.isArray(text) ? text : [text];
        const currentText = textArray[loopNum % textArray.length];

        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (displayedText.length < currentText.length) {
                    timer = setTimeout(() => {
                        setDisplayedText(currentText.slice(0, displayedText.length + 1));
                    }, typingSpeed);
                } else {
                    // Finished typing, wait before deleting
                    timer = setTimeout(() => {
                        setIsDeleting(true);
                    }, waitTime);
                }
            } else {
                // Deleting backward
                if (displayedText.length > 0) {
                    timer = setTimeout(() => {
                        setDisplayedText(currentText.slice(0, displayedText.length - 1));
                    }, deletingSpeed);
                } else {
                    // Finished deleting, restart
                    setIsDeleting(false);
                    setLoopNum(prev => prev + 1);
                    timer = setTimeout(() => {
                        // Loop continues
                    }, 500);
                }
            }
        };

        handleTyping();

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, startTyping, text, typingSpeed, deletingSpeed, waitTime, loopNum]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className={`inline-block ml-1 w-0.5 h-[1em] align-middle ${cursorClassName}`}
            />
        </span>
    );
}
