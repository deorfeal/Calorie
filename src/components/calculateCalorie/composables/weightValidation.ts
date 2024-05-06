import { isEmptyString } from './emptyStringValidation.js'

export function checkWeight(value: number | null) {
    return value !== null && !isEmptyString(String(value)) && value > 4 && value < 501
}