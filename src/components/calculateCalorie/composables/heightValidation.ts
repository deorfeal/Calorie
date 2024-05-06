import { isEmptyString } from './emptyStringValidation.js'

export function checkHeight(value: number | null) {
    return value !== null && !isEmptyString(String(value)) && value > 49 && value < 251
}