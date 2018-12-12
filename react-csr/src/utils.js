import React from 'react';

export const getData = async (reps) => {
    const promises = [];
    for (let i = 0; i < reps; i++)
        promises.push(await fetch('data.json').then(data => data.json()))
    return Promise.all(promises);
}

export const divStyle = {
    textAlign: 'center'
}

export const getTemplate = (data) => {
    if (data)
        return (
            <div>
                <h2>Size: {data ? data.length * data[0].length : null}</h2>
                <ol>
                    {data.map(x => x.map((user, i) => <li key={'user-' + i}>{user.name} ({user.email})</li>))}
                </ol>
            </div>
        )
    return null;
}