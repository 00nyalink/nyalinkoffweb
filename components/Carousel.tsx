// components/Carousel.tsx
'use client'; // 标记为客户端组件

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Settings } from 'react-slick'; // 导入 react-slick 的类型声明

// 动态导入 react-slick，只在客户端渲染
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import Image from 'next/image';

const Carousel = () => {
    // 使用 Settings 类型
    const [settings, setSettings] = useState<Settings | null>(null);

    // 客户端渲染时设置轮播的配置
    useEffect(() => {
        setSettings({
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "25%",
            slidesToShow: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            arrows:true,
        });
    }, []);

    if (!settings) {
        return null; // 还没有准备好设置时，返回 null
    }

    return (
        <div className="carousel-container overflow-hidden">
            <Slider {...settings}>
                <div>
                    <Image
                        src="/images/1號.png"
                        alt="Slide 1"
                        width={2000}
                        height={1000}
                        layout="intrinsic"
                        className="w-full h-auto object-cover px-2"
                    />
                </div>
                <div>
                    <Image
                        src="/images/2號.png"
                        alt="Slide 2"
                        width={2000}
                        height={1000}
                        layout="intrinsic"
                        className="w-full h-auto object-cover px-2"
                    />
                </div>
                <div>
                    <Image
                        src="/images/3號.png"
                        alt="Slide 3"
                        width={1000}
                        height={500}
                        layout="intrinsic"
                        className="w-full h-auto object-cover px-2"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;