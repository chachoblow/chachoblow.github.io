export function perWordSpan(str: string, addClass = true): string {
    const strSplit = str.split(" ");
    let formatted = "";
    for (const word of strSplit) {
        formatted += addClass ? "<span class=''>" : "<span>";
        formatted += "<span>";
        formatted += word;
        formatted += "</span>&nbsp</span>";
    }
    return formatted.substring(0, formatted.length - 12) + "</span>";
}
