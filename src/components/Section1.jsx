import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 md:py-20 lg:py-24">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
        It&apos;s about time you <br />
        <span className="text-blue-600">delete invoice-template.xlsx</span>
      </h1>
      <p className="text-gray-500 mt-4 max-w-2xl">
        Harnesses the power of artificial intelligence to transform your
        business data into actionable insights, propelling you to new heights of
        success.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          Start your free trial
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
          ▶ Watch video
        </button>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="w-full bg-blue-500 h-[60vh] p-6 rounded-lg flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-grid opacity-50"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 2px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.27) 1px, transparent 2px)
            `,
          backgroundSize: "70px 70px",
          backgroundColor: "#4389f8",
        }}
      ></div>

      {/* Top Left Design */}
      <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 bg-white opacity-20 rounded-full"></div>
      <div className="absolute -top-5 -left-5 w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white opacity-15 rounded-full"></div>

      {/* Bottom Right Design */}
      <div className="absolute -bottom-8 -right-10 w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white opacity-20 rounded-full"></div>
      <div className="absolute -bottom-8 -right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 bg-white opacity-10 rounded-full"></div>

      {/* Middle Circles */}
      <div className="w-36 h-36 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white opacity-10 rounded-full absolute"></div>
      <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-30 lg:h-30 bg-white opacity-10 rounded-full absolute"></div>

      {/* Play Button and Text */}
      <div className="bg-white p-4 rounded-full flex items-center gap-3 shadow-lg z-10">
        <div className="bg-blue-600 text-white p-3 rounded-full">▶</div>
        <div>
          <p className="font-semibold">Watch introduce video</p>
          <p className="text-gray-500 text-sm">
            5 mins • <span className="text-blue-600">Play video</span>
          </p>
        </div>

        {/* Bottom Left Circles */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bottom-15 left-[32vw] bg-white opacity-10 rounded-full absolute"></div>
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bottom-19 left-[33vw] bg-white opacity-10 rounded-full absolute"></div>
        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bottom-21 left-[33.5vw] bg-white opacity-50 rounded-full absolute"></div>

        {/* Top Right Circles */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 top-[40px] right-[30vw] bg-white opacity-10 rounded-full absolute"></div>
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 top-[53px] right-[31vw] bg-white opacity-10 rounded-full absolute"></div>
        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 top-[60px] right-[31.5vw] bg-white opacity-50 rounded-full absolute"></div>
      </div>
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 pb-2 md:px-12 lg:px-24">
      <HeroSection />
      <VideoSection />
    </div>
  );
};

export default Section1;
