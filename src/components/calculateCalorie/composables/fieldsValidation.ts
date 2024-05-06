import { ref } from 'vue'; // Импортируем ref из Vue

import { checkGender } from './genderValidation.js';
import { checkGoal } from './goalValidation.js';
import { checkAge } from './ageVaildation.js';
import { checkHeight } from './heightValidation.js';
import { checkWeight } from './weightValidation.js';
import { checkFat } from './fatValidation.js';

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
    gender: boolean;
    age: boolean;
    height: boolean;
    weight: boolean;
    fat: boolean;
    goal: boolean;
}

export function checkFields(
    gender: Gender,
    age: number | null,
    height: number | null,
    weight: number | null,
    fat: number | null,
    goal: Goal,
) {
    const errors = ref<Errors>({
        gender: false,
        age: false,
        height: false,
        weight: false,
        fat: false,
        goal: false
    }); // Создаем объект для хранения ошибок

    // Проверяем выбор пола
    const genderSelected = checkGender(gender);
    errors.value.gender = !genderSelected ? true : false;

    // Проверяем параметры
    const ageError = checkAge(age);
    const heightError = checkHeight(height);
    const weightError = checkWeight(weight);
    const fatError = checkFat(fat);
    const parametersSelected = ageError && heightError && weightError && fatError;

    // Если есть ошибки в параметрах, добавляем их в объект ошибок
    errors.value.age = !ageError ? true : false;
    errors.value.height = !heightError ? true : false;
    errors.value.weight = !weightError ? true : false;
    errors.value.fat = !fatError ? true : false;

    // Проверяем цели
    const goalError = checkGoal(goal);
    errors.value.goal = !goalError ? true : false;

    // Если все проверки прошли успешно, возвращаем 'Success', иначе возвращаем объект ошибок
    return (genderSelected && parametersSelected && goalError) ? { isSuccess: true, errors: errors.value } : { isSuccess: false, errors: errors.value };
}
