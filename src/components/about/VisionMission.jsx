import Image from 'next/image';

const VisionMission = () => {
  return (
    <section className="mt-10 lg:mt-[120px]">
      <div className="max-w-screen-lg justify-center items-center lg:flex-row flex-col mx-auto flex gap-10 lg:gap-20">
        {/* Vision Card */}
        <div className="bg-[#192738] lg:h-[494px] lg:w-[450px] flex justify-center items-center flex-col px-5 py-2 shadow-xl">
          <div className="relative w-[144px] h-[135px]">
            <Image
              src="/assets/about/vision.png"
              alt="Vision"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-primary m-4 text-3xl md:text-4xl lg:text-5xl font-semibold ">Vision</h1>
          <p className="text-lg mt-5 text-center  text-white">
            Our vision at Saaranj Ventures is to be the leading construction company 
            known for excellence, innovation, and customer satisfaction, shaping 
            inspiring and sustainable spaces for future generations.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#192738] lg:h-[494px] lg:w-[450px] flex justify-center items-center flex-col px-5 py-5 shadow-xl">
          <div className="relative w-[133px] h-[133px]">
            <Image
              src="/assets/about/mission.png"
              alt="Mission"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-primary text-3xl m-4 md:text-4xl lg:text-5xl font-semibold">Mission</h1>
          <p className="text-lg mt-5 text-center text-white ">
            Our mission at Saaranj Ventures is to deliver exceptional construction 
            solutions characterized by quality, innovation, and client satisfaction, 
            transforming visions into reality. We build lasting relationships and 
            create inspiring spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;