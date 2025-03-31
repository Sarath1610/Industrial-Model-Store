import React from 'react';
import { Link } from 'react-router-dom';
import './ModelCard.css'; // You can create a CSS file for this

function ModelCard({ model }) {
    return (
        <Link to={`/models/${model.id}`} className="model-card">
            <img src={model.imageUrl} alt="img"/>
            <div className="text-part">
                <div className="title-desc">
                    <h2>{model.name}</h2>
                    <p>{model.description}</p>
                </div>
                <div className="model-tags">
                    {model.tags.map(tag => (
                        <span key={tag} className="model-tag">
            {tag}
          </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default ModelCard;