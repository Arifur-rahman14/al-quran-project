import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card,  } from 'react-bootstrap';

const Sura = () => {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setTitle(data))
    }, [])

    return (
        <div>
            <h1>{title.length}</h1>
            <h2>Sura Name: {title.place}</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title.place}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{title.place}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            {
                title.map(titles => <li>{titles.titleAr}</li>)
            }
        </div>
    );
};

export default Sura;