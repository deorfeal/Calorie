<script setup lang="ts">
import Heading from '../components/pieces/Heading.vue'
import Footer from '../components/pieces/Footer.vue'
import CalorieCounter from '../components/calculateCalorie/CalorieCounter.vue'
import Aside from '../components/pieces/Aside.vue'
import Header from '../components/pieces/Header.vue'
// import Offers from '../components/pieces/Offers.vue'

import AOS from 'aos'; // Animation
import 'aos/dist/aos.css'; // Import AOS styles

import { ref, onMounted } from 'vue'

const calorieResults = ref({
  calories: '0',
  proteins: '0',
  carbs: '0',
  fat: '0'
});

const saveCalorieResults = (data) => {
  calorieResults.value = data;
};

onMounted(() => {
  AOS.init({
    duration: 1000,
    offset: 0, // offset (in px) from the original trigger point
    anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
  });
});

</script>
<template>
    <Header data-aos="fade-down" />
    <main class="main">
      <Heading data-aos="fade-right">
        Calorie calculator
      </Heading>
      <section class="calculator" data-aos="zoom-out">
        <div class="container">
          <div class="calculator__inner">
            <CalorieCounter @sendCalorieResult="saveCalorieResults" />
            <Aside :calorieResults="calorieResults" data-aos="fade-down" />
          </div>
          <!-- <Offers class="calculator__offers" /> -->
        </div>
      </section>
    </main>
    <Footer data-aos="fade-up" />
</template>

<style lang="scss">
.calculator {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 388px;
    gap: 32px;
  }
}

@media (max-width: 1200px) {
  .calculator__inner {
    grid-template-columns: 1fr;
  }
}
</style>
