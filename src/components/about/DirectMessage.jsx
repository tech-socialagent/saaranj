import Image from 'next/image';

const DirectorMessage = () => {
  return (
    <section className="lg:px-12 px-4 lg:mt-[120px] my-[80px] mx-auto">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-2">
        <div className="lg:w-1/2">
          <h1 className="heading ">Managing Director's Message</h1>
          <p className="test__para text-white mt-5">
            Since our inception, we have been driven by a simple yet powerful 
            vision—to transform aspirations into tangible realities. Founded on a 
            solid foundation of engineering excellence, innovation, and commitment, 
            Saaranj Ventures has rapidly grown into a name synonymous with quality 
            and trust in the construction industry.
          </p>
          <p className="test__para text-white mt-2">
            In today's fast-evolving world, construction is about more than just 
            creating structures; it's about creating spaces that inspire, support 
            communities, and stand the test of time. At Saaranj Ventures, we embrace 
            this responsibility with unwavering dedication, backed by over a decade 
            of experience and a talented team of experts. From concrete foundations 
            to meticulously crafted interiors, every aspect of our projects is managed 
            with precision, ensuring that we not only meet but exceed client expectations.
          </p>
          <p className="test__para text-white mt-2">
            Our purpose is not just to build structures but to build lasting relationships 
            founded on mutual respect, transparency, and an unyielding commitment to quality. 
            We aim to be more than a construction partner; we strive to be a trusted guide 
            in every client's journey, helping to bring their vision to life with innovation 
            and integrity.
          </p>
          <div className="mt-4">
            <h2 className="heading">Mr. R</h2>
            <p className="test__para text-xl text-white mt-1">Saaranj Ventures</p>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full flex mt-5 lg:mt-0 justify-center">
          <div className="relative lg:w-[542px] w-full h-[509px]">
            <Image
              src="/assets/about/message.png"
              alt="Managing Director"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;