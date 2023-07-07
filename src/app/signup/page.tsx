"use client";

import Header from "../components/header";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

type Inputs = {
    fName: string;
    eMail: string;
    password: string;
};

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // State
    const [backgroundColorHex, setBackgroundColorHex] = useState<string>("");
    const [halfBgImage, checkHalfBgImage] = useState<string>("");
    const [eyeImg, toggleEyeImg] = useState<boolean>(false);
    // Ref
    const elementRef = useRef<HTMLDivElement>(null);
    const halfBgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        const elment2 = halfBgRef.current;

        if (element) {
            const computedStyles = window.getComputedStyle(element);
            const backgroundColor = computedStyles.backgroundColor;
            const hexColor = rgbToHex(backgroundColor);
            setBackgroundColorHex(hexColor);
        }

        if (elment2) {
            const backgroundImage = window.getComputedStyle(elment2).getPropertyValue("background-image");
        }
    }, []);

    // Convert Hex to RGB
    const rgbToHex = (color: string): string => {
        const rgbValues = color.match(/\d+/g);

        if (rgbValues) {
            const r = parseInt(rgbValues[0]);
            const g = parseInt(rgbValues[1]);
            const b = parseInt(rgbValues[2]);

            const hex = ((r << 16) | (g << 8) | b).toString(16);

            return `#${hex.padStart(6, "0")}`;
        }

        return "";
    };

    return (
        <div ref={elementRef} className="w-screen h-screen flex bg-[#1F2128]">
            <Header halfBgImage={halfBgImage} backgroundColor={backgroundColorHex}></Header>
            <div className="flex w-full h-screen gap-5">
                <div ref={halfBgRef} className="bg-none sm:bg-splash-half w-1/2 bg-no-repeat bg-cover"></div>
                <div className=" pt-20 w-1/2 ml-[73px] mt-[136px]">
                    <span className="text-white Y-H1">Sign Up</span>
                    <span className="block mt-6 Y-light-grey text-[15px] font-helvetica font-normal leading-[25px] text-Y-light-grey">
                        Already have an account? &nbsp;
                        <Link className="text-Y-yellow Y-header underline" href={"#"}>
                            Sign In
                        </Link>
                    </span>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-6">
                        {/* FName */}
                        <div className="flex flex-col w-1/2">
                            <label className="text-Y-grey-1 Y-small_text mb-2">Your full name</label>
                            <input
                                className="iconFname relative Y-text outline-none text-white bg-[#444A5E] border-[#444A5E] border rounded-[40px] pl-12 px-4 py-3"
                                type="text"
                                defaultValue=""
                                {...register("fName", {
                                    required: true,
                                })}
                            />
                            {errors.fName && <span className="mt-2 block Y-small_text text-Y-red">Please enter your full name</span>}
                        </div>
                        {/* Email */}
                        <div className="flex flex-col w-1/2">
                            <label className="text-Y-grey-1 Y-small_text mb-2">Your email</label>
                            <input
                                className="iconEmail relative Y-text outline-none text-white bg-[#444A5E] border-[#444A5E] border rounded-[40px] pl-12 px-4 py-3"
                                type="text"
                                defaultValue=""
                                {...register("eMail", {
                                    required: true,
                                    pattern: /([a-z0-9]+@[a-z]+\.[a-z]{2,3})/g,
                                })}
                            />
                            {errors.eMail && <span className="mt-2 block Y-small_text text-Y-red">Please enter your email</span>}
                        </div>
                        {/* Password */}
                        <div className="flex flex-col w-1/2">
                            <label className="text-Y-grey-1 Y-small_text mb-2">Your password</label>
                            <input
                                className="iconFname relative Y-text outline-none text-white bg-[#444A5E] border-[#444A5E] border rounded-[40px] pl-12 px-4 py-3"
                                type="password"
                                defaultValue=""
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[.@!#$%&]).{6,}$/g,
                                })}
                            />
                            {errors.password && <span className="mt-2 block Y-small_text text-Y-red">Requires a password of more than 6 characters, including numbers and special characters</span>}
                        </div>
                        <button className="cursor-pointer rounded-[40px] border-2 bg-Y-yellow border-Y-black flex items-center px-4 py-3 w-fit gap-4">
                            <span className="uppercase Y-button text-Y-dark-mode">sign up</span>
                            <Image className="" alt="" src={"/images/big-arrow-right.svg"} width={24} height={1}></Image>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
