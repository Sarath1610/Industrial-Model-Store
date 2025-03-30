import React from 'react';

function VersionBadge({ status }) {
    let badgeClass = 'version-badge';
    if (status === 'stable') {
        badgeClass += ' stable';
    } else if (status === 'experimental') {
        badgeClass += ' experimental';
    }

    return <span className={badgeClass}>{status}</span>;
}

export default VersionBadge;