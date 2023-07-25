/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "../components/header";
import SignUpForm from "../components/auth/signupForm";

import { useRef, useEffect } from "react";
import { setNewBgHex } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import rgbToHex from "@/utils/rgbToHex";

export default function SignUp() {
    const dispatch = useDispatch<AppDispatch>();

    // Ref
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const computedStyles = window.getComputedStyle(element);
            const backgroundColor = computedStyles.backgroundColor;
            const hexColor = rgbToHex(backgroundColor);
            dispatch(setNewBgHex(hexColor));
        }
    }, []);

    return (
        <>
            <div ref={elementRef} className="flex w-full flex-col h-full bg-[#1F2128]">
                <Header></Header>
                <SignUpForm></SignUpForm>
            </div>
        </>
    );
}