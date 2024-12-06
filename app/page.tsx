import Image from 'next/image';
import first from './components/icons/svg/first.svg';
import second from './components/icons/svg/second.svg';
import third from './components/icons/svg/third.svg';
import fourth from './components/icons/svg/fourth.svg';
import fifth from './components/icons/svg/fifth.svg';

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      {/* Logo Section */}
      <div className="absolute top-- left-0 w-full h-[100px] flex flex-row justify-between items-start p-4">
        <Image src="/logo/logo.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* SVG Section */}
        <div className="flex w-screen h-screen justify-between">
          <Image src={fifth} alt="Fifth SVG" />
          <Image src={fourth} alt="Fourth SVG" />
          <Image src={third} alt="Third SVG" />
          <Image src={second} alt="Second SVG" />
          <Image src={first} alt="First SVG" />
        </div>
    </main>
  );
}


