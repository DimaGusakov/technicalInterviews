import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
