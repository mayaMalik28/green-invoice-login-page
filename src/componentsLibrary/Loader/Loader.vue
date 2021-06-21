<template>
  <img
    class="loading-spinner"
    src="../../assets/loading.gif"
    :width="size"
    :height="size"
  />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MaLoader extends Vue {
  @Prop() size!: string;
}
</script>

<style scoped lang="scss">

</style>