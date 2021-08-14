<template>
    <div class="work-thumbnails-container">Animations</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {},
})
export default class Animations extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-thumbnails-container {
    padding: 125px 25px 20px 25px;

    @media (min-width: $small-device-width) {
        padding: 125px 0 20px 0;
    }
}
</style>
