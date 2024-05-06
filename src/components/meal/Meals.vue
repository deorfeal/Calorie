<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { ref } from 'vue'

import Tile from '../pieces/Tile.vue'

// Import Swiper styles
import 'swiper/css';

const onSwiper = (swiper) => {
};

const onSlideChange = () => {
};
</script>

<template>
    <div class="meals">
        <swiper :slides-per-view="4" :space-between="32" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <Tile class="meals__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="meals__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="meals__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="meals__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss">
.meals {
    
    max-width: 100%;
}
</style>