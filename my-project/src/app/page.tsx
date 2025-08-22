import Image from 'next/image';
import { SpeechBubble } from './components/SpeechBubble';
import { SajuTable } from './components/SajuTable';
import { columnDefs, rowData } from './data/table';

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <main className="relative flex flex-col w-full max-w-md min-h-screen bg-white">
        <section className="relative flex flex-col gap-y-24">
          <div className="relative">
            <Image
              src="/frame1.png"
              alt="한복을 입고 올려다 보는 여성"
              width={448}
              height={448}
              className="w-full h-auto"
              priority
            />
            <SpeechBubble
              alignment="over-bottom-left"
              tailPosition="top-left"
              size="md"
              maxTextLine={3}
            >
              이제 본격적으로 <br />
              OO님의 사주팔자를 <br />
              분석해볼 차례네요.
            </SpeechBubble>
          </div>
          <div className="relative">
            <Image
              src="/frame2.png"
              alt="붓과 책"
              width={448}
              height={448}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="relative">
            <SpeechBubble
              alignment="over-top-left"
              tailPosition="bottom-left"
              size="md"
              maxTextLine={2}
            >
              제가 OO님의 사주를 <br />
              보기 쉽게 표로 정리했어요
            </SpeechBubble>
            <Image
              src="/frame3.png"
              alt="한복을 입고 턱을 개고 있는 여성"
              width={448}
              height={448}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>
        <section className="relative">
          <SajuTable
            name="김로켓"
            birthDate="1980년 8월 27일 08:10"
            columnDefs={columnDefs}
            rowData={rowData}
          />
        </section>
      </main>
    </div>
  );
}
