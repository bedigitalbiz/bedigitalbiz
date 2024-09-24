import Image from 'next/image';
import Link from 'next/link';



const Service = () => {
    return (
    <div id="Service" className='bg-white2'>
    <div className=" mx-auto max-w-2xl  py-50 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32  '>

            <div className='col-span-6 flex justify-center'>
                <Image src="/assets/banner/nn3.png" alt="nothing" width={1000} height={705} />
            </div>

            <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                <h1 className='text-sky text-sm sm:text-xl font-semibold text-center lg:text-start lh-143'>ไม่ต้องเสียเวลา เสียเงิน ลองผิด ลองถูก กับระบบอินเตอร์เน็ตระบบ Network และระบบ WiFi อีกต่อไป Be Digital Biz หาคำตอบไว้ให้คุณแล้ว ครบจบทุกปัญหา</h1>
                <h3 className='text-black text-base font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>Cisco Meraki ให้เช่า จำหน่าย ระบบNetwork,โทรศัพท์ IP Phone , Server ,กล้องวงจรปิด IP Camera ,ระบบสายไฟเบอร์ออฟติก และอุปกรณ์ IT ทุกชนิด</h3>
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
