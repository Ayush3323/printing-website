import React from "react";

const Hero1 = () => {
  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      {/* 全屏容器 - 修正版 */}
      <div className="w-full">
        {/* 主网格容器，添加5px间隙 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
          
          {/* ================= 左侧区块 ================= */}
          <div
            className="relative h-[420px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Production/3rd%20Feb%202025/IN_Polo_PrintedT-Shirts_Marquee_01_1')",
            }}
          >
            {/* 内容区块（底部） */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
              <h2 className="text-2xl font-bold text-black">
                Wear Your Brand With Pride
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                Starting at ₹550.00
              </p>

              <div className="mt-4 flex gap-3 flex-wrap">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                  custom Polo Tshirt
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                  custom Tshirt
                </button>
              </div>
            </div>
          </div>

          {/* ================= 右侧区块 ================= */}
          <div
            className="relative h-[420px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/IN_Visiting-card_GK-Fashions_Marquee_01_1')",
            }}
          >
            {/* 内容区块 */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
              <h2 className="text-2xl font-bold text-black">
                My Name, My Pride
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                100 visiting card at RS 100
              </p>

              <button className="mt-4 bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero1;