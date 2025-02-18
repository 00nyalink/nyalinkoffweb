// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black p-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* 左侧 Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* 中间内容：公司信息和链接 */}
        <div className="flex space-x-16">
          <div>
            <h4 className="text-center font-semibold mb-4">关于</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">具体情况1</Link></li>
              <li><Link href="#">具体情况2</Link></li>
              <li><Link href="#">具体情况3</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-center font-semibold mb-4">产品与服务</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">具体产品及服务1</Link></li>
              <li><Link href="#">具体产品及服务2</Link></li>
              <li><Link href="#">具体产品及服务3</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-center font-semibold mb-4">资源与合作商</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">具体资源与合作商1</Link></li>
              <li><Link href="#">具体资源与合作商2</Link></li>
              <li><Link href="#">具体资源与合作商3</Link></li>
            </ul>
          </div>
        </div>

        {/* 右侧部分：联系我们和隐私政策，社交图标 */}
        <div className="flex flex-col items-center space-y-4">
          {/* "联系我们" 和 "隐私政策" */}
          <ul className="space-y-2 text-center text-sm">
            <li><Link href="#" className="text-black hover:text-blue-400">联系我们</Link></li>
            <li><Link href="#" className="text-black hover:text-blue-400">隐私政策</Link></li>
          </ul>

          {/* 社交媒体图标 */}
          <div className="flex space-x-6 text-xl">
            <a href="#" className="text-black">
              <span className="material-symbols-outlined">email</span>
            </a>
            <a href="#" className="text-black">
              <span className="material-symbols-outlined">youtube_searched_for</span>
            </a>
            <a href="#" className="text-black">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}