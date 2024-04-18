import React, { useState, useEffect } from 'react';
export default function EstateDetails({ estate, onClose }) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={estate.image} alt={estate.estate_title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-xl font-bold mb-2">{estate.estate_title}</h2>
                    <p className="mb-4">{estate.description}</p>
                    <p><span className="font-bold">Status:</span> {estate.status}</p>
                    <p><span className="font-bold">Price:</span> {estate.price}</p>
                    <p><span className="font-bold">Area:</span> {estate.area}</p>
                    <p><span className="font-bold">Location:</span> {estate.location}</p>
                    <p><span className="font-bold">Facilities:</span> {estate.facilities.join(', ')}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
