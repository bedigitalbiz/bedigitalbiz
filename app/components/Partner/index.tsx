import Image from 'next/image';
import React from 'react';

function Partner() {
    interface Datatype {
        imgSrc: string;
    }
    
    const Partnerdata: Datatype[] = [
        {
            imgSrc: "/assets/partner/cisco.png",
        },
        {
            imgSrc: "/assets/partner/meraki.png",
        },
        {
            imgSrc: "/assets/partner/grandstreme.png",
        },
        {
            imgSrc: "/assets/partner/Hikvision.png",
        },
        {
            imgSrc: "/assets/partner/hiviwe.png",
        },
    ];

    return (
        <div>
            <div className="bg-white">
                <div className="font1 mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h3 className="text-3xl sm:text-4xl text-black text-center m-5">Partner</h3>
                    {/* <div className="border-2 flex justify-center w-60 mx-auto my-5">
                    </div> */}

                    {/* Scrollable section */}
                    <div className="scroll-container rounded-2xl overflow-x-auto">
                        <div className="flex space-x-14">
                            {Partnerdata.map((item, i) => (
                                <div 
                                    key={i} 
                                    className="my-auto flex justify-center rounded-xl  featureShadow min-w-[52px] sm:min-w-[200px]" // ลดขนาดสำหรับมือถือ
                                >
                                    <Image
                                        src={item.imgSrc} 
                                        width={150} // ปรับขนาดภาพให้เล็กลงในมือถือ
                                        height={75} // ปรับให้เหมาะสมกับขนาดมือถือ
                                        className=" mb-2 mx-auto object-contain"
                                        alt={`Partner ${i}`} // เพิ่ม alt สำหรับ SEO และ accessibility
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;
