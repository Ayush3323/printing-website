import React from 'react';
import './Layouts.css';

const AuthLayout = ({ children }) => {
    return (
        <div className='app auth-layout'>
            <main className="auth-content">
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;
