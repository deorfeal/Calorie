<script setup>
const props = defineProps(['imgSrc'])

</script>

<template>
    <a class="tile" href="#">
        <img v-if="props.imgSrc" class="tile__img" alt="img">
        <div class="tile__inner">
            <h4 class="tile__title">
                <slot name="title"></slot>
            </h4>
            <div class="tile__wrapper">
                <p class="tile__text">
                    <slot name="text"></slot>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M1 10.7243L23.0588 10.7243" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M14.3383 1.07604L24.217 10.8028L14.3383 20.5295" stroke="#FAFAF9" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </a>
</template>

<style lang="scss">
.tile {
    padding: 50px 40px;
    border-radius: 12px;
    border: 1px solid #4B515A;
    position: relative;
    display: block;
    overflow: hidden;
    &:hover {
        .tile__wrapper {
            svg {
                transform: translateX(8px);
            }
        }
    }
    &--meal {
        .tile__text {
            color: #fff;
        }
    }
    &__img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__inner {
        position: relative;
        z-index: 1;
    }

    &__title {
        color: #FAFAF9;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;

        svg {
            width: 20px;
            height: 24px;
            min-width: 20px;
            min-height: 24px;
            transition: transform 0.3s;
        }
    }

    &__text {
        color: rgba(239, 237, 232, 0.65);
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.3px;
        max-width: 192px;
    }
}
</style>