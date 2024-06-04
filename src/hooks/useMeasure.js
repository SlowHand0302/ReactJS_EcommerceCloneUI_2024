import { useState, useRef, useLayoutEffect } from 'react';

const useMeasure = (refName = 'ref') => {
    const ref = useRef();
    const [bounds, setBounds] = useState({});

    useLayoutEffect(() => {
        const measure = () => {
            window.requestAnimationFrame(() => {
                if (ref.current) {
                    const newBounds = ref.current.getBoundingClientRect();
                    setBounds(newBounds);
                }
            });
        };

        measure();

        window.addEventListener('resize', measure);
        return () => {
            window.removeEventListener('resize', measure);
        };
    }, []);
    const refObject = { [refName]: ref };

    return [refObject, bounds];
};

export default useMeasure;
