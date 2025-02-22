"use client"
import React, { useState } from 'react';

function AddInstrumentForm() {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        info: '',
        status: '',
        charge: '',
        commercial_charge: '',
        academic_charge: '',
        application: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/addinstruments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to add instrument');
            }
            setSuccess(true);
            setError(null);
        } catch (error) {
            console.error('Error adding instrument:', error);
            setError('Failed to add instrument');
            setSuccess(false);
        }
    };

    return (
        <div className="border rounded-md p-8 shadow-md mb-6 flex flex-col">
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Instrument</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border rounded p-2" required />
                    <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border rounded p-2" required />
                    <input type="text" name="info" placeholder="Info" value={formData.info} onChange={handleChange} className="border rounded p-2" required />
                    <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} className="border rounded p-2" required />
                    <input type="number" name="charge" placeholder="Charge" value={formData.charge} onChange={handleChange} className="border rounded p-2" />
                    <input type="number" name="commercial_charge" placeholder="Commercial Charge" value={formData.commercial_charge} onChange={handleChange} className="border rounded p-2" />
                    <input type="number" name="academic_charge" placeholder="Academic Charge" value={formData.academic_charge} onChange={handleChange} className="border rounded p-2" />
                    <textarea name="application" placeholder="Application" value={formData.application} onChange={handleChange} className="border rounded p-2" />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Instrument added successfully!</p>}
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Instrument</button>
            </form>
        </div>
        </div>
    );
}

export default AddInstrumentForm;
