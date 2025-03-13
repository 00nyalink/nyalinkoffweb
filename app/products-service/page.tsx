// app/products-service/page.tsx
export default function ProductsServicePage() {
  return (
    <div className="py-12">
      {/* 顶部横条背景（页面全宽） */}
      <div className="relative w-full h-32 bg-gray-200">
        {/* 标题（悬挂在底部右侧） */}
        <h2 className="absolute bottom-0 right-10 translate-y-1/2 text-5xl font-bold text-black">
          产品与服务
        </h2>
      </div>

      {/* 间距 */}
      <div className="mb-16"></div>

      {/* 产品分类 1（标题左侧） */}
      <div className="relative flex flex-col md:flex-row items-stretch bg-gray-200 p-6 mb-12 mx-auto max-w-5xl rounded-lg">
        {/* 标题 - 左侧对齐 */}
        <h3 className="absolute top-0 left-6 -translate-y-1/2 text-3xl font-bold text-black">
          产品类别1
        </h3>

        {/* 左侧介绍 */}
        <div className="md:w-1/2 p-6 text-black">
          <p className="mb-2">这是一段关于类的文字介绍</p>
        </div>

        {/* 右侧产品列表 */}
        <div className="md:w-1/2 p-6 text-right text-black">
          <p>-- 具体产品1</p>
          <p>-- 具体产品2</p>
          <p>-- 具体产品3</p>
          <p>-- 具体产品4</p>
        </div>
      </div>

      {/* 产品分类 2（标题右侧） */}
      <div className="relative flex flex-col md:flex-row-reverse items-stretch bg-gray-200 p-6 mb-12 mx-auto max-w-5xl rounded-lg">
        {/* 标题 - 右侧对齐 */}
        <h3 className="absolute top-0 right-6 -translate-y-1/2 text-3xl font-bold text-black text-right">
          产品类别2
        </h3>

        <div className="md:w-1/2 p-6 text-black">
          <p className="mb-2">这是一段关于类的文字介绍</p>
        </div>

        <div className="md:w-1/2 p-6 text-left text-black">
          <p>-- 具体产品1</p>
          <p>-- 具体产品2</p>
          <p>-- 具体产品3</p>
          <p>-- 具体产品4</p>
        </div>
      </div>

      {/* 服务分类 1（标题左侧） */}
      <div className="relative flex flex-col md:flex-row items-stretch bg-gray-200 p-6 mb-12 mx-auto max-w-5xl rounded-lg">
        {/* 标题 - 左侧对齐 */}
        <h3 className="absolute top-0 left-6 -translate-y-1/2 text-3xl font-bold text-black">
          服务类别1
        </h3>

        <div className="md:w-1/2 p-6 text-black">
          <p className="mb-2">这是一段关于类的文字介绍</p>
        </div>

        <div className="md:w-1/2 p-6 text-right text-black">
          <p>-- 具体服务1</p>
          <p>-- 具体服务2</p>
          <p>-- 具体服务3</p>
          <p>-- 具体服务4</p>
        </div>
      </div>

      {/* 服务分类 2（标题右侧） */}
      <div className="relative flex flex-col md:flex-row-reverse items-stretch bg-gray-200 p-6 mx-auto max-w-5xl rounded-lg">
        {/* 标题 - 右侧对齐 */}
        <h3 className="absolute top-0 right-6 -translate-y-1/2 text-3xl font-bold text-black text-right">
          服务类别2
        </h3>

        <div className="md:w-1/2 p-6 text-black">
          <p className="mb-2">这是一段关于类的文字介绍</p>
        </div>

        <div className="md:w-1/2 p-6 text-left text-black">
          <p>-- 具体服务1</p>
          <p>-- 具体服务2</p>
          <p>-- 具体服务3</p>
          <p>-- 具体服务4</p>
        </div>
      </div>
    </div>
  );
}