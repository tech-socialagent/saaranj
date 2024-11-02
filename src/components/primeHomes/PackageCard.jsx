const PackageCard = ({ package: pkg, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`
                border-2 w-full h-[117px] pt-4 px-4 shadow-xl rounded-lg cursor-pointer
                transition-all hover:scale-105
                ${isSelected 
                    ? 'bg-primary border-primary text-secondary' 
                    : 'bg-transparent border-primary text-white hover:border-primary/80'}
            `}
        >
            <h2 className="font-normal text-xl">{pkg.heading}</h2>
            <p className="text-2xl mt-1">{pkg.price}</p>
        </div>
    );
};

export default PackageCard;