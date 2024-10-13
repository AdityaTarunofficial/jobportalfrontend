import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You need to be logged in to view applied jobs.');
        return;
      }

      const response = await axios.get(`https://jobportalbackend-c2xp.onrender.com/api/jobs//applied`);
      setAppliedJobs(response.data);
    };

    fetchAppliedJobs();
  }, []);

  const handleReject = async (jobId) => {
    // const userId = localStorage.getItem('userId');
    await axios.post(`https://jobportalbackend-c2xp.onrender.com/api/jobs/${jobId}/reject`);
    alert('Application rejected successfully!');
    window.location.reload(); // Reload to see the updated list
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Applied Jobs</h2>
      <div className="row">
        {appliedJobs.map((job) => (
          <div className="col-md-4 mb-4" key={job._id}>
            <div className="card border-danger">
              <img src={job.imageUrl} className="card-img-top" alt={job.title} />
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <button className="btn btn-danger" onClick={() => handleReject(job._id)}>Reject Application</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
