// app/page.tsx
import NewsItems from '@/components/NewsItems';
import Carousel from '../components/Carousel';
import Image from 'next/image';
import '../app/globals.css';//引入全局css

export default function HomePage() {
  return (
    <div className='w-full my-8 overflow-hidden'>
      {/* 轮播图片 */}
      <div className='mt-20'>
        <Carousel />
      </div>
      {/* 标语栏 */}
      <div className='my-14'>
        <p className='text-6xl text-black text-center'> - 現在 連結一切與未來 - </p>
        <div className='text-center text-black my-20'>---------------占位符-----------------</div>
      </div>
      <div className='w-full my-20 mx-6'>
        <div className='ml-20 my-10 text-7xl text-black text-left'> - NEWS - </div>
        <div className="flex justify-evenly space-x-4 p-4">
          {/* 传递不同的日期和描述 */}
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest' />
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest' />
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest' />
          <NewsItems date="2023.9.8" realser="Nyalink release" imagePath='/images/4號.png' title='testtest' />
        </div>

      </div>
      {/* ABOUT US */}
      <div className='w-full my-30 mx-6 pb-20'>
        <div className='mr-40 my-10 text-7xl text-black text-right'> - ABOUT US - </div>
        <div className="flex justify-center space-x-4 p-5 mx-10">
          <div className="w-1/2 h-auto">
            <Image
              src='/images/13號.png'   // 图片路径
              alt='about'
              width={1000}
              height={800}
            />
          </div>
          <div className='w-1/2 h-auto text-black text-center pr-10'>
            <div className='text-4xl px-20 pt-20 py-5 text-left '>從現在開始</div>
            <div className='text-4xl px-20 pb-20 text-right'>連結我們生活的一切與未來</div>
            <div className='text-lg'>
              <p>我們希望通過虛擬與現實結合，讓所有人感受的到創作者的感情與目的意義。</p>
              <p>利用網路和現實，服務貫通幾乎每個人的身邊。</p>
              <p>為所有人提供服務，改變資源分散的現在，朝向集合便利的未來。</p>
              <p>避免繁瑣和信息差，人人都能利用優質的資源，創造自己的夢想。</p>
              <p>身爲業内先驅，我們將用服務與產品開擴未來。</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS & SERVICE */}
      <div className='w-full my-30 mx-6 pb-20'>
        <div className='ml-40 my-10 text-6xl text-black text-left'> - PRODUCTS & SERVICE - </div>
        <div className="flex justify-center space-x-4 p-5 mx-10">

          <div className=' flex w-1/2 h-auto text-black text-right pr-10 items-center '>
            <div className='text-xl '>
              <p>ニャリンク提供</p>
              <p>周邊業務及幾乎所有與該業務相關的配套服務及產品。</p>
              <p>從產品設計，至包裝方案提供，物流，再至販售，售後及宣發等等。</p>
              <p>ニャリンク同時提供</p>
              <p>跨國代理，傳媒，自媒體全面服務支持等多項優秀的服務鏈。</p>
              <p>上千種業務及產品，等待您的咨詢！</p>
            </div>
          </div>
          <div className="w-1/2 h-auto">
            <Image
              src='/images/13號.png'   // 图片路径
              alt='about'
              width={1000}
              height={800}
            />
          </div>
        </div>
      </div>
      {/* - RESOURCE & PARTNER */}
      <div className='w-full my-30 mx-6 pb-20'>
        <div className='mr-40 my-10 text-6xl text-black text-right'> - RESOURCE & PARTNER - </div>
        <div className="flex justify-center space-x-4 p-5 mx-10">

          <div className="w-1/2 h-auto">
            <Image
              src='/images/13號.png'   // 图片路径
              alt='about'
              width={1000}
              height={800}
            />
          </div>
          <div className=' flex w-1/2 h-auto text-black text-right pr-10 items-center '>
            <div className='text-xl '>
              <p>ニャリンク提供</p>
              <p>周邊業務及幾乎所有與該業務相關的配套服務及產品。</p>
              <p>從產品設計，至包裝方案提供，物流，再至販售，售後及宣發等等。</p>
              <p>ニャリンク同時提供</p>
              <p>跨國代理，傳媒，自媒體全面服務支持等多項優秀的服務鏈。</p>
              <p>上千種業務及產品，等待您的咨詢！</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}