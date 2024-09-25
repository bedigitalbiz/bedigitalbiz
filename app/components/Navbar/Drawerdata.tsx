import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}


const navigation: NavigationItem[] = [
  { name: 'Home', href: '../#Home', current: true },
  { name: 'Service', href: '../#Service', current: true },
  { name: 'Site Reference', href: '../#Reference', current: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  return (
    <div className={` opacity-100 text-lg  font1 text-center lg:text-start pt-1  `}>
      <div className="rounded-md max-w-sm w-full mx-auto ">
        <div className="flex-1 space-y-1 py-1">
          <div className="sm:block">
            <div className="space-y-1  ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames( 
                    item.current ? 'bg-gray-300 opacity-50 rounded-xl border-y-2 border-y-white text-white hover:opacity-50 ' : 'hover:text-black hover:opacity-100',
                    'px-1 py-1 text-xs font1 opacity-100 block'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4"></div>
              {/* <button className="bg-white w-full text-midnightblue border border-midnightblue font-medium py-2 px-4 rounded">
                
              </button>
              <button className="bg-midnightblue w-full hover:bg-blue hover:text-white text-white font-medium my-2 py-2 px-4 rounded">
                
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
