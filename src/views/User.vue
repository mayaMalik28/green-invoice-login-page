<template>
  <div v-if="user" class="user flex-column">
    <div class="header flex align-center">
      <img src="@/assets/green_leaf.svg" alt="" />
      <h1>ברוך הבא</h1>
    </div>
    <div class="user-info user-container">
      <h1>אני</h1>
      <div class="user-info-container flex wrap">
        <img :src="user.picture" alt="" />
        <div class="info-container flex-column">
          <p>{{ user.firstName }} {{ user.lastName }}</p>
          <p><span> מייל: </span> {{ user.email }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="businesses user-container">
      <h1>העסקים שלי</h1>
      <div
        class="business flex-column"
        v-for="business in user.businesses"
        :key="business.id"
      >
        <h2>{{ business.name }}</h2>
        <p>{{ business.title }}</p>
        <div class="business-container flex wrap">
          <div class="business-imgs flex-column">
            <img :src="business.logo" alt="" />
            <div class="info-container business-signature flex center">
              <p>החתימה שלך:</p>
              <img :src="business.signature" alt="" />
            </div>
          </div>
          <div class="info-container business-details">
            <h3>פרטי העסק</h3>
            <p><span>מספר ע.מ/ח.פ: </span>{{ business.taxId }}</p>
            <p>
              <span>סוג עוסק: </span
              >{{ business.type === 1 ? "עוסק מורשה" : "עוסק פטור" }}
            </p>
          </div>
          <div class="info-container business-contact">
            <h3>פרטי התקשרות</h3>
            <p><span>כתובת: </span>{{ business.address }}</p>
            <p><span>עיר: </span>{{ business.city }}</p>
          </div>
          <div class="info-container business-settings">
            <h3>הגדרות</h3>
            <p><span>שפה: </span>{{ business.settings.documentLang }}</p>
            <p><span>מטבע: </span>{{ business.settings.documentCurrency }}</p>
          </div>
        </div>
      </div>
    </div>
    <MaButton
      class="button"
      @click="logout"
      costumedColor="#23445a"
      text="התנתק"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MaButton from "../componentsLibrary/Button/Button.vue";

@Component({
  components: {
    MaButton,
  },
})
export default class User extends Vue {
  user!: object;
  created() {
    this.setUser();
    if (!this.user) this.$router.push("/");
  }
  setUser() {
    this.user = this.$store.getters.currUser;
  }
  logout() {
    this.$store.dispatch({ type: "logout" });
    this.$router.push("/");
  }
}
</script>

<style scoped lang="scss">
.user {
  font-family: heebo-light, sans-serif;
  width: 100%;
  padding: 20px;
  background-color: whitesmoke;
  .header {
    img {
      height: 60px;
      width: 60px;
      margin-left: 10px;
    }
    padding-bottom: 20px;
  }
  .user-container {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: aliceblue;
    box-shadow: 1px 1px 5px #00000023;
    padding: 12px 20px;
    h2 {
      margin-bottom: 8px;
    }
    h3 {
      font-weight: bold;
      margin-bottom: 3px;
      font-size: inherit;
    }
    p {
      span {
        font-weight: bold;
        margin-left: 2px;
      }
    }
    h1 {
      margin-bottom: 10px;
    }
    img {
      border-radius: 14px;
      width: 143px;
      height: 146px;
    }
    .info-container {
      padding: 0px 20px;
      min-width: 100px;
      &.business-signature {
        img {
          height: 50px;
          width: 50px;
        }
      }
      @media screen and(max-width:600px) {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .businesses-container {
      padding: 10px;
      p {
        font-size: small;
      }
    }
    .user-info-container {
      padding: 10px;
    }
  }
  .button {
    align-self: flex-end;
    margin: 5px;
    margin-top: 7px;
    color: whitesmoke;
  }
}
</style>

