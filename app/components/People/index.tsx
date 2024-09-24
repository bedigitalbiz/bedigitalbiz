"use client";

import Image from 'next/image';
import { useState } from 'react';

const names = [
    {
        heading: "people1",
        imgSrc: '/assets/people/people1.png',
    },
    {
        heading: "people2",
        imgSrc: '/assets/people/people2.png',
    },
    {
        heading: "people3",
        imgSrc: '/assets/people/people3.png',
    },
    {
        heading: "people4",
        imgSrc: '/assets/people/people4.png',
    },
    {
        heading: "people5",
        imgSrc: '/assets/people/people5.png',
    },
    {
        heading: "people6",
        imgSrc: '/assets/people/people6.jpg',
    },
];


const People = () => {
    const [selectedImage, setSelectedImage] = useState<string>(names[0].imgSrc); // ตั้งค่าเริ่มต้นเป็นภาพแรก

    return (
        <div id="pp" className='pp-bg relative py-10 bg-white2'>
            <div className='mx-auto max-w-7xl sm:py-0 lg:px-8 my-16'>
                <h3 className='text-center text-2xl sm:text-65xl font-black m-10'>ผลงานการให้บริการทั้งหมด</h3>

                 {/* ภาพใหญ่ที่แสดงตามสัดส่วนจริง */}
                 <div className="flex justify-center items-center mb-8">
                    <Image 
                        src={selectedImage} 
                        alt="Selected Image" 
                        width={600} // ค่ากว้างสมมุติ
                        height={400} // ค่าสูงสมมุติ เพื่อคำนวณอัตราส่วนของภาพ
                        className="h-auto max-w-full rounded-lg"
                    />
                </div>

                {/* ภาพเล็กที่ใช้เลือก */}
                <div className="grid grid-cols-6 gap-4">
                    {names.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item.imgSrc}
                                alt={item.heading}
                                width={120}
                                height={50}
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                // เมื่อเอาเคอร์เซอร์ไปวางจะเปลี่ยนภาพที่แสดง
                                onMouseEnter={() => setSelectedImage(item.imgSrc)}
                                // เมื่อคลิกจะเปลี่ยนภาพที่แสดง
                                onClick={() => setSelectedImage(item.imgSrc)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default People;
