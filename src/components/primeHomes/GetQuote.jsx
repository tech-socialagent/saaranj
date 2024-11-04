import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '../ui/CustomButton';

const GetQuote = () => {
    return (
        <section className="relative  my-5 lg:my-[120px]">
            <div className=" mx-4 py-10 relative">
                <Image
                    src="/assets/prime-homes/quote-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />

                <div className="relative z-10 flex flex-col items-center justify-center">
                    <h1 className="lg:text-[45px] text-[25px] px-7 lg:px-0 text-center max-w-3xl mx-auto text-white mb-5">
                        Looking For Personalised Construction Quote?{' '}
                        <span className="text-primary">Find-out Exact Cost</span>{' '}
                        Now!
                    </h1>

                    <CustomButton href="/contact">
                        Contact Us
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default GetQuote;