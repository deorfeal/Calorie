export function isEmptyString(value: string | null) {
    return value === null || (typeof value === 'string' && value.trim() === '');
}