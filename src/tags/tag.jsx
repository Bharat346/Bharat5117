import React from 'react';
import './tag.css';

const TagCard = ({ tags }) => {
    // Predefined array of attractive colors
    const attractiveColors = [
        '#FF5733', // Vibrant red-orange
        '#33FF57', // Bright green
        '#3357FF', // Bright blue
        '#F5A623', // Vivid orange
        '#9B59B6', // Soft purple
        '#E74C3C', // Rich red
        '#1ABC9C', // Fresh teal
        '#E67E22', // Bright orange
        '#F1C40F', // Sunny yellow
        '#2980B9', // Deep blue
    ];

    // Function to cycle through attractive colors
    const getColor = (index) => {
        return attractiveColors[index % attractiveColors.length];
    };

    return (
        <div className="tag-card">
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <span key={index} className="tag" style={{ backgroundColor: getColor(index) }}>
                        {tag.text}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TagCard;
