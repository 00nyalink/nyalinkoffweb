// app/page.tsx
import NewsItems from '@/components/NewsItems';
import Carousel from '../components/Carousel';
export default function HomePage() {
  return (
    <div className='w-full my-8 bg-white overflow-hidden'>
      <div className='mt-20'>
        <Carousel />
      </div>
      <div className='my-14'>
        <p className='text-6xl text-black text-center'> - 現在 連結一切與未來 - </p>
        <div className='text-center text-black my-20'>---------------占位符-----------------</div>
      </div>
      <div className='w-full my-8 mx-6'>
        <div className='ml-20 my-10 text-7xl text-black text-left'> - NEWS - </div>
        <div className="flex justify-evenly space-x-4 p-4">
          {/* 传递不同的日期和描述 */}
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest'/>
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest'/>
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest'/>
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest'/>
        </div>

      </div>
    </div>
  );
}