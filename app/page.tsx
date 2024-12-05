import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      {/* Logo Section */}
      <div className="flex flex-row justify-between items-start p-4">
        <Image src="/logo/logo.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* SVG Section */}
        <div className="flex absolute top-0 left-0 w-full h-screen justify-between">
          <Image src="/svg/fifth.svg" alt="Fifth SVG" width={150} height={500} className='w-auto h-full'/>
          <Image src="/svg/forth.svg" alt="Forth SVG" width={150} height={150} className='w-auto h-full' />
          <Image src="/svg/third.svg" alt="Third SVG" width={150} height={150} className='w-auto h-full' />
          <Image src="/svg/second.svg" alt="Second SVG" width={150} height={150} className='w-auto h-full'/>
          <Image src="/svg/first.svg" alt="First SVG" width={150} height={150} className='w-auto h-full' />
        </div>
    </main>
  );
}


