import Image from 'next/image';

const services = [
  {
    image: '/assets/about/residential.webp',
    heading: 'Residential Construction',
  },
  {
    image: '/assets/about/commercial.webp',
    heading: 'Commercial Construction',
  },
  {
    image: '/assets/about/interiors.webp',
    heading: 'Interiors & Modular Works',
  },
  {
    image: '/assets/about/material.webp',
    heading: 'Material Supply',
  },
];

const Services = () => {
  return (
    <section className="lg:mx-12 mx-4 lg:mt-[120px] mt-[80px] ">
      <h1 className="heading text-left md:text-center">Services We Offer</h1>
      <div className="flex lg:flex-row flex-wrap gap-4 lg:gap-8 lg:mt-[49px] mt-5 items-center md:justify-center">
        {services.map((service, index) => (
          <div key={index} className="text-center md:w-[285px] w-full">
            <div className="relative w-full h-[300px]">
              <Image
                src={service.image}
                alt={service.heading}
                fill
                className="rounded-md shadow-md object-cover"
              />
            </div>
            <div className="mt-3 place-content-center p-2 lg:h-[92px] border-2 border-primary">
              <h2 className="lg:text-xl text-white font-lato px-10">
                {service.heading}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;