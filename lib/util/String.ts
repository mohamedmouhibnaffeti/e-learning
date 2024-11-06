
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function subString(str: string, maxlen: number): string {
    return str.length > maxlen ? str.substring(0, maxlen) + "..." : str;
}
