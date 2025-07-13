'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[80vh] w-full"
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-6">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to RBB</h2>
                  <p className="text-xl md:text-2xl mb-8">Your trusted banking partner for all financial needs</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src="/images/rbb.jpg"
                alt="Digital Banking"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-6">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Digital Banking Solutions</h2>
                  <p className="text-xl md:text-2xl mb-8">Experience seamless banking with our digital platforms</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src="/images/RBBL.webp"
                alt="Business Loans"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-6">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Business Loans</h2>
                  <p className="text-xl md:text-2xl mb-8">Grow your business with our competitive loan options</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl"></div>
          <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl"></div>
        </Swiper>
      </section>

      {/* Rest of your content */}
      <section className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </section>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb;
          opacity: 1;
        }
        .swiper-button-next, 
        .swiper-button-prev {
          background: rgba(0,0,0,0.3);
          border-radius: 50%;
          padding: 20px;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover, 
        .swiper-button-prev:hover {
          background: rgba(0,0,0,0.5);
        }
      `}</style>
    </main>
  );
}