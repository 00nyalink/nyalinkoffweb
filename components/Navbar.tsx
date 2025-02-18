// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white flex items-center justify-between p-4 shadow-md z-50">
      {/* 左侧 Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* 右侧部分：导航链接、语言选择和 moon 图标 */}
      <div className="flex items-center space-x-20 ml-auto">
        {/* 导航链接 */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li><Link href="/" className="text-gray-900 hover:text-blue-600">主页</Link></li>
          <li><Link href="/services" className="text-gray-900 hover:text-blue-600">产品与服务</Link></li>
          <li><Link href="/partners" className="text-gray-900 hover:text-blue-600">资源与合作商</Link></li>
          <li><Link href="/contact" className="text-gray-900 hover:text-blue-600">联系我们</Link></li>
        </ul>

        <div className='flex items-center ml-auto space-x-5'>
          {/* 语言选择 */}
          <div className="text-gray-900 text-lg font-medium">CN</div>

          {/* Moon 图标 */}
          <span className="material-symbols-outlined cursor-pointer text-2xl text-gray-800">
          dark_mode
        </span>
        </div>
      </div>
    </nav>
  );
}