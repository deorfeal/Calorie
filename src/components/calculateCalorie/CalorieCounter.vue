<script setup>
// Importing custom components and calculation function
import CustomSelect from "../custom/CustomSelect.vue";
import CustomButton from "../custom/CustomButton.vue";
import CustomInput from "../custom/CustomInput.vue";
import { useParametres } from './composables/useParametres'

const {
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
    unsetFieldsErrors
} = useParametres()

const emit = defineEmits(['sendCalorieResult']);

const reset = () => {
    resetValues()
    emit('sendCalorieResult', { "calories": 0, "proteins": 0, "carbs": 0, "fat": 0 });
}

const calc = () => {
    const resultOfCalc = getCalcResults()
    if (resultOfCalc) {
        emit('sendCalorieResult', resultOfCalc), unsetFieldsErrors();
    }
}

</script>

<template>
    <div class="calculator__counter counter">
        <h2 class="counter__title">
            Insert your details
        </h2>
        <form class="counter__form counter-form" action="#" method="post">
            <div class="counter-form__wrapper">
                <div class="counter-form__row counter-row counter-row--three">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="" :class="{ 'error': fieldsErrors.gender }">
                            Gender:
                        </label>
                        <CustomButton class="counter-item__button" :class="{ 'btn--active': gender.female }"
                            @click="toggleGender('female')">
                            Female
                            <input class="counter-item__radio" type="radio" v-model="gender.female" :value="true">
                        </CustomButton>
                    </div>
                    <div class="counter-row__item counter-item">
                        <CustomButton class="counter-item__button" :class="{ 'btn--active': gender.male }"
                            @click="toggleGender('male')">
                            Male
                            <input class="counter-item__radio" type="radio" v-model="gender.male" :value="true">
                        </CustomButton>
                    </div>
                </div>
                <div class="counter-form__row counter-row counter-row--two">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="" :class="{ 'error': fieldsErrors.age }">
                            Age
                        </label>
                        <CustomInput class="counter-item__input" type="number" v-model="age" />
                    </div>
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="" :class="{ 'error': fieldsErrors.height }">
                            Height (CM)
                        </label>
                        <CustomInput class="counter-item__input" type="number" v-model="height" />
                    </div>
                </div>
            </div>
            <div class="counter-form__wrapper">
                <div class="counter-form__row counter-row">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="" :class="{ 'error': fieldsErrors.weight }">
                            Body weight (kg)
                        </label>
                        <CustomInput class="counter-item__input" type="number" v-model="weight" />
                    </div>
                </div>
                <div class="counter-form__row counter-row">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="" :class="{ 'error': fieldsErrors.fat }">
                            Body fat (%)
                        </label>
                        <CustomInput class="counter-item__input" type="number" v-model="fat" />
                    </div>
                </div>
            </div>
            <div class="counter-form__wrapper">
                <div class="counter-form__row counter-row">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="">
                            Everyday activity (except sports)
                        </label>
                        <CustomSelect :options="['little active (only sitting)',
                            'somewhat active (mostly sitting)',
                            'active (much running)',
                            'very active (hard physical work)']" :default="'little active (only sitting)'"
                            class="counter-item__select select" :selectId="0" @input="insertSelectValue"
                            :reset="isResetSelect" />
                    </div>
                </div>
                <div class="counter-form__row counter-row">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="">
                            Sport per week
                        </label>
                        <CustomSelect :options="['No sports', '1×', '2x', '3x', '4x', '5x', '6x', '7× (or more)']"
                            :default="'No sports'" class="counter-item__select select" :selectId="1"
                            @input="insertSelectValue" :reset="isResetSelect" />
                    </div>
                </div>
            </div>
            <div class="counter-form__wrapper">
                <div class="counter-form__row counter-row counter-row--three counter-row--goal">
                    <div class="counter-row__item counter-item">
                        <label class="counter-item__label" for="" :class="{ 'error': fieldsErrors.goal }">
                            Goal:
                        </label>
                        <CustomButton class="counter-item__button" :class="{ 'btn--active': goal.weightLoss }"
                            @click="toggleGoal('weightLoss')">
                            Weight loss
                            <input class="counter-item__radio" type="radio" v-model="goal.weightLoss" :value="true">
                        </CustomButton>
                    </div>
                    <div class="counter-row__item counter-item">
                        <CustomButton class="counter-item__button" :class="{ 'btn--active': goal.keepWeight }"
                            @click="toggleGoal('keepWeight')">
                            Keep weight
                            <input class="counter-item__radio" type="radio" v-model="goal.keepWeight" :value="true">
                        </CustomButton>
                    </div>
                    <div class="counter-row__item counter-item">
                        <CustomButton class="counter-item__button" :class="{ 'btn--active': goal.gainWeight }"
                            @click="toggleGoal('gainWeight')">
                            Gain weight
                            <input class="counter-item__radio" type="radio" v-model="goal.gainWeight" :value="true">
                        </CustomButton>
                    </div>
                </div>
                <div class="counter-form__row counter-row counter-row--three">
                    <div class="counter-row__item counter-item">
                        <CustomButton class="counter-item__button" @click="reset()">
                            Reset
                        </CustomButton>
                    </div>
                    <div class="counter-row__item counter-item">
                        <CustomButton class="counter-item__button" @click="calc()">
                            <span>
                                Calculate
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22"
                                fill="none">
                                <path d="M1 10.7243L23.0588 10.7243" stroke="#FAFAF9" stroke-width="1.8"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.3383 1.07604L24.217 10.8028L14.3383 20.5295" stroke="#FAFAF9"
                                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </CustomButton>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
.counter {
    border-radius: 12px;
    border: 1px solid #4B515A;
    padding: 40px;

    &__title {
        color: #FAFAF9;
        font-size: 40px;
        font-weight: 600;
        line-height: 50px;
        letter-spacing: 0.3px;
        margin-bottom: 32px;
    }

}

.counter-form {
    display: flex;
    flex-direction: column;
    gap: 32px;

    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }

}

.counter-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    &--two {
        grid-template-columns: 1fr 1fr;
    }

    &--three {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.counter-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    &__label {
        color: #FAFAF9;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
        transition: color 0.3s;
    }

    &__label.error {
        color: #FF0000;
    }

    &__button {
        position: relative;
    }

    &__radio {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }

    &__input {}

    &__select {}
}

@media (max-width: 1550px) {
    .counter-row {
        &--three {
            grid-template-columns: 1fr 1fr;
        }

        &--goal {
            .counter-item {
                &:nth-child(1) {
                    grid-area: 1 / 1 / 2 / 2;
                }

                &:nth-child(2) {
                    grid-area: 2 / 1 / 3 / 2;
                }

                &:nth-child(3) {
                    grid-area: 2 / 2 / 3 / 3;
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .counter__title {
        font-size: 36px;
        line-height: 42px;
    }
}

@media (max-width: 800px) {
    .counter-form__wrapper {
        grid-template-columns: 1fr;
    }

    .counter-row {
        &--thoo {
            grid-template-columns: 1fr;
        }

        &--three {
            // grid-template-columns: 1fr;
        }

        &--goal {
            .counter-item {
                grid-area: unset !important;
            }
        }
    }
}

@media (max-width: 550px) {
    .counter-form__wrapper {
        gap: 24px;
    }

    .counter-row {
        gap: 24px;

        &--two {
            grid-template-columns: 1fr;
        }

        &--three {
            grid-template-columns: 1fr;
        }
    }

    .counter {
        padding: 30px;
    }

    .counter-item__label {
        font-size: 12px;
        line-height: 16px;
    }

    .counter__title {
        font-size: 26px;
        line-height: 34px;
        margin-bottom: 24px;
    }

}
</style>