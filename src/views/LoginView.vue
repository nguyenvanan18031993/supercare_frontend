<template>
  <div style="overflow: hidden">
    <div class="row">
      <div class="col-md-5 col-sm-12">
        <div class="mt-4">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="" class="pt-4"
          />
        </div>
        <div class="login__form__inner m2-4">
          <p class="login__header__title pt-4">Login to account</p>
          <p>
            New to [AppName]?
            <router-link to="/users/register">Create your business</router-link>
          </p>
          <form class="form-horizontal p-4" @submit.prevent="login()">
            <div class="row m2-4">
              <div class="form-group">
                <InputText
                  placeholder="Email address"
                  type="text"
                  class="w-100"
                  v-model="postData.username"
                />
              </div>
            </div>
            <div class="row mt-4">
              <div class="form-group">
                <div class="p-inputgroup flex-1">
                  <InputText
                    placeholder="Password"
                    :type="passwordType"
                    class="w-100"
                    v-model="postData.password"
                  />
                  <Button :icon="passwordIcon" @click="togglePassword()" />
                </div>
              </div>
            </div>
            <div class="text-end py-2">
              <router-link to="/users/forgot-password"
                >Forgot password?</router-link
              >
            </div>
            <Button type="submit" label="Login" class="w-100" />
          </form>
        </div>
      </div>
      <div class="col-md-7 d-none d-sm-block d-sm-none d-md-block ps-0">
        <div class="account__img__container">
          <img class="account__img" src="https://picsum.photos/1000" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import axios from "axios";
export default {
  name: "LoginView",
  components: {
    Button,
    InputText,
  },
  data: () => {
    return {
      postData: {
        username: "",
        password: "",
      },
      passwordType: "password",
      passwordIcon: "pi pi-eye",
    };
  },
  methods: {
    login() {
      axios
        .post("/", this.postData)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    togglePassword() {
      this.passwordType = this.passwordType == "text" ? "password" : "text";
      this.passwordIcon =
        this.passwordType == "password" ? "pi pi-eye" : "pi pi-eye-slash";
    },
  },
};
</script>
<style scoped>
.account__img__container {
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: left;
  opacity: 1;
}
.account__img {
  transition: all 0.3s ease;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.login__header__title {
  font-weight: 700;
  font-size: 2rem;
  color: #2d3742;
}

@media screen and (min-width: 76.8rem) {
  .login__form__inner {
    padding: 3rem 4rem 0;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>