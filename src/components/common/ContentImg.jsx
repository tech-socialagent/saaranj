import Image from "next/image";

const ContentImg = ({ title, desc, img, box }) => {
    return (
        <section className="lg:px-12 px-4 lg:my-[120px] my-[60px] mx-auto ">
            <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-2 gap-8 ">
                <div className="lg:w-3/5">
                    <h1 className="text-primary text-3xl m-0 md:text-4xl lg:text-5xl font-semibold ">{title}</h1>
                    <p className="test__para max-w-[693px] text-white mt-5">
                        {desc}
                    </p>
                </div>

                <div className=" flex-1  flex justify-center items-center w-full">
                    <div className="relative lg:w-[397px] lg:h-[311px] h-[229px] w-full  ">
                        <Image
                            src={img}
                            alt="About Saaranj Ventures"
                            width={397}
                            height={311}
                            className="h-full w-full object-cover relative z-10 "
                        />
                        {
                            box && <div className="border-2 absolute z-5 top-[20px] left-[10px] border-primary h-full w-full"></div>
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContentImg;