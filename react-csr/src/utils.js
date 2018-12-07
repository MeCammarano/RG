import React from 'react';

export const getData = async (reps) => {
    const promises = [];
    for (let i = 0; i < reps; i++)
        promises.push(await fetch('http://localhost:3001/data.json').then(data => data.json()))
    return Promise.all(promises);
}

export const getTemplate = (data) => {
    const divStyle = {
        textAlign: 'center'
    }
    if (data)
        return (
            <div style={divStyle}>
                <h2>List and Replace</h2>
                <h2>Size: {data ? data.length * data[0].length : null}</h2>
                <ol>
                    {data.map(x => x.map((user, i) => <li key={'user-' + i}>{user.name} ({user.email})</li>))}
                </ol>
            </div>
        )
    return null;
}