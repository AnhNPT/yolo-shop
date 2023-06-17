import Image from "next/image";
import Link from "next/link";
export default function FooterSplash() {
    return (
        <div className="container fixed bottom-0 left-0 right-0 w-full bg-transparent text-center pb-10">
            <span className="Y-text text-Y-black block px-4 sm:px-0">Yolo is the leading destination for stylish clothes, everyday carry essentials & more</span>
            <div className="mt-8 cursor-pointer rounded-[40px] border-2 border-Y-black flex items-center mx-auto px-4 py-3 w-fit gap-1.5">
                <span className="uppercase Y-button">Start Now</span>
                <Image className="" alt="" src={"/images/big-arrow-right.svg"} width={24} height={1}></Image>
            </div>
            <div className="flex justify-center items-center mt-12 gap-8">
                <Image alt="" src={"/images/short-horizontal-line.svg"} width={50} height={1}></Image>
                <div className="flex gap-8">
                    <Link href={"#"}>
                        <Image alt="" src={"/images/ins.svg"} width={24} height={1}></Image>
                    </Link>
                    <Link href={"#"}>
                        <Image alt="" src={"/images/fb.svg"} width={24} height={1}></Image>
                    </Link>
                    <Link href={"#"}>
                        <Image alt="" src={"/images/twitter.svg"} width={24} height={1}></Image>
                    </Link>
                </div>
                <Image alt="" src={"/images/short-horizontal-line.svg"} width={50} height={1}></Image>
            </div>
            <span className="mt-6 block Y-header uppercase text-Y-black">Yolo © 2023. All rights reserved</span>
        </div>
    );
}
