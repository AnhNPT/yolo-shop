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

export default rgbToHex;
