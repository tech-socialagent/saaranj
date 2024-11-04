import Link from 'next/link';
import { LuArrowUpRight } from "react-icons/lu";

const CustomButton = ({ href, children, className = '' }) => {
    return (
        <Link 
            href={href}
            className="relative inline-block px-4 py-4 font-medium group mt-5"
        >
            {/* Offset border that moves on hover */}
            <span className="absolute inset-0 w-[110%] h-[80%] transition duration-200 ease-out transform translate-x-[-5%] translate-y-[12%] border-[0.01px] border-primary group-hover:-translate-x-0  group-hover:w-[100%] hover:p-0 hover:m-0"  />
            
            {/* Main border with hover background */}
            <span className="absolute inset-0 w-full h-full border-[0.01px] border-primary group-hover:bg-primary" />
            
            {/* Content */}
            <span className="relative text-primary font-bold group-hover:text-white">
                <div className="flex items-center justify-start space-x-2 font-lato font-normal">
                    <span>{children}</span>
                    <LuArrowUpRight className="text-2xl text-primary group-hover:text-white" />
                </div>
            </span>
        </Link>
    );
};

export default CustomButton;