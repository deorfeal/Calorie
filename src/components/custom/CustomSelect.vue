<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="toggleDropdown">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div v-for="(option, i) of options" :key="i" @click="selectOption(option, i)">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch, onMounted, nextTick } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    default: {
        type: String,
        required: false,
        default: null,
    },
    tabindex: {
        type: Number,
        required: false,
        default: 0,
    },
    selectId: {
        type: Number,
        required: true,
    },
    reset: {
        type: Object,
        required: true,
    }
});

watch(props.reset, (newValue, oldValue) => {
    if (newValue.isTrue === true) {
        reset();
    }
})

const emit = defineEmits(['input']);

const selected = ref(props.default ? props.default : (props.options.length > 0 ? props.options[0] : null));
const open = ref(false);

const toggleDropdown = () => {
    open.value = !open.value;
};

const selectOption = (option, id) => {
    selected.value = option;
    open.value = false;
    emit('input', id, props.selectId);
};

// Функция сброса в дочернем компоненте
const reset = () => {
    selected.value = props.default ? props.default : (props.options.length > 0 ? props.options[0] : null);
};

</script>

<style lang="scss">
.custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 14px;
    height: 48px;
    line-height: 20px;
}

.custom-select .selected {
    background-color: #232532;
    border-radius: 12px;
    color: #fff;
    padding: 14px 24px;
    cursor: pointer;
    user-select: none;
    transition: border-radius 0.3s;
}

.custom-select .selected.open {
    border-radius: 12px 12px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    background-image: url('/images/dropdown-arrow.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 16px;
    height: 16px;
    transition: transform 0.3s;
}

.custom-select .items {
    color: #fff;
    border-radius: 0px 0px 12px 12px;
    overflow: hidden;
    position: absolute;
    background-color: #232532;
    left: 0;
    right: 0;
    z-index: 1;
    transition: opacity 0.3s;
    opacity: 1;
    pointer-events: unset;
    max-height: 250px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: #4B515A;
    }

    &::-webkit-scrollbar-thumb {
        background: #E6533C;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #E6533C;
    }
}

.custom-select .items div {
    color: #fff;
    padding: 14px 24px;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s;
}

.custom-select .items div:hover {
    background-color: #E6533C;
}

.custom-select .selectHide {
    opacity: 0;
    pointer-events: none;
}

.custom-select .open::after {
    transform: translateY(-50%) rotate(180deg);
}

@media (max-width: 550px) {
    .custom-select {
        font-size: 12px;
        line-height: 16px;
    }
}
</style>