import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import './Account.css';

const Settings = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            setLoading(true);
            const userData = await userService.getProfile();
            setUser(userData);
        } catch (err) {
            console.error('Error loading user:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        userService.logout();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="account-page">
                <div className="account-container">
                    <div className="loading-spinner">Loading settings...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="account-page">
            <div className="account-container">
                <div className="account-header">
                    <div>
                        <h1>Account Settings</h1>
                        <p>Manage your account preferences and security</p>
                    </div>
                </div>

                <div className="account-content">
                    {error && (
                        <div className="alert alert-error">{error}</div>
                    )}

                    {success && (
                        <div className="alert alert-success">{success}</div>
                    )}

                    <div className="form-section">
                        <h2>Account Information</h2>
                        <div className="info-item">
                            <label>Username</label>
                            <div className="info-value">{user?.username}</div>
                            <span className="field-note">Username cannot be changed</span>
                        </div>
                        <div className="info-item">
                            <label>Email</label>
                            <div className="info-value">{user?.email}</div>
                            <span className="field-note">Email cannot be changed</span>
                        </div>
                        <div className="info-item">
                            <label>Account Created</label>
                            <div className="info-value">
                                {user?.date_joined 
                                    ? new Date(user.date_joined).toLocaleDateString('en-IN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })
                                    : 'N/A'}
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Account Actions</h2>
                        <div className="settings-actions">
                            <button onClick={() => navigate('/account/profile')} className="btn-secondary">
                                Edit Profile
                            </button>
                            <button onClick={() => navigate('/account/addresses')} className="btn-secondary">
                                Manage Addresses
                            </button>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Security</h2>
                        <div className="security-actions">
                            <div className="security-item">
                                <div>
                                    <h3>Password</h3>
                                    <p>Change your account password</p>
                                </div>
                                <button className="btn-secondary" disabled>
                                    Change Password (Coming Soon)
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-section danger-zone">
                        <h2>Danger Zone</h2>
                        <div className="danger-actions">
                            <div className="danger-item">
                                <div>
                                    <h3>Sign Out</h3>
                                    <p>Sign out from your account</p>
                                </div>
                                <button onClick={handleLogout} className="btn-danger">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
