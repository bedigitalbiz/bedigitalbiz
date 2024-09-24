"use client"; // ใช้เพื่อบอกว่าเป็น Client Component

import Image from "next/image";
import { useRef, useState } from "react"; // นำเข้า useRef และ useState
import Link from 'next/link';


interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
    href: string; // เพิ่ม href
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/school/THK.jpg",
        heading: "โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/",
    },
    {
        imgSrc: "/assets/school/SKR.png",
        heading: "โรงเรียนสวนกุหลาบวิทยาลัย รังสิต",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
    },
    {
        imgSrc: "/assets/school/SKW.jpg",
        heading: "โรงเรียนศรีสะเกษวิทยาลัย",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/"
    },
    {
        imgSrc: "/assets/school/SIRIN.jpg",
        heading: "โรงเรียนสิรินธร",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/"
    },
    {
        imgSrc: "/assets/logo/BD.png",
        heading: "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/"
    },
    {
        imgSrc: "/assets/school/THK.jpg",
        heading: "โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/",
    },
    {
        imgSrc: "/assets/school/SKR.png",
        heading: "โรงเรียนสวนกุหลาบวิทยาลัย รังสิต",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/",
    },
    {
        imgSrc: "/assets/school/SKW.jpg",
        heading: "โรงเรียนศรีสะเกษวิทยาลัย",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/"
    },
    {
        imgSrc: "/assets/school/SIRIN.jpg",
        heading: "โรงเรียนสิรินธร",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/"
    },
    {
        imgSrc: "/assets/logo/BD.png",
        heading: "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        href: 'commingsoon',
        // button: "/"
    },
    
]

const Features = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (container) {
            setIsDragging(true);  // เริ่มลาก
            setStartX(e.pageX - container.offsetLeft);  // ตำแหน่งเริ่มต้นของการคลิก
            setScrollLeft(container.scrollLeft);  // ตำแหน่งการเลื่อนในขณะนั้น
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return; // ไม่เลื่อนถ้าไม่ได้คลิกค้างไว้
        e.preventDefault();
        const container = containerRef.current;
        if (container) {
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // ความเร็วในการเลื่อน
            container.scrollLeft = scrollLeft - walk; // เลื่อนตามการคลิกและลาก
        }
    };

    const handleMouseUp = () => setIsDragging(false); // ปล่อยคลิกหยุดเลื่อน
    const handleMouseLeave = () => setIsDragging(false); // ถ้าลากเมาส์ออกจากขอบเขตให้หยุดเลื่อน

    return (
        <div className="bg-white2" id="Reference">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-4xl font-semibold text-black text-center m-10">Site Reference</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center mx-10 my-10">
                    ขอขอบคุณ ลูกค้าทุกท่าน ที่ได้ไว้วางใจในบริการ ด้วยดีเสมอมา
                </h5>

                <div
                    className="scroll-container rounded-2xl overflow-x-scroll"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}   // เริ่มคลิก
                    onMouseMove={handleMouseMove}   // ระหว่างลาก
                    onMouseUp={handleMouseUp}       // ปล่อยคลิก
                    onMouseLeave={handleMouseLeave} // ออกจากขอบเขต
                    style={{ cursor: isDragging ? "grabbing" : "grab" }} // เปลี่ยน cursor เมื่อคลิก
                >
                    <div className="scroll-content flex space-x-4">
                        {Aboutdata.map((item, i) => (
                            <Link key={i} href={item.href} passHref>
                                <div key={i} className="card my-4 rounded-2xl p-5 featureShadow">
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-2 mx-auto" />
                                    <h3 className="text-xs md:text-sm text-black mt-2 text-center">{item.heading}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;