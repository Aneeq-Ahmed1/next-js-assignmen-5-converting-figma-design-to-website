import Image from "next/image";
import Header from "./components/Header";
import {Libre_Bodoni} from '@next/font/google'

const librebodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400'],
});


export default function Home() {
  return (

    <div className="h-auto">
    <Header />

   
    <div className="flex flex-col md:flex-row items-center md:items-start px-6 py-12">
     
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className={` ${librebodoni.className} text-[32px] md:text-[40px] font-bold leading-tight text-black max-w-lg md:max-w-xl`}>
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className={` ${librebodoni.className} text-[#787054] font-medium text-[18px] md:text-[30px] mt-4 max-w-lg md:max-w-xl`}>
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className="mt-8 text-white bg-[#A29875] text-[18px] md:text-[30px] w-full md:w-[288px] h-[58px] p-[7px] rounded-[10px] hover:bg-[#8f7b5b] transition-colors">
          Explore Now
        </button>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image src="/figma-img.png" alt="Figma-image" width={462} height={647} className="object-contain" />
      </div>
    </div>
  </div>

  );
}
