import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [applied, setApplied] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
            setJob(response.data);
            setApplied(response.data.applied);
        };
        fetchJob();
    }, [id]);

    const handleApply = async () => {
        await axios.post(`http://localhost:5000/api/jobs/${id}/apply`);
        setApplied(true);
    };

    return (
        <div className="container mt-5">
            {job ? (
                <div className="card border-0 shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <img 
                        src={job.imageUrl} 
                        className="card-img-top" 
                        alt={job.title} 
                        style={{ 
                            height: '300px', 
                            objectFit: 'cover' 
                        }} 
                    />
                    <div className="card-body">
                        <h2 
                            className="card-title" 
                            style={{ 
                                fontWeight: 'bold', 
                                fontSize: '2rem', 
                                color: '#2c3e50' 
                            }}
                        >
                            {job.title}
                        </h2>
                        <p 
                            className="card-text" 
                            style={{ 
                                fontSize: '1.1rem', 
                                lineHeight: '1.6', 
                                color: '#7f8c8d' 
                            }}
                        >
                            {job.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button 
                                className="btn btn-primary" 
                                onClick={handleApply} 
                                disabled={applied}
                                style={{
                                    backgroundColor: applied ? '#bdc3c7' : '#3498db', 
                                    border: 'none', 
                                    padding: '10px 20px',
                                    transition: 'background-color 0.3s',
                                    cursor: applied ? 'not-allowed' : 'pointer',
                                    pointerEvents: applied ? 'none' : 'auto'
                                }}
                                onMouseEnter={(e) => {
                                    if (!applied) e.target.style.backgroundColor = '#2980b9';
                                }}
                                onMouseLeave={(e) => {
                                    if (!applied) e.target.style.backgroundColor = '#3498db';
                                }}
                            >
                                {applied ? 'You have applied' : 'Apply'}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-5">
                    <p className="text-muted" style={{ fontSize: '1.2rem' }}>Loading job details...</p>
                </div>
            )}
        </div>
    );
}

export default JobDetails;
