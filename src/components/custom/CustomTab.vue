<script setup lang="ts">

const props = defineProps<{
    id: number,
    acitveTabId: number 
}>()

const emit = defineEmits<{
  changeAcitveTabId: [id: number]
}>()

</script>

<template>
    <div class="tab" :class="{ 'tab--active': props.acitveTabId === props.id }" @click="emit('changeAcitveTabId', props.id)">
        <slot>

        </slot>
    </div>
</template>

<style lang="scss">
.tab {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    transition: color 0.3s, background 0.3s;
    border-radius: 6px;
    padding: 4px 15px;

    &:hover {
        color: #E6533C;
    }
}

.tab--active {
    background: #fff;
    color: #E6533C;
}
</style>