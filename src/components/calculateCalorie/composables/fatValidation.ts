import { isEmptyString } from './emptyStringValidation.js'

export function checkFat(value: number | null) {
    return value !== null && !isEmptyString(String(value)) && value > 0 && value < 91 
}