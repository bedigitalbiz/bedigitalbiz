import Image from 'next/image';
import Link from 'next/link';



const Service = () => {
    return (
    <div id="Service" className='bg-white py-20'>
    <div className=" mx-auto max-w-2xl  py-50 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32  '>

            <div className='col-span-5 flex justify-center '>
                <Image className='rounded-2xl' src="/assets/pricing/ser1.jpg" alt="nothing" width={800} height={505} />
            </div>

            <div className='col-span-7 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                <h1 className='text-sky text-xl sm:text-4xl text-center lg:text-start lh-143'> Be Digital Biz หาคำตอบไว้ให้คุณแล้ว</h1>
                <div className='hidden md:block border-2 border-sky w-24'> </div>
                <h3 className='text-black text-base font1 text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>ครบจบทุกปัญหา ให้เช่า จำหน่าย ระบบNetwork,โทรศัพท์ IP Phone , Server ,กล้องวงจรปิด IP Camera ,ระบบสายไฟเบอร์ออฟติก และอุปกรณ์ IT ทุกชนิด</h3>
                <a href="commingsoon">
                    <div className="but1 text-center m-8">
                        <button>
                            <div className="text">ดูเพิ่มเติม</div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                        </button>
                        </div>
                </a>
            </div>

        </div>
    </div>
</div>
    )
}


export default Service;
