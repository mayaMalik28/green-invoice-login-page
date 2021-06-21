<template>
  <div class="home flex">
    <div class="logo"><img src="@/assets/green_logo.svg" alt="" /></div>
    <div class="home-login-container flex-column center">
      <div class="home-login-form">
        <h1>היי, טוב לראות אותך</h1>
        <MaForm
          :fields="fields"
          :invalid="!isFormValid"
          :submitBtnContent="submitBtnContent"
          :secondBtnContent="secondBtnContent"
          @submit="onSubmit"
        />
        <p>עוד לא הצטרפת? <span>ל-30 יום נסיון חינם</span></p>
      </div>
    </div>
    <div class="home-drawing-container flex align-center justify-start">
      <img src="../assets/green_login_page.svg" alt="" height="400px" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MaForm from "../componentsLibrary/Form/Form.vue";

@Component({
  components: {
    MaForm,
  },
})
export default class Home extends Vue {
  secondBtnContent = {
    text: "כניסה עם גוגל",
    iconUrl: "@/assets/Google_G.svg",
    iconHeight: "17px",
  };
  submitBtnContent = {
    text: "כניסה",
  };
  isFormValid: boolean = true;
  fields: {
    name: string;
    label: string;
    info: string;
    infoUnderline?: boolean;
    check?: any;
    value?: string;
    invalid?: boolean | undefined;
  }[] = [
    {
      name: "email",
      label: "מייל",
      info: "הכנס את כתובת המייל איתה נרשמת",
    },
    {
      name: "password",
      label: "סיסמה",
      info: "שכחת סיסמה?",
      infoUnderline: true,
    },
  ];
  async onSubmit() {
    this.checkForm();
    if (this.isFormValid) {
      const email: string | undefined = this.fields.filter(
        (field) => field.name === "email"
      )[0].value;
      const password: string | undefined = this.fields.filter(
        (field) => field.name === "password"
      )[0].value;
      const creds: object = {
        email,
        password,
      };
      console.log(creds);
      try {
        await this.$store.dispatch({
          type: "login",
          creds,
        });
        this.$router.push("/user");
      } catch {
        console.log("something want wrong");
      } finally {
        this.resetFields();
      }
    }
  }

  checkForm(): void {
    this.isFormValid = true;
    const fields = this.fields.map((field) => {
      if (field.value === "" || field.value === undefined) {
        field = { ...field, invalid: true };
        if (this.isFormValid) this.isFormValid = false;
      } else if (field.check) {
        field.invalid = !field.check();
      }
      return field;
    });
    this.fields = fields;
  }
  resetFields() {
    const fields = this.fields.map((field) => {
      if (field.value === "" || field.value === undefined) {
        field = { ...field, invalid: undefined, value: "" };
      }
      return field;
    });
    this.fields = fields;
  }
}
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  .logo {
    position: fixed;
    padding: 10px;
    img {
      height: 25px;
    }
  }
  .home-drawing-container {
    background-color: #ffdcdc;
    width: 50%;
  }
  .home-login-container {
    width: 50%;
    p {
      color: #0084f4;
      margin-top: 18px;
      font-size: small;
      font-family: heebo-light;
      span {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .home-login-form {
      width: 75%;
    }
  }
  @media screen and (max-width: 740px) {
    .home-drawing-container {
      transition-duration: 0.2s;
      width: 0%;
    }
    .home-login-container {
      transition-duration: 0.2s;
      width: 100%;
    }
  }
}
</style>
