<template>
    <input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.input {
    border-radius: 12px;
    background: #232532;
    padding: 14px 24px;
    color: #FAFAF9;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.5px;
    width: 100%;

    &::placeholder {
        color: #FAFAF9;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0.5px;
    }
}

@media (max-width: 550px) {
    .input {
        font-size: 12px;
        line-height: 16px;

        &::placeholder {
            font-size: 12px;
            line-height: 16px;
        }
    }
}
</style>