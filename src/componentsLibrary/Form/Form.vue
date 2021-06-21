<template  >
  <form v-if="fields" class="ma-form" @submit.prevent="submitForm">
    <MaTextField
      v-for="(field, index) in fields"
      :key="index"
      :label="field.label"
      :name="field.name"
      :info="field.info"
      :infoUnderline="field.infoUnderline"
      :invalid="field.invalid"
      :value="field.value"
      @input="field.value = $event"
    />
    <div class="form-buttons">
      <MaButton
        class="submit-button"
        @click="submitForm"
        :text="submitBtnContent.text"
      />
      <MaButton
        v-if="secondBtnContent"
        class="second-button"
        color="blue"
        :frameOnly="true"
        :text="secondBtnContent.text"
        :iconUrl="secondBtnContent.iconUrl"
        :iconHeight="secondBtnContent.iconHeight"
      />
    </div>
  </form>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MaTextField from "../TextField/TextField.vue";
import MaButton from "../Button/Button.vue";

@Component({
  components: {
    MaTextField,
    MaButton,
  },
})
export default class MaForm extends Vue {
  @Prop() fields!: {
    name: string;
    label: string;
    info: string;
    infoUnderline?: boolean;
    check?: any;
    value?: string;
    invalid?: boolean | undefined;
  }[];
  @Prop() submitBtnContent!: {
    text: string;
  };
  @Prop() secondBtnContent!: {
    text: string;
    iconUrl: string;
    iconHeight: string;
  };
  @Prop() invalid!: boolean;

  submitForm(e: any) {
    this.$emit("submit", this.fields);
  }
}
</script>

<style scoped lang="scss">
.ma-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  align-items: stretch;
  .form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
    .submit-button {
      width: 52%;
    }
    .second-button {
      width: 46%;
    }
  }
}
@media screen and (max-width: 400px) {
  .ma-form {
    .form-buttons {
      flex-direction: column;
      .submit-button {
        width: 100%;
        margin-bottom: 10px;
      }
      .second-button {
        width: 100%;
      }
    }
  }
}
</style>