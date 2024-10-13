import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('https://jobportalbackend-c2xp.onrender.com/api/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('You need to be logged in to apply for a job.');
      return;
    }

    await axios.post(`https://jobportalbackend-c2xp.onrender.com/api/jobs/${jobId}/apply`, { userId });
    alert('Applied successfully!');
    window.location.reload(); // Refresh to see updated applied status
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#2c3e50' }}>Explore Career Opportunities</h2>
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job._id}>
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <img src={job.imageUrl} className="card-img-top" alt={job.title} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: 'bold', color: '#34495e' }}>{job.title}</h5>
                <p className="card-text" style={{ color: '#7f8c8d' }}>{job.description}</p>
                <p className="card-text"><strong>Company:</strong> {job.company}</p>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <button 
                  className="btn btn-primary"
                  style={{ backgroundColor: '#3498db', border: 'none', padding: '10px 20px', transition: 'background-color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
                  onClick={() => handleApply(job._id)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
