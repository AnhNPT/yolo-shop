import Image from "next/image";

export default function Header() {
    return (
        <div className="pt-6 container header flex items-center justify-between sticky top-0 left-0 right-0 w-full bg-transparent px-4 md:px-0">
            <div className="col-1">
                <Image alt="" className="cursor-pointer" src={"/images/hamburger.svg"} width={56} height={1}></Image>
            </div>
            <div className="col-2 gap-[90px] hidden md:flex">
                <span className="uppercase text-Y-black Y-text font-bold cursor-pointer">Women</span>
                <span className="uppercase text-Y-black Y-text font-bold cursor-pointer">Men</span>
                <span className="uppercase text-Y-black Y-text font-bold cursor-pointer">Kids</span>
                <span className="uppercase text-Y-black Y-text font-bold cursor-pointer">Gifts</span>
            </div>
            <div className="col-3 flex gap-8">
                <Image alt="" className="cursor-pointer" src={"/images/search.svg"} width={24} height={1}></Image>
                <Image alt="" className="cursor-pointer" src={"/images/cart.svg"} width={24} height={1}></Image>
                <Image alt="" className="cursor-pointer" src={"/images/user.svg"} width={24} height={1}></Image>
            </div>
        </div>
    );
}
