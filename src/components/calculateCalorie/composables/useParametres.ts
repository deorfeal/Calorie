import { ref } from 'vue'
import { calculate } from './calculate'

export const useParametres = () => {

    // Initializing reactive variables

    interface Gender {
        female: boolean | null;
        male: boolean | null;
    }

    interface Goal {
        weightLoss: boolean | null;
        keepWeight: boolean | null;
        gainWeight: boolean | null;
    }


    interface FieldsErrors {
        age: boolean | null;
        fat: boolean | null;
        gender: boolean | null;
        goal: boolean | null;
        height: boolean | null;
        weight: boolean | null;
    }


    const gender = ref<Gender>({ female: null, male: null });
    const age = ref<number | null>(null);
    const height = ref<number | null>(null);
    const weight = ref<number | null>(null);
    const fat = ref<number | null>(null);
    const everydayActivity = ref(0);
    const sportActivity = ref(0);
    const goal = ref<Goal>({ weightLoss: null, keepWeight: null, gainWeight: null });
    const isResetSelect = ref({ isTrue: false });
    const fieldsErrors = ref<FieldsErrors>({ age: null, fat: null, gender: null, goal: null, height: null, weight: null });

    // Function to unset field errors
    function unsetFieldsErrors() {
        fieldsErrors.value = { age: null, fat: null, gender: null, goal: null, height: null, weight: null };
    }

    // Function to toggle gender selection
    const toggleGender = (selectedGender: string) => {
        if (selectedGender === 'female') {
            gender.value.male = false;
        } else if (selectedGender === 'male') {
            gender.value.female = false;
        }
    };

    // Function to toggle goal selection
    const toggleGoal = (selectedGoal: string) => {
        if (selectedGoal === 'weightLoss') {
            goal.value.keepWeight = false;
            goal.value.gainWeight = false;
        } else if (selectedGoal === 'keepWeight') {
            goal.value.weightLoss = false;
            goal.value.gainWeight = false;
        } else if (selectedGoal === 'gainWeight') {
            goal.value.keepWeight = false;
            goal.value.weightLoss = false;
        }
    };

    // Function to insert selected value into corresponding variable
    function insertSelectValue(selectedElementId: number, parentId: number) {
        isResetSelect.value.isTrue = false;
        if (parentId == 0) {
            everydayActivity.value = selectedElementId;
        } else {
            sportActivity.value = selectedElementId;
        }
    };

    // Function to reset all values
    function resetValues() {
        gender.value = { female: null, male: null };
        age.value = null;
        height.value = null;
        weight.value = null;
        fat.value = null;
        everydayActivity.value = 0;
        sportActivity.value = 0;
        goal.value = { weightLoss: null, keepWeight: null, gainWeight: null };
        isResetSelect.value.isTrue = true;
        unsetFieldsErrors();
    }

    // Function to calculate and emit results
    function getCalcResults() {
        const result = calculate(gender.value, age.value, height.value, weight.value, fat.value, goal.value, everydayActivity.value, sportActivity.value);
        if (result.isErrors) {
            fieldsErrors.value = result.errors;
        } else {
            return result.resultsValues
        }
    }

    return {
        gender,
        age,
        height,
        weight,
        fat,
        goal,
        isResetSelect,
        fieldsErrors,
        toggleGender,
        toggleGoal,
        insertSelectValue,
        resetValues,
        getCalcResults,
        unsetFieldsErrors,
    }
}

