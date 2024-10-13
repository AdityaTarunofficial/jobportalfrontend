import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminDashboard = () => {
    const [jobDetails, setJobDetails] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        type: '',
        imageUrl: ''
    });

    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails({ ...jobDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/jobs', jobDetails);
            console.log('Job added:', response.data);
            
            // Reset form
            setJobDetails({
                title: '',
                description: '',
                company: '',
                location: '',
                type: '',
                imageUrl: ''
            });
            
            // Set success message
            setSuccessMessage('Job added successfully!');

            // Redirect to home page after a short delay
            setTimeout(() => {
                navigate('/'); // Use navigate to go to the home page
            }, 2000); // Delay of 2 seconds for the message to be visible
            navigate('/');
        } catch (error) {
            console.error('Error adding job:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Add New Job</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>} {/* Display success message */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Job Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={jobDetails.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={jobDetails.description} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input type="text" className="form-control" id="company" name="company" value={jobDetails.company} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" name="location" value={jobDetails.location} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Job Type</label>
                    <input type="text" className="form-control" id="type" name="type" value={jobDetails.type} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={jobDetails.imageUrl} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Job</button>
            </form>
        </div>
    );
};

export default AdminDashboard;
