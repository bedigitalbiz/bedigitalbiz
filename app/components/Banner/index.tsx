import Image from 'next/image';
import React from 'react';

const Banner = () => {

    return (
        <div id="Home">
        <div className='bg-header banner'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6 contentbanner ">

                <div className='grid grid-cols-1 lg:grid-cols-12  '>


                <div className="col-span-12 flex flex-col justify-center items-center h-screen relative">
                        <h1 className='text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5 slidein'>
                            <span className="text-blue-800 ">Be </span>
                            <span className="text-red">Di</span>
                            <span className="text-pink-600">gi</span>
                            <span className="text-sky">tal</span>
                            <span className="text-lime-500"> Biz</span>
                        </h1>
                        <div className="text-black opacity-75 md:text-lg text-sm  font-normal flex justify-center items-center text-center pt-8 px-2 md:px-20 slidein">
                            We make the innovation happen. A cloud-based network platform with real management experience. Evolve digitally for all customers segment.
                        </div>


                        <div className='pt-8 mx-auto lg:mx-0'>
                            <a href="#Contact">
                                <div className="but1 slidein ">
                                    <button>
                                        <div className="text">ติดต่อ</div>
                                        <div className="blob"></div>
                                        <div className="blob"></div>
                                        <div className="blob"></div>
                                        <div className="blob"></div>
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>


                    {/* <div className='col-span-6 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image src="/assets/banner/nw1.png" alt="nothing" width={1000} height={805} />
                    </div> */}
                </div>
            </div>

        </div>
        </div>
    )
}

export default Banner;
