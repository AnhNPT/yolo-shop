"use client";

import Header from "../components/header";
import { useEffect, useRef, useState } from "react";

export default function SignUp() {
    const [backgroundColorHex, setBackgroundColorHex] = useState<string>("");
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const computedStyles = window.getComputedStyle(element);
            const backgroundColor = computedStyles.backgroundColor;
            const hexColor = rgbToHex(backgroundColor);
            // console.log(hexColor);
            setBackgroundColorHex(hexColor);
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
            <Header backgroundColor={backgroundColorHex}></Header>
        </div>
    );
}
