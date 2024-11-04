import Image from 'next/image';

const STEPS = [
    {
        id: 1,
        image: '/assets/prime-homes/packages.png',
        title: 'Select Any Package'
    },
    {
        id: 2,
        image: '/assets/prime-homes/review.png',
        title: 'Review & compare the brief'
    },
    {
        id: 3,
        image: '/assets/prime-homes/download.png',
        title: 'Download to know more'
    },
    {
        id: 4,
        image: '/assets/prime-homes/send.png',
        title: 'Or Send us your customize requirements'
    }
];

const HowItWorks = () => {
    return (
        <section className="px-4 md:px-6 lg:px-12 mt-5 lg:mt-[120px]">
            <h1 className="heading mb-8 text-center slide-down">
                How It Works
            </h1>
            
            <div className="py-10 grid lg:grid-cols-4 grid-cols-2 gap-6">
                {STEPS.map((step, index) => (
                    <div
                        key={step.id}
                        className="lg:w-full lg:h-[258px] bg-[#192738] flex flex-col items-center justify-center py-5 rounded-xl shadow-xl transition-all hover:scale-105 slide-down"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="lg:w-auto lg:h-auto w-20 h-20 relative">
                            <Image
                                src={step.image}
                                alt={step.title}
                                width={80}
                                height={80}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-white font-thin lg:text-2xl px-2 text-center text-lg mt-4">
                            {step.title}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;