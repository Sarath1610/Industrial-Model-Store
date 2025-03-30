import React from 'react';
import { Link } from 'react-router-dom';
import './ModelCard.css'; // You can create a CSS file for this

function ModelCard({ model }) {
    return (
        <div className="model-card">
            <img src={model.imageUrl} alt={model.name} />
            <h2>{model.name}</h2>
            <p>{model.description}</p>
            <div className="model-tags">
                {model.tags.map(tag => (
                    <span key={tag} className="model-tag">
            {tag}
          </span>
                ))}
            </div>
            <Link to={`/models/${model.id}`}>View Details</Link>
        </div>
    );
}

export default ModelCard;