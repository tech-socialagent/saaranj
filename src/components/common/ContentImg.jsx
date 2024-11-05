import Image from "next/image";

const ContentImg = ({ title, desc, img, box, reverse }) => {
    return (
        <section className="lg:px-12 px-4 lg:my-[120px] my-[60px] mx-auto ">
            <div className={`flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-3/5 w-full">
                    <h1 className="heading">{title}</h1>
                    <div className="text-lg max-w-[800px] text-white mt-5"  >
                        {desc}
                    </div>
                </div>

                <div className=" flex-1  flex justify-center items-center w-full">
                    <div className="relative lg:min-w-4/5 lg:h-[450px] h-[229px] w-full ">
                        <Image
                            src={img}
                            alt="About Saaranj Ventures"
                            width={1000}
                            height={1000}
                            className="h-full w-full object-cover relative z-10 "
                        />
                        {
                            box && <div className="border-2 absolute z-5 top-[20px] left-[-20px] border-primary h-full w-full"></div>
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContentImg;