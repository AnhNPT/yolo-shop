/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                coco: ["var(--font-coco-gothic)"],
                helvetica: ["var(--font-helvetica)"],
            },
            colors: {
                "Y-green": "#34D39A",
                "Y-red": "#FF2842",
                "Y-grey": "#F2F2F2",
                "Y-white": "#fff",
                "Y-grey-1": "#D3E7EF",
                "Y-dark-grey": "#7E959E",
                "Y-black": "#2E313C",
                "Y-yellow": "#F9E900",
                "Y-light-grey": "#FBFBFB",
                "Y-dark-mode": "#1F2128",
                "Y-grey_line": "#444A5E",
            },
            dropShadow: {
                shadow: "0px 0px 30px rgba(0, 0, 0, 0.07);",
                "shadow-big": "0px 0px 50px rgba(0, 0, 0, 0.08);",
            },
            backgroundImage: {
                'splash': "url('/images/image.png')",
                'splash-responsive': "url('/images/image-responsive.png')",
                'splash-half': "url('/images/half-background-img.png')"
            }
        },
    },
    plugins: [],
};
