import React from 'react';

function FilterBar({ searchTerm, onSearchChange, categoryFilter, onCategoryChange }) {
    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={e => onSearchChange(e.target.value)}
            />

            <select value={categoryFilter} onChange={e => onCategoryChange(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Robotics">Robotics</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Automation">Automation</option>
                <option value="Machining">Machining</option>
                {/* Add more categories */}
            </select>
        </div>
    );
}

export default FilterBar;