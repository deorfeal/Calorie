<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.btn {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 14px 24px;
    border-radius: 12px;
    background: #232532;
    border: 1px solid transparent;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.3s, border 0.3s;

    &:hover {
        background: #E6533C;
    }

    &--orange {
        background: #E6533C;

        &:hover {
            background: transparent;
            border: 1px solid #E6533C;
        }
    }

    &--active {
        background: #E6533C;
    }

    svg {
        width: 14px;
        height: 14px;
        min-width: 14px;
        min-height: 14px;
    }

}

@media (max-width: 550px) {
    .btn {
        font-size: 12px;
        line-height: 16px;
    }
}
</style>