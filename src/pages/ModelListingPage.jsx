import React, { useState, useEffect } from 'react';
import ModelCard from '../components/ModelCard';
import FilterBar from '../components/FilterBar';
import mockModels from '../assets/mockModels.json';
import IMAGES from '../images/IMAGES'
import './ModelListingPage.css';

function ModelListingPage() {
    const models = mockModels;
    const [searchTerm, setSearchTerm] = useState('');
    const [tagFilter, setTagFilter] = useState('');

    useEffect(() => {
        // Fetch data from API here (if applicable)
    }, []);

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleTagChange = (tag) => {
        // Single select for tags:
        if (tagFilter === tag) {
            setTagFilter(''); // Deselect if already selected
        } else {
            setTagFilter(tag); // Select the new tag
        }
    };

    const filteredModels = models.filter((model) => {
        const searchTextMatch = model.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const tagMatch =
            tagFilter === '' || tagFilter === 'All Tags' || model.tags.includes(tagFilter);

        return searchTextMatch && tagMatch;
    });

    return (
        <div className="model-listing-page">

            <header className="top-bar">
                <img src={IMAGES.image2} alt="logo"/>
                <h1>Industrial</h1>
            </header>

            <main className="main-content">
                <FilterBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                    tagFilter={tagFilter}
                    onTagChange={handleTagChange}
                />

                <div className="model-grid">
                    <h3>Models</h3>

                    {filteredModels.map((model) => (
                        <ModelCard key={model.id} model={model}/>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ModelListingPage;