import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <main className="max-w-md mx-auto bg-white min-h-screen">
        <div className="relative w-full">
          <Image
            src="/Group 1410141671.png"
            alt="logo"
            width={448}
            height={448}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* 추가 콘텐츠를 여기에 배치할 수 있습니다. */}
      </main>
    </div>
  );
}
