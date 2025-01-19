import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section style={{ position: 'relative', width: '100%', height: '60vh' }}>
    <Image
      src="/assets/hero-image.jpg"
      alt="Hero Image"
      layout="fill"  // Make image take up full container
      objectFit="cover"  // Ensures the image covers the container
      objectPosition="center" 
      className="rounded-md" // Centers the image
    />
      <div className="relative z-10 text-neutral-50 text-center py-24 flex flex-col items-center justify-center bg-black opacity-60 w-full h-full rounded-md">
        <h1 className="lg:text-8xl font-bold md:text-6xl sm:text-4xl ">Find your favorite place here!</h1>
        <p className="mt-4 lg:text-4xl font-semibold md:text-3xl sm:text-2xl">The best prices for over 2 million properties worldwide.</p>
      </div>
    </section>
  );
}

export default HeroSection