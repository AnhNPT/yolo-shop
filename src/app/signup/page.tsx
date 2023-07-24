"use client";

import Header from "../components/header";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { setNewBgHex } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

type Inputs = {
    fName: string;
    email: string;
    password: string;
};

export default function SignUp() {
    const dispatch = useDispatch<AppDispatch>();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // Ref
    const elementRef = useRef<HTMLDivElement>(null);
    const halfBgRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const computedStyles = window.getComputedStyle(element);
            const backgroundColor = computedStyles.backgroundColor;
            const hexColor = rgbToHex(backgroundColor);
            dispatch(setNewBgHex(hexColor));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div ref={elementRef} className="flex w-full flex-col h-full bg-[#1F2128]">
                <Header></Header>
                <div className="w-full h-full flex min-h-screen">
                    <div ref={halfBgRef} className="bg-none pt-20 sm:bg-splash-half w-1/2 bg-no-repeat bg-cover"></div>
                    <div className="flex flex-col pt-20 w-1/2 ml-[73px] mt-[136px]">
                        <span className="text-white Y-H1">Sign Up</span>
                        <span className="block mt-6 Y-light-grey text-[15px] font-helvetica font-normal leading-[25px] text-Y-light-grey">
                            Already have an account? &nbsp;
                            <Link className="text-Y-yellow Y-header underline" href={"#"}>
                                Sign In
                            </Link>
                        </span>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-6">
                            <div className="flex flex-col w-1/2">
                                <label className="text-Y-grey-1 Y-small_text mb-2">Your full name</label>
                                <input
                                    className="iconFname relative Y-text outline-none text-white bg-[#444A5E] border-[#444A5E] border rounded-[40px] pl-12 px-4 py-3"
                                    type="text"
                                    autoComplete=""
                                    defaultValue=""
                                    {...register("fName", {
                                        required: true,
                                    })}
                                />
                                {errors.fName && <span className="mt-2 block Y-small_text text-Y-red">Please enter your full name</span>}
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label className="text-Y-grey-1 Y-small_text mb-2">Your email</label>
                                <input
                                    className="iconEmail relative Y-text outline-none text-white bg-[#444A5E] border-[#444A5E] border rounded-[40px] pl-12 px-4 py-3"
                                    type="text"
                                    defaultValue=""
                                    autoComplete=""
                                    {...register("email", {
                                        required: true,
                                        pattern: /([a-z0-9]+@[a-z]+\.[a-z]{2,3})/g,
                                    })}
                                />
                                {errors.email && <span className="mt-2 block Y-small_text text-Y-red">Please enter your email</span>}
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label className="text-Y-grey-1 Y-small_text mb-2">Your password</label>
                                <input
                                    className="iconFname relative Y-text outline-none text-white bg-[#444A5E] border-[#444A5E] border rounded-[40px] pl-12 px-4 py-3"
                                    type="password"
                                    autoComplete=""
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
        </>
    );
}
