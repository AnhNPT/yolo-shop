"use client";
// Splash screen

import Header from "./components/header";
import FooterSplash from "./components/footerSplash";

export default function Splash() {
    return (
        <div className="w-full h-screen">
            <Header></Header>
            <div className="bg-splash-responsive sm:bg-splash bg-no-repeat bg-cover bg-top w-full h-full "></div>
            <FooterSplash></FooterSplash>
        </div>
    );
}
