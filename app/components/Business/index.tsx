import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        <div id='Business'>
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 p-20">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='font1 col-span-7 flex flex-col justify-center '>

                    <h2 className='text-lime-500 text-xl sm:text-2xl text-center lg:text-start lh-143 py-4'>Be Digital Biz มอบประสบการณ์การทํางานแบบไฮบริดที่ราบรื่น</h2>
                    <div className='hidden md:block border-2 border-lime-500 w-24'></div>
                    <h3 className='text-black text-base text-center lg:text-start lh-173 opacity-75 pt-3'>การเชื่อมต่อที่เชื่อถือได้และปลอดภัยสามารถเข้าถึงได้ไม่ว่าคุณจะอยู่ที่ไหน วางใจในเทคโนโลยี Meraki ในสํานักงาน ที่บ้าน หรือออกนอกบ้านบนถนน</h3>

                    {/* <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link> */}
                </div>

                <div id='b1' className='col-span-5 flex justify-center mt-10 lg:mt-0'>
                    <Image src="/assets/business/OWING21.png" alt="business" width={500} height={605} />
                </div>

            </div>
        </div>
        </div>
    )
}

export default Business;
