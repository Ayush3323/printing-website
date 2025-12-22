import React from 'react';

const Hero = () => {
  return (
    // 主容器使用100%宽度，避免溢出
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-1.5">
        {/* 左栏：日历、笔记本和日记本 */}
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_1920/India%20LOB/NVHP/New%20Home%20Page/Big%20Marquee/IN_Calendar_-Notebooks-and-Diaries_SunlightCoffee_Marquee_01_1')"
          }}
        >
          {/* 内容容器 */}
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
            {/* 标题 */}
            <h2 className="text-2xl font-bold text-black mb-1">
              Calendars, Notebooks and Diaries
            </h2>

            {/* 子标题 */}
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
              <span className="font-medium">Starting at</span>
              <span className="font-bold">₹ 160.00</span>
            </div>

            {/* 按钮组 */}
            <div className="flex gap-3 flex-wrap">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                Calendars
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                Notebooks
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                Diaries
              </button>
            </div>

            {/* 底部横幅文字 */}
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <span>Calendars, Notebooks and Diaries</span>
              <span className="mx-2">&gt;</span>
              <span>Bottom Banner</span>
              <span className="mx-2">&gt;</span>
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* 右栏：冬季服装 */}
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_1920/India%20LOB/NVHP/New%20Home%20Page/Big%20Marquee/IN_Winterwear_Marquee_01_4')"
          }}
        >
          {/* 内容容器 */}
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
            {/* 标题 */}
            <h2 className="text-2xl font-bold text-black mb-1">
              Custom Winter Wear
            </h2>

            {/* 子标题 */}
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
              <span className="font-medium">Starting at</span>
              <span className="font-bold">Rs.850</span>
            </div>

            {/* 主按钮 */}
            <button className="w-full bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition font-medium">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;