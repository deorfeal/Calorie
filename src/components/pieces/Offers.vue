<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { ref } from 'vue'

import Tile from './Tile.vue'

// const srcOfImages = ref([
//     '/images/meal-img-1.jpg',
//     '/images/meal-img-2.jpg',
//     '/images/meal-img-3.jpg',
//     '/images/meal-img-4.jpg',
// ])

// Import Swiper styles
import 'swiper/css';

const onSwiper = (swiper) => {
    // console.log(swiper);
};

const onSlideChange = () => {
    // console.log('slide change');
};
</script>

<template>
    <div class="offers">
        <swiper :slides-per-view="5.33" :space-between="32" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <Tile class="offers__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="offers__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="offers__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="offers__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="offers__tile" :imgSrc="null">
                    <template #title>
                        Sleep activity
                    </template>
                    <template #text>
                        Track your sleep patterns, set alarms, monitor rest.
                    </template>
                </Tile>
            </swiper-slide>
            <swiper-slide>
                <Tile class="offers__tile" :imgSrc="null">
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
.offers {
    margin-right: -80px;
    padding-top: 50px;
    max-width: 100%;
}
</style>