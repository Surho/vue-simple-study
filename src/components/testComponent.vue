<template>
    <div class="testStyle">
        Im SPA component FUUUU
        {{ test }}
        <div class="qwerty">asdasds</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 488
            }
        },
        mounted() {
            console.log('hi from vue!');
        }
    }
</script>

<style lang="scss" module>
    .testStyle {
        color: lightgray;
        font-size: 106px;
        display: flex;
    }
</style>
