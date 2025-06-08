import BenefitItem from '@/components/BenefitItem/BenefitItem.jsx';

const Sidebar = () => {
    const benefits = [
        'Пошаговый план обучения',
        'Карьераный рост',
        'Большое сообщество специалистов',
        'Обучение с ментором',
        'Возможность прохождения стажировки',
    ];

    return (
        <div className="hidden md:flex md:w-2/5 bg-purple-700 text-white rounded-tr-3xl rounded-br-3xl flex-col justify-between p-12">
            <div>
                <div className="flex items-center mb-8">
                    <div className="bg-white rounded-full p-2">
                        <span className="text-purple-700 font-bold text-2xl">Y</span>
                    </div>
                    <h1 className="text-4xl font-extrabold ml-3">YeaHub</h1>
                </div>
                <p className="text-lg">YeaHub объединяет IT-специалистов</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-6">Стань частью сообщества YeaHub и получи:</h2>
                <ul className="space-y-4">
                    {benefits.map((b, i) => <BenefitItem key={i} text={b} />)}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
