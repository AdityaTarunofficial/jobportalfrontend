import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    const handleLogout = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) return; 

        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}/logout`, {
                method: 'POST',
            });

            if (response.ok) {
                localStorage.removeItem('userId');
                localStorage.removeItem('username');
                window.location.reload();  
            } else {
                console.error('Failed to log out:', response.statusText);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-dark"
            style={{
                backgroundColor: '#1a1a1a',
                padding: '1rem 2rem',
                color: '#ffffff',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
        >
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        transition: 'color 0.3s ease-in-out'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                    onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                >
                    Job Portal
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ border: 'none' }}
                >
                    <span className="navbar-toggler-icon" style={{ filter: 'brightness(0) invert(1)' }}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    padding: '0.5rem 1rem',
                                    transition: 'color 0.3s ease-in-out'
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/applied-jobs"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    padding: '0.5rem 1rem',
                                    transition: 'color 0.3s ease-in-out'
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                            >
                                Applied Jobs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/user-profile"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    padding: '0.5rem 1rem',
                                    transition: 'color 0.3s ease-in-out'
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                            >
                                Profile
                            </Link>
                        </li>
                        {username === "admin" && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/admin-dashboard"
                                    style={{
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        padding: '0.5rem 1rem',
                                        transition: 'color 0.3s ease-in-out'
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                    onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                                >
                                    Admin Dashboard
                                </Link>
                            </li>
                        )}
                        {username ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link" style={{ color: '#ffffff' }}>
                                        Hello, {username}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="btn btn-link nav-link"
                                        onClick={handleLogout}
                                        style={{
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            padding: '0.5rem 1rem'
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                        onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/login"
                                        style={{
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            padding: '0.5rem 1rem',
                                            transition: 'color 0.3s ease-in-out'
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                        onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                                    >
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/register"
                                        style={{
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            padding: '0.5rem 1rem',
                                            transition: 'color 0.3s ease-in-out'
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = '#f39c12')}
                                        onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
                                    >
                                        Register
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
