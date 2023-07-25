import Link from "next/link";

interface authHeadingText {
    textH1: string;
    haveAccountText: string;
    buttonText: string;
}

export default function AuthHeadingText(props: authHeadingText) {
    const { textH1, haveAccountText, buttonText } = props;

    return (
        <>
            <span className="text-white Y-H1">{textH1}</span>
            <span className="block mt-6 Y-light-grey text-[15px] font-helvetica font-normal leading-[25px] text-Y-light-grey">
                {haveAccountText} &nbsp;
                <Link className="text-Y-yellow Y-header underline" href={"#"}>
                    {buttonText}
                </Link>
            </span>
        </>
    );
}
