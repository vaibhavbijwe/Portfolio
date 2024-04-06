import Image from "next/image";

const Homepage = () => {
  return (
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* image container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
     <Image src="/hero.png" alt="" fill className="object-contain" />
    </div>
    {/* text container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* tittle */}
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Desigining Tomorrow.</h1>
      {/* DEscription  */}
      <p className="md:text-xl">Welcome to my digital canvas, whwre inovation and creativity convege, with a keen eye for asenthes and a master of code my portfolio showcases a diverse collection of projects that reflect my commitments to excellence.</p>

      {/* Button  */}
      <div className="w-full flex gap-4"> 
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white ">View my work </button>
      <button className="p-4 rounded-lg ring-1 ring-black">Contact me </button>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
