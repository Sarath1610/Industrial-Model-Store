import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockModels from '../assets/mockModels.json';
import VersionBadge from '../components/VersionBadge';
import './ModelDetailPage.css';

function ModelDetailPage() {
    const { id } = useParams();
    const [model, setModel] = useState(null);

    useEffect(() => {
        // In a real app, you'd fetch data from an API using the 'id'
        const foundModel = mockModels.find(model => model.id === parseInt(id));
        setModel(foundModel);
    }, [id]);

    if (!model) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-page-container">
            <div className="model-detail-page">
                <h1>{model.name}</h1>
                <p>{model.description}</p>

                <section>
                    <h2>Documentation</h2>
                    <a href={model.documentation} target="_blank" rel="noopener noreferrer">
                        {model.documentation}
                    </a>
                </section>

                <section>
                    <h2>Usage Examples</h2>
                    <ul>
                        {model.usageExamples.map((example, index) => (
                            <li key={index}>{example}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Versions</h2>
                    <div className="model-versions">
                        {model.versions.map(version => (
                            <div key={version.version} className="model-version">
                                {version.version}
                                <VersionBadge status={version.status}/>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ModelDetailPage;