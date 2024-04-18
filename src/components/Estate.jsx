import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import EstateDetails from './EstateDetails'; 
import { AuthContext } from '../providers/AuthProvider'; 

export default function Estate() {
    const [estate, setEstate] = useState([]);
    const [selectedEstate, setSelectedEstate] = useState(null); 
    const { user } = useContext(AuthContext); 

    useEffect(() => {
        fetch('/house.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEstate(data); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleClick = (id) => {
        const selected = estate.find(item => item.id === id);
        setSelectedEstate(selected);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {selectedEstate ? (
                <EstateDetails estate={selectedEstate} onClose={() => setSelectedEstate(null)} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {estate.map(item => (
                        <div key={item.id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.image} alt={item.estate_title} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl font-bold mb-2">{item.estate_title}</h2>
                                <p className="mb-4">{item.description}</p>
                                <p><span className="font-bold">Status:</span> {item.status}</p>
                                <p><span className="font-bold">Price:</span> {item.price}</p>
                                <div className="card-actions mt-4">
                                   
                                    {user ? (
                                        <button className="btn btn-primary" onClick={() => handleClick(item.id)}>View Property</button>
                                    ) : (
                                        <Link to="/login" className="btn btn-sm">Login to View Property</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
