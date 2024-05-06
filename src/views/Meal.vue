<script setup lang="ts">
import Heading from '../components/pieces/Heading.vue'
import Footer from '../components/pieces/Footer.vue'
import Aside from '../components/pieces/Aside.vue'
import Header from '../components/pieces/Header.vue'
import Schedule from '../components/meal/Schedule.vue'
import Meals from '../components/meal/Meals.vue'
</script>
<template>
    <Header />
    <div class="main">
        <Heading>
            Meal plan
        </Heading>
        <section class="meal">
            <div class="container">
                <div class="meal__inner">
                    <div class="meal__body meal-body">
                        <Schedule class="meal-body__schedule"/>
                        <Meals class="meal-body__meals" /> 
                        <!--  -->
                    </div>
                    <!-- <Aside /> -->
                </div>
            </div>
        </section>
    </div>
    <Footer />
</template>

<style lang="scss">
.meal {
    &__inner {
        display: grid;
        grid-template-columns: 1fr 388px;
        gap: 32px;
    }
}
.meal-body {
    overflow: hidden;
    &__schedule {
        margin-bottom: 50px;
    }
    &__meals {
        margin-bottom: 50px;
    }
}
</style>