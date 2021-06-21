<template  >
  <div class="ma-text-field" :class="classes" :style="style">
    <div class="input-container">
      <label :for="name">
        {{ label }}
      </label>
      <input
        type="text"
        :name="name"
        v-model="value"
        @input="emitInput"
        @change="emitInput"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <p>{{ info }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MaTextField extends Vue {
  isFocus: boolean = false;
  isInput: boolean = false;
  @Prop() name!: string;
  @Prop() label!: string;
  @Prop() value!: string;
  @Prop() info!: string;
  @Prop() infoUnderline!: boolean;
  @Prop() width!: number;
  @Prop() height!: number;
  @Prop() fontFamily!: string;
  @Prop() fontSize!: string;
  @Prop() invalid!: boolean;

  emitInput(e: any): void {
    this.$emit("input", e.target.value);
  }
  onFocus(): void {
    this.isFocus = true;
    this.isInput = true;
  }
  onBlur(): void {
    this.isFocus = false;
    if (this.value === "" || this.value === undefined) {
      this.isInput = false;
    }
  }
  get classes(): object {
    return {
      focus: this.isFocus,
      "input-entered": this.isInput,
      "info-underline": this.infoUnderline,
      invalid: this.invalid,
    };
  }

  get style(): string {
    let style = "";
    if (this.height) style += `height: ${this.height};`;
    if (this.width) style += `width: ${this.width};`;
    if (this.fontFamily) style += `font-family: ${this.fontFamily};`;
    if (this.fontSize) style += `font-size: ${this.fontSize};`;
    return style;
  }
}
</script>

<style scoped lang="scss">
.ma-text-field {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #23445a;
  font-family: heebo-light, sans-serif;
  box-sizing: border-box;
  height: 100px;
  .input-container {
    border-bottom: 1px solid #23445a;
    padding-bottom: 2px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      transition-duration: 0.2;
      font-size: 1.125em;
      position: relative;
      bottom: -22px;
    }
    input {
      color: #23445a;
      background-color: white;
      border: none;
      outline: none;
      font-size: 1em;
    }
  }
  p {
    margin: 4px 0px 0px 0px;
    text-align: start;
    font-size: 0.8em;
  }
  &.info-underline {
    p {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &.focus {
    .input-container {
      transition-duration: 0.2s;
      border-bottom: 1.5px solid #10bb69;
      input {
        background-color: transparent;
      }
    }
  }
  &.input-entered {
    label {
      transition-duration: 0.2s;
      bottom: 0px;
    }
  }
  &.invalid {
    .input-container {
      transition-duration: 0.2s;
      border-bottom: 1.5px solid #db2828;
    }
    p {
      color: #db2828;
    }
  }
}
</style>