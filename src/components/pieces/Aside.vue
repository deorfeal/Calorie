<script setup>
import CustomButton from "../custom/CustomButton.vue";
import { ref, defineProps } from 'vue'
const props = defineProps(['calorieResults']);
</script>

<template>
    <aside class="calculator__aside aside">
        <div class="aside__calories calories">
            <ul class="calories__list">
                <li class="calories__list-item">
                    <div class="calories__list-text">
                        Your target calories
                    </div>
                    <div class="calories__list-unit">
                        {{ calorieResults.calories }}
                        <span>
                            kcal
                        </span>
                    </div>
                </li>
                <li class="calories__list-item">
                    <div class="calories__list-text">
                        Proteins
                    </div>
                    <div class="calories__list-unit">
                        {{ calorieResults.proteins }}
                        <span>
                            g
                        </span>
                    </div>
                </li>
                <li class="calories__list-item">
                    <div class="calories__list-text">
                        Carbs
                    </div>
                    <div class="calories__list-unit">
                        {{ calorieResults.carbs }}
                        <span>
                            g
                        </span>
                    </div>
                </li>
                <li class="calories__list-item">
                    <div class="calories__list-text">
                        Fat
                    </div>
                    <div class="calories__list-unit">
                        {{ calorieResults.fat }}
                        <span>
                            g
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <CustomButton class="btn--orange">
            Add data to yout target
        </CustomButton>
    </aside>
</template>

<style lang="scss">
.aside {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid #4B515A;
    padding: 40px;
}

.calories {
    flex-grow: 1;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: unset;
        }
    }

    &__list-item {
        color: #FAFAF9;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;

        &:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0.5px;
        }
    }

    &__list-text {}

    &__list-unit {}
}

@media (max-width: 550px) {
    .aside {
        padding: 30px;
    }

    .calories__list-item {
        font-size: 12px;
        line-height: 16px;

        &:nth-child(1) {
            font-size: 14px;
            line-height: 24px;
        }
    }
    .calories__list {
        margin-bottom: 25px;
    }
}
</style>