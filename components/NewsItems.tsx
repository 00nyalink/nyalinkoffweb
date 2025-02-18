// components/NewsItems.tsx
import React from 'react';
import Image from 'next/image';

interface NewsItemsProps {
    date: string; //日期
    realser: string;//发布者
    imagePath: string; // 新增图片路径的 prop
    title:string; //标题
  }
const NewsItems: React.FC<NewsItemsProps> = ({ date, realser, imagePath,title }) => {
    return (
        <div className="flex flex-col items-center bg-white p-2 max-w-xs w-full">
            {/* 替换为图片 */}
            <div className="w-full h-48 mb-2 relative">
                <Image
                    src={imagePath}   // 图片路径
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>

            {/* 日期和描述 */}
            <div className='w-full flex justify-between items-center'>
                <div className="text-base  text-black   w-1/2 text-left">{date}</div>
                <div className="text-base text-gray-500 w-1/2 text-right">{realser}</div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className='font-semibold w-1/2 text-left text-black'>{title}</div></div>
        </div>
    );
};

export default NewsItems;