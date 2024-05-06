<template>
    <div class="footer">
        <div class="container">
            <div class="footer__inner">
                <p class="footer__copy">
                    Workout © 2024. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    border-top: 1px solid #4B515A;
    &__inner {
        padding: 30px 0;
    }

    &__copy {
        color: #FFF;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
}

@media (max-width: 550px) {
    .footer__inner {
        padding-top: 25px;
        padding-block: 25px;
    }
    .footer__copy {
        font-size: 12px;
        line-height: 16px;
    }
}
</style>