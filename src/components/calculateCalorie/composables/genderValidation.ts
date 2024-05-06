interface Gender {
    female: boolean | null;
    male: boolean | null;
}

export function checkGender(value: Gender) {
    return Object.values(value).some(val => val !== null);
}