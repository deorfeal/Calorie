<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <a class="header__logo logo" href="#">
                    <img class="logo__img" src="/images/logo.svg" alt="logo">
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    padding: 25px 0;
    border-bottom: 1px solid #4B515A;
    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
}

.logo {
    display: block;
    width: 85px;
    height: 19px;
    &__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>