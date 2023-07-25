import { ReduxProvider } from "@/redux/provider";
import "../../styles/globals.css";
import localFont from "next/font/local";

const coco = localFont({
    variable: "--font-coco-gothic",
    src: "../../public/fonts/coco-gothic/coco-gothic.ttf",
});

const helvetica = localFont({
    variable: "--font-helvetica",
    src: "../../public/fonts/helvetica/helvetica.ttf",
});

export const metadata = {
    title: "Yolo Shop",
    description: "Create by AnhNPT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${coco.variable} ${helvetica.variable} page-start`}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
