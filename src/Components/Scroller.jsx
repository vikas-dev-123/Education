import React, { useState, useEffect, useRef } from 'react';
import { data } from './Data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Scroller = () => {
    const [startIndex, setStartIndex] = useState(0);
    const sliderRef = useRef(null);
    const visibleImages = 6;

    const slideLeft = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const slideRight = () => {
        if (startIndex < data.length - visibleImages) {
            setStartIndex(prevIndex => prevIndex + 1);
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            sliderRef.current.style.transform = `translateX(-${startIndex * (50 / visibleImages)}%)`;
        }
    }, [startIndex]);

    const isAtEnd = startIndex >= data.length - visibleImages;

    return (
        <div className="relative flex items-center overflow-hidden select-none">
            <MdChevronLeft 
                className={`cursor-pointer hover:opacity-100 mx-2 ${startIndex === 0 ? 'opacity-30' : 'opacity-100'}`} 
                onClick={slideLeft} 
                size={40} 
            />
            <div className="w-full overflow-hidden">
                <div 
                    ref={sliderRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ width: `${(data.length / visibleImages) * 100}%` }}
                >
                    {data.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex-shrink-0 relative"
                            style={{ width: `${100/ data.length}%` }}
                        >
                            <img
                                className="w-full h-[20vw] border rounded-md object-cover cursor-pointer hover:glow-effect duration-300 mx-2"
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 text-white p-2 m-2 rounded">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                {item.description && <p className="text-sm">{item.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MdChevronRight 
                className={`cursor-pointer hover:opacity-100 mx-2 ${isAtEnd ? 'opacity-30' : 'opacity-100'}`} 
                onClick={slideRight} 
                size={40} 
            />
        </div>
    );
};

export default Scroller;