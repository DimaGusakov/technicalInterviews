import { FiCheckCircle } from 'react-icons/fi';

const BenefitItem = ({ text }) => (
    <li className="flex items-center space-x-3">
        <FiCheckCircle className="text-white w-5 h-5 flex-shrink-0" />
        <span className="text-white text-base">{text}</span>
    </li>
);

export default BenefitItem;
