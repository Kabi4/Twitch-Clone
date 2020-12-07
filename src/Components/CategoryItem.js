import React from 'react';
import './CategoryItem.css';
const CategoryItem = ({ src, title }) => {
    return (
        <div style={{ backgroundImage: `URL(${src})` }} className="categoryItem">
            <h2>{title}</h2>
        </div>
    );
};

export default CategoryItem;
