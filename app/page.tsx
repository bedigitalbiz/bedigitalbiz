import Banner from './components/Banner/index';
import Business from './components/Business/index';
import Features from './components/Features/index';
import Mode from './components/Navbar/Mode';
import Payment from './components/Payment/index';
import People from './components/People/index';
import Service from './components/Pricing';

export default function Home() {
  return (
    <main>
      <Mode /> {/* ปุ่มสำหรับเปลี่ยนโหมดสี */}
      <Banner />
      <Business />
      <Service />
      <Features />
      {/* <People /> */}
      
      {/* <Payment /> */}
      
    </main>
  )
}
