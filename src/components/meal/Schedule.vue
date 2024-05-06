<script setup lang="ts">
import CustomTab from '../custom/CustomTab.vue';
import { ref } from 'vue';

import { useMealStore } from '../../stores/MealStore';

const mealStore = useMealStore()

const days = ref([
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' }
])

</script>

<template>
    <div class="schedule">
        <div class="schedule__items schedule-items">
            <CustomTab v-for="i in 4" :key="i" class="schedule-items__tab" :id="i"
                :acitveTabId="mealStore.activeWeakTab" @changeAcitveTabId="mealStore.changeActiveWeakTab(i)">
                Weak {{ `0${i}` }}
            </CustomTab>
        </div>
        <div class="schedule__items schedule-items">
            <CustomTab v-for="day in days" :key="day.id" class="schedule-items__tab" :id="day.id"
                :acitveTabId="mealStore.activeDayTab" @changeAcitveTabId="mealStore.changeActiveDayTab(day.id)">
                {{ day.name }}
            </CustomTab>
        </div>
    </div>
</template>

<style lang="scss">
.schedule {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 12px;
    border: 1px solid #4B515A;
    padding: 40px;
}

.schedule-items {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>