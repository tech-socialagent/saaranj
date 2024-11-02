'use client';

import { useEffect, useRef } from 'react';

const CustomMarquee = ({ children, speed = 50 }) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;
        const scroller = scrollerRef.current;
        
        if (!scrollContainer || !scroller) return;

        const scrollContent = Array.from(scroller.children);
        
        // Clone items for continuous scroll
        scrollContent.forEach(item => {
            const clone = item.cloneNode(true);
            scroller.appendChild(clone);
        });

        let scrollPos = 0;
        let animation;

        const scroll = () => {
            scrollPos += 1;
            scroller.style.transform = `translateX(${-scrollPos}px)`;

            if (scrollPos >= scroller.firstElementChild.offsetWidth * scrollContent.length) {
                scrollPos = 0;
            }

            animation = requestAnimationFrame(scroll);
        };

        scroll();

        return () => {
            if (animation) {
                cancelAnimationFrame(animation);
            }
        };
    }, [speed]);

    return (
        <div 
            ref={containerRef} 
            className="overflow-hidden whitespace-nowrap"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
            <div 
                ref={scrollerRef}
                className="inline-flex"
            >
                {children}
            </div>
        </div>
    );
};

export default CustomMarquee;