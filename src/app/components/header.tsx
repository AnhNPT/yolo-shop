import Image from "next/image";
import { useAppSelector } from "@/redux/features/auth-slice";
export default function Header() {
    const bgHexColor = useAppSelector((state) => state.authReducer.value.backgroundColorHex);

    return (
        <>
            <div className="z-[1] -mb-20 pt-6 container header flex items-center justify-between top-0 left-0 right-0 w-full bg-transparent px-4 md:px-0">
                <div className="col-1">
                    <Image alt="" className="cursor-pointer" src={"/images/hamburger.svg"} priority={true} width={56} height={1}></Image>
                </div>
                <div className="col-2 gap-[90px] hidden md:flex">
                    <span className={`uppercase Y-text font-bold cursor-pointer`}>Women</span>
                    <span className={`uppercase Y-text font-bold cursor-pointer`}>Men</span>
                    <span className={`${bgHexColor === "#1f2128" ? "text-white" : "text-Y-black"} uppercase Y-text font-bold cursor-pointer`}>Kids</span>
                    <span className={`${bgHexColor === "#1f2128" ? "text-white" : "text-Y-black"} uppercase Y-text font-bold cursor-pointer`}>Gifts</span>
                </div>
                <div className="col-3 flex gap-8">
                    <Image alt="" className={`${bgHexColor === "#1f2128" ? "iconWhite" : ""} cursor-pointer`} src={"/images/search.svg"} width={24} height={1}></Image>
                    <Image alt="" className={`${bgHexColor === "#1f2128" ? "iconWhite" : ""} cursor-pointer`} src={"/images/cart.svg"} width={24} height={1}></Image>
                    <Image alt="" className={`${bgHexColor === "#1f2128" ? "iconWhite" : ""} cursor-pointer`} src={"/images/user.svg"} width={24} height={1}></Image>
                </div>
            </div>
        </>
    );
}