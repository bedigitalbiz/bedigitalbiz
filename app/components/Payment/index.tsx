
import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* วิดีโอพื้นหลัง */}
            <div className=" vediobg absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <iframe
                    className="absolute top-0 left-0 w-full h-full object-cover video-background"
                    src="https://www.youtube.com/embed/XnGlQoc13U8?autoplay=1&mute=1&loop=1&playlist=XnGlQoc13U8&vq=hd1080"
                    title="YouTube video background"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </div>

             {/* เนื้อหาที่อยู่บนวิดีโอ */}
            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 relative z-10 w-full h-full items-center'>

                <div className='col-span-1 flex justify-center'>
                    {/* <Image src="/assets/payment/payment.png" alt="payment" width={600} height={600} /> */}
                </div>

                <div className='col-span-7 flex flex-col justify-center mb-32'>
                    <h2 className='text-lime-500 text-4xl sm:text-2xl font-semibold text-center lg:text-start lh-143'>
                    ระบบที่ดีได้มาตรฐานปลอดภัย ระดับ World Class มีที่ Be Digital Biz
                    </h2>
                    <h3 className='text-white text-sm font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                    พบกับผลงาน ของพวกเราได้ที่นี่
                    </h3>
                    <Link href={'https://www.youtube.com/watch?v=XnGlQoc13U8&list=PLi2Wwi1ZzXoJZgOWPYSxowrqU5giwS06F'} target="_blank" className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width={"24"} height={"24"} shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 360.726"><path fill="#fff" d="M456.035 10.769c22.031 5.926 39.377 23.386 45.265 45.56C512 96.516 512 180.363 512 180.363s0 83.846-10.7 124.037c-5.888 22.17-23.234 39.631-45.265 45.559-39.928 10.767-200.034 10.767-200.034 10.767s-160.107 0-200.035-10.767C33.937 344.031 16.587 326.57 10.7 304.4 0 264.209 0 180.363 0 180.363S0 96.516 10.7 56.329c5.887-22.174 23.237-39.634 45.266-45.56C95.894 0 256.001 0 256.001 0s160.106 0 200.034 10.769zm-252.398 245.72l133.818-76.122-133.818-76.131v152.253z"/></svg>
                        ดูวิดีโอ
                        </button>
                    </Link>
                </div>

            </div>

            {/* เพิ่มเลเยอร์โปร่งใสสีดำทับบนวิดีโอ */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            
        </div>
    );
}

export default Payment;
