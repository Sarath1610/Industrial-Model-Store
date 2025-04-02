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
            tagFilter === '' || model.tags.includes(tagFilter);

        return searchTextMatch && tagMatch;
    });

    return (
        <div className="model-listing-page">

            <header className="top-bar">
                <img src={IMAGES.image2} alt="logo"/>
                <h1>Industrial Model Store</h1>
            </header>

            <main className="main-content">
                <FilterBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                    tagFilter={tagFilter}
                    onTagChange={handleTagChange}
                />

                <div className="model-grid">
                    <div className="model-search">
                        <h3>Models</h3>

                        <div className="search-bar">

                            <img src={IMAGES.image3} alt="img"/>

                            <input
                                type="text"
                                placeholder="Filter by name"
                                value={searchTerm}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                        </div>

                    </div>

                    {filteredModels.map((model) => (
                        <ModelCard key={model.id} model={model}/>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ModelListingPage;