// src/components/home/Introduction.jsx
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const Introduction = () => {
    return (
        <section className="relative py-20 pb-10 sm:pb-20 overflow-hidden bg-secondary text-primary">
            {/* First Image Container */}
            <div className="absolute lg:top-0 w-44 lg:w-full lg:h-full h-44 lg:right-1 -right-4 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={IMAGES.ss1}
                        alt="Hero decoration"
                        fill
                        className="object-contain object-right "
                        priority
                    />
                </div>
            </div>

            {/* Second Image Container */}
            <div className="absolute lg:top-0 w-44 lg:w-full lg:h-full h-44 lg:left-1 -left-4 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={IMAGES.ss2}
                        alt="Hero decoration"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </div>

            <h1 className="heading text-center">
                Saaranj Ventures
            </h1>
            <p className="text-white text-center max-w-[750px] mt-5 lg:mx-auto mx-12 text-lg">
                With over 14+ years of experience in construction and material
                manufacturing, Saaranj Ventures was founded in 2018 by a team of
                innovative engineers and business experts. Our mission is to help
                people bring their dream projects to life.
            </p>
        </section>
    );
};

export default Introduction;