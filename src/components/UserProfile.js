import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You need to be logged in to view your profile.');
        return;
      }

      const response = await axios.get(`https://jobportalbackend-c2xp.onrender.com/api/users`);
      setUser(response.data);
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User Profile</h2>
      {user ? (
        <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '18rem', margin: '20px' }}>
          <img
            src={user.imageUrl}
            className="card-img-top"
            alt={user.username}
            style={{ height: '250px', objectFit: 'cover' }} // Adjust height and keep aspect ratio
          />
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
