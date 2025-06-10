import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTestConfig } from '@/store/slices/testSlice';
import { useNavigate } from 'react-router';

const professions = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Mobile Developer',
  'DevOps Engineer',
  'Data Scientist',
  'Machine Learning Engineer',
  'Game Developer',
  'Cybersecurity Specialist',
  'QA Engineer',
];

const experienceLevels = ['Junior', 'Middle', 'Senior'];

export default function EducationPage() {
  const dispatch = useDispatch();
  const [questionsCount, setQuestionsCount] = useState(1);
  
  const [error, setError] = useState('');

  const [userData, setUserData] = useState(() => {
    const cached = localStorage.getItem('userData');
    return cached ? JSON.parse(cached) : {
      profession: '',
      experience: '',
    };
  });

  const [testConfig, setLocalTestConfig] = useState({
    profession: userData.profession || '',
    experience: userData.experience || '',
    questionsCount: 1
  });

  const navigate = useNavigate();

  //const user = getAuth().currentUser;

  const fetchUserData = async () => {
    //if (!user) return;
    try {
    //   const { data } = await triggerGetUser(user?.uid);
    //   if (data) {
    //     setUserData(data);
    //     localStorage.setItem('userData', JSON.stringify(data));
    //   }
      
      const recievedData = {
        profession: null,
        experience: null
      };
      setUserData(recievedData);
      localStorage.setItem('userData', JSON.stringify(recievedData));
    } catch (err) {
      console.error('Failed to load user data', err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData.profession && userData.experience) {
      setLocalTestConfig(prev => ({
        ...prev,
        profession: userData.profession,
        experience: userData.experience
      }));
    }
  }, [userData]);

  const handleStartTest = () => {
    if (!testConfig.profession || !testConfig.experience) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    
    if (questionsCount < 1 || questionsCount > 15) {
      setError('Количество вопросов должно быть от 1 до 15');
      return;
    }

    const config = {
      ...testConfig,
      questionsCount
    };

    dispatch(setTestConfig(config));
    navigate("../questions")
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalTestConfig(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-black-900">ПОДГОТОВКА К СОБЕСЕДОВАНИЯМ</h1>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl">
          <h2 className="text-xl font-bold text-black-900 mb-6">Настройте параметры теста</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {userData.profession ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Специализация:</label>
                <div className="p-2 border border-gray-300 rounded-md bg-gray-50">
                  {userData.profession}
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-1">Специализация:</label>
                <select
                  name="profession"
                  value={testConfig.profession}
                  onChange={handleChange}
                  className="input-style p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Выберите специализацию</option>
                  {professions.map((profession) => (
                    <option key={profession} value={profession}>
                      {profession}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {userData.experience ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Уровень:</label>
                <div className="p-2 border border-gray-300 rounded-md bg-gray-50">
                  {userData.experience}
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-1">Уровень:</label>
                <select
                  name="experience"
                  value={testConfig.experience}
                  onChange={handleChange}
                  className="input-style p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Выберите уровень</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Количество вопросов (макс. 15):
              </label>
              <input
                type="number"
                min="1"
                max="15"
                value={questionsCount}
                onChange={(e) => {
                  const value = Math.min(15, Math.max(1, Number(e.target.value)));
                  setQuestionsCount(value || 1);
                  setError('');
                }}
                className="input-style p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="text-center pt-4">
              <button
                onClick={handleStartTest}
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-2xl transition-colors duration-200"
              >
                Начать тест
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}