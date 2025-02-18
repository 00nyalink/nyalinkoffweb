// app/layout.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css'; // 引入全局样式

//轮播插件
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 你可以在这里添加任何全局的 head 标签，比如 meta 标签，favicon 等 */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nyalink</title>
        {/* 全局引入所有 Material Symbols 字体 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
        />
      </head>
      <body className="bg-gray-100">
        {/* 顶部导航栏 */}
        <Navbar />

        {/* 页面内容 */}
        <main className="flex-grow">{children}</main>

        {/* 底部内容 */}
        <Footer />
      </body>
    </html>
  );
}