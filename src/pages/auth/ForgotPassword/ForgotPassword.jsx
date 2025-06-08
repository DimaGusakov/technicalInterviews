import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ForgotPasswordForm from '@/components/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <ForgotPasswordForm />
        </div>
    );
};

export default ForgotPasswordPage;
