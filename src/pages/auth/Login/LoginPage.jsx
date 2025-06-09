import Sidebar from '@/components/Sidebar/Sidebar';
import LoginForm from '@/components/LoginForm/LoginForm';

const LoginPage = () => (
    <div className="min-h-screen bg-gray-100 flex flex-wrap overflow-hidden">
        <Sidebar />
        <LoginForm />
    </div>
);


export default LoginPage;
