export function lerp(a: number, b: number, n: number): number {
    return (1 - n) * a + n * b;
}

export function map(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
