import { isEmptyString } from './emptyStringValidation.js'

export function checkAge(value: number | null) {
    return value !== null && !isEmptyString(String(value)) && value > 1 && value < 151 
}