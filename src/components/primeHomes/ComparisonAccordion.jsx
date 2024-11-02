import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ComparisonAccordion = ({ data, openIndex: parentOpenIndex, onToggle: parentToggle }) => {
    // Local state if not controlled by parent
    const [localOpenIndex, setLocalOpenIndex] = useState(null);
    
    const isOpen = (index) => {
        return parentOpenIndex !== undefined ? parentOpenIndex === index : localOpenIndex === index;
    };

    const handleToggle = (index) => {
        if (parentToggle) {
            parentToggle(index);
        } else {
            setLocalOpenIndex(localOpenIndex === index ? null : index);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-[#192738]">
            {data.map((item, index) => (
                <div key={index} className="border-b border-primary">
                    <button
                        onClick={() => handleToggle(index)}
                        className="w-full py-4 px-6 flex justify-between items-center bg-[#192738] text-white hover:bg-[#192738]/90 transition-all"
                    >
                        <span className="text-lg font-semibold">{item.heading}</span>
                        <FaChevronDown 
                            className={`
                                w-5 h-5 transition-transform duration-300
                                ${isOpen(index) ? 'rotate-180' : ''}
                            `}
                        />
                    </button>

                    <div
                        className={`
                            overflow-hidden transition-all duration-300
                            ${isOpen(index) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        <div className="p-6 bg-[#192738]/50">
                            <ul className="space-y-2">
                                {item.points.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="text-white flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComparisonAccordion;