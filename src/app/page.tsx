'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import QuickLinks from '../components/QuickLinks';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import building from './images/rbb.jpg';

export default function Home() {
  return (
    <main>
      {/* Hero Slider Section */}
      <section className="relative">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          effect="fade"
          speed={1000}
          autoplay={{
            delay: 15000, // Reduced from 105000 to 5 seconds for better UX
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.custom-pagination',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="h-[85vh] w-full" // Increased height
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={building}
                alt="RBB Bank"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-blue-1000/10 bg-gradient-to-br from-blue-900/30 to-gray-900/30 flex items-center justify-center">
                <div className="text-center max-w-4xl px-6 transform transition-all duration-1000 ease-out">
                  <div className="mb-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white animate-fadeInUp">
                      <span
                        className="text-white"
                        style={{
                          textShadow: `6px 6px 0px rgba(0,0,0,0.2)`
                        }}
                      >
                        WELCOME TO<br /> <span className='text-4xl text-white-400'>RBB <span className='text-white-800'>INTRANET</span></span>
                      </span>
                    </h1>
                    <div
                      className="w-32 h-1.5 bg-gradient-to-r from-blue-300 to-red-300 mx-auto rounded-full mb-6"
                      style={{
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                      }}
                    ></div>
                  </div>

                  <p
                    className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fadeInUp delay-100"
                    style={{
                      textShadow: `0px 15px 5px rgba(0,0,0,0.1),
                 10px 20px 5px rgba(0,0,0,0.05),
                 -10px 20px 5px rgba(0,0,0,0.05)
            `
                    }}
                  >
                    Your trusted banking partner for all financial needs
                  </p>

                  <div className="opacity-0 animate-fadeInUp delay-200">

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={building}
                alt="RBB Bank"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-blue-1000/10 bg-gradient-to-br from-blue-900/30 to-gray-900/30 flex items-center justify-center">
                <div className="text-center max-w-4xl px-6 transform transition-all duration-1000 ease-out">
                  <div className="mb-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white animate-fadeInUp">
                      <span
                        className="text-white"
                        style={{
                          textShadow: `6px 6px 0px rgba(0,0,0,0.2)`
                        }}
                      >
                        WELCOME TO<br /> <span className='text-4xl text-white-400'>RBB <span className='text-white-800'>INTRANET</span></span>
                      </span>
                    </h1>
                    <div
                      className="w-32 h-1.5 bg-gradient-to-r from-blue-300 to-red-300 mx-auto rounded-full mb-6"
                      style={{
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                      }}
                    ></div>
                  </div>

                  <p
                    className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fadeInUp delay-100"
                    style={{
                      textShadow: `0px 15px 5px rgba(0,0,0,0.1),
                 10px 20px 5px rgba(0,0,0,0.05),
                 -10px 20px 5px rgba(0,0,0,0.05)
            `
                    }}
                  >
                    Your trusted banking partner for all financial needs
                  </p>

                  <div className="opacity-0 animate-fadeInUp delay-200">

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Custom Navigation */}
          <div className="swiper-button-next !text-white !w-14 !h-14 after:!text-3xl hover:!bg-blue-600/80"></div>
          <div className="swiper-button-prev !text-white !w-14 !h-14 after:!text-3xl hover:!bg-blue-600/80"></div>

          {/* Custom Pagination Container */}
          <div className="custom-pagination !bottom-8"></div>
        </Swiper>
      </section>

      {/* Rest of your content */}
      <section className="container mx-auto py-4 px-4">
        <QuickLinks></QuickLinks>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        /* Swiper Pagination */
        .custom-pagination .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 8px !important;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #3b82f6;
          opacity: 1;
          width: 30px;
          border-radius: 4px;
        }
        
        /* Navigation Arrows */
        .swiper-button-next, 
        .swiper-button-prev {
         
          border-radius: 50%;
          width: 56px !important;
          height: 56px !important;
          transition: all 0.3s ease;
          backdrop-filter: blur(2px);
        }
        .swiper-button-next:after, 
        .swiper-button-prev:after {
          font-size: 1.5rem !important;
          font-weight: bold;
        }
        .swiper-button-next:hover, 
        .swiper-button-prev:hover {
          background: rgba(59, 130, 246, 0.9);
          transform: scale(1.1);
        }
        
        /* Slide Content Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.3s;
        }
        .delay-200 {
          animation-delay: 0.6s;
        }
        
        /* Fade Effect Enhancement */
        .swiper-slide {
          opacity: 0 !important;
          transition: opacity 1000ms ease !important;
        }
        .swiper-slide-active, 
        .swiper-slide-duplicate-active {
          opacity: 1 !important;
        }
        .text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
      `}</style>
    </main>
  );
}