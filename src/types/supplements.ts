import stc from "string-to-color";

export const keyCheck = <T extends string>(record: Record<T, any>, key: string): key is T => {
    if (Object.keys(record).includes(key)) return true;
    else return false;
};

export const colour = (...colours: string[]) => ({ "--_colour": stc([...colours, "black"]) });

export const numToMonth = (num: number) =>
    [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ][num - 1] ?? "Unknown";
