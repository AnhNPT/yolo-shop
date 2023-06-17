// Splash screen

import Image from "next/image";
import Header from "./components/header";
import FooterSplash from "./components/footerSplash";

export default function Splash() {
    return (
        <div className="bg-splash w-screen h-screen bg-no-repeat bg-cover bg-top">
            <Header></Header>
            <FooterSplash></FooterSplash>
        </div>
    );
}
