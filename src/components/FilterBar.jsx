import React from 'react';
import './FilterBar.css';

function FilterBar({
                       searchTerm,
                       onSearchChange,
                       tagFilter,
                       onTagChange,
                   }) {

    // Define your tags
    const tags = [
        'robot',
        'arm',
        'industrial',
        'automation',
        'cobot',
        'cnc',
        'milling',
        'cutting',
        'laser cutting',
        'metal',
        'additive manufacturing',
        'forming',
        'plc',
        'conveyor',
        'agv',
        'material transport',
        'gateway',
        'electric motor',
        'pump',
        'simulation',
        'digital twin',
        'predictive maintenance',
        'analytics',
        'inspection',
        'machine vision',
        'motor',
    ];


    return (
        <div className="filter-bar">

            <h3>Tags</h3>

            <input
                type="text"
                placeholder="Search by tags"
                value={searchTerm}
                onChange={onSearchChange}
            />

            <div className="tag-filters">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={tagFilter === tag ? 'active' : ''}
                        onClick={() => onTagChange(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterBar;