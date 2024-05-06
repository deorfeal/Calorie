<script setup>

</script>

<template>
  <section class="heading">
    <div class="container">
      <div class="heading__inner">
        <h1 class="heading__title">
          <slot></slot>
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.heading {
  padding-top: 100px;
  margin-bottom: 50px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  &__title {
    color: #FFF;
    font-size: 128px;
    font-weight: 700;
    line-height: 136px;
    letter-spacing: -4px;
  }
}

@media (max-width: 1200px) {
  .heading__title {
    font-size: 96px;
    line-height: 108px;
    letter-spacing: -2px;
  }
}

@media (max-width: 800px) {
  .heading__title {
    font-size: 74px;
    line-height: 78px;
    letter-spacing: -1px;
  }
}

@media (max-width: 550px) {
  .heading__title {
    font-size: 56px;
    line-height: 68px;
  }
  @media (max-width: 550px) {
    .heading {
      padding-top: 50px;
      margin-bottom: 25px;
    }
  }
}
</style>