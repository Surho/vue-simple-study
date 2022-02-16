<template>
    <div class="testStyle">
        Im SPA component FUUUU
        {{ test }}
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

<style>
    .testStyle {
        color: lightgray;
        font-size: 16px;
    }
</style>
