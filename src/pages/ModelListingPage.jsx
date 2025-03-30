import React, { useState, useEffect } from 'react'; //remove useState
import ModelCard from '../components/ModelCard';
import FilterBar from '../components/FilterBar';
import mockModels from '../assets/mockModels.json';
// import './ModelListingPage.css'; // Create CSS for this page

function ModelListingPage() {
    // const [models, setModels] = useState(mockModels); remove this line
    const models = mockModels; //initialize models directly
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        // This is where you would fetch data from an API in a real application
        // For now, we're using mock data
    }, []);

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
    };

    const filteredModels = models.filter(model => {
        return (
            model.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (categoryFilter === '' || model.categories.includes(categoryFilter))
        );
    });

    return (
        <div className="model-listing-page">
            <h1>Industrial Model Store</h1>

            <FilterBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                categoryFilter={categoryFilter}
                onCategoryChange={handleCategoryChange}
            />

            <div className="model-grid">
                {filteredModels.map(model => (
                    <ModelCard key={model.id} model={model} />
                ))}
            </div>
        </div>
    );
}

export default ModelListingPage;