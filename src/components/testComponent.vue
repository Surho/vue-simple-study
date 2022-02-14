<template>
    <div class="testStyle">
        Im SPA component
        {{ test }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 14
            }
        }
    }
</script>

<style lang="scss" module>
    .testStyle {
        color: lightgray;
        font-size: 16px;
    }
</style>
