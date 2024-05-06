import { defineStore } from "pinia";
import { ref } from 'vue'

export const useMealStore = defineStore('mealStore', () => {
    const activeWeakTab = ref<number>(1)
    const activeDayTab = ref<number>(1)
    function changeActiveWeakTab(id: number) {
        activeWeakTab.value = id
    }
    function changeActiveDayTab(id: number) {
        activeDayTab.value = id
    }

    // cosnt meal

    return { activeWeakTab, activeDayTab, changeActiveWeakTab, changeActiveDayTab }
})