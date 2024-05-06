import { checkFields } from './fieldsValidation.js'
import { calc } from './calcFunction.js'

import { ref } from 'vue'

interface Gender {
    female: boolean | null;
    male: boolean | null;
}

interface Goal {
    weightLoss: boolean | null;
    keepWeight: boolean | null;
    gainWeight: boolean | null;
}

interface Errors {
    isSuccess: boolean;
    errors: {
        gender: boolean;
        age: boolean;
        height: boolean;
        weight: boolean;
        fat: boolean;
        goal: boolean;
    };
}

export function calculate(
    gender: Gender,
    age: number | null,
    height: number | null,
    weight: number | null,
    fat: number | null,
    goal: Goal,
    everydayActivity: number,
    sportActivity: number
) {
    const fieldsResults = ref<Errors>({
        isSuccess: false,
        errors: {
            gender: false,
            age: false,
            height: false,
            weight: false,
            fat: false,
            goal: false,
        },
    })
    fieldsResults.value = checkFields(gender, age, height, weight, fat, goal)
    if (fieldsResults.value.isSuccess === false) {
        return {
            isErrors: true, errors: fieldsResults.value.errors, calories: 0, proteins: '0', carbs: '0', fat: '0',
        }
    } else {
        const resultsValues = calc(gender, age, height, weight, fat, goal, everydayActivity, sportActivity)
        return {
            isErrors: false, errors: fieldsResults.value.errors, resultsValues
        }
    }
}