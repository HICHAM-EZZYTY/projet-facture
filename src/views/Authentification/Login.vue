<template>
  <form action="#">
    <img class="logo" src="../../assets/img/logo-login.svg" alt="" />
    <h1 class="connex">connexion</h1>
    <router-link class="inscription" to="signup">
      <span>inscription</span>
    </router-link>
    <input type="email" placeholder="EXEMPLE@EMAIL.Com" v-model="user.email" />
    <input type="password" placeholder="mot de pass" v-model="user.password" />
    <a class="mot" href="#">Mot de passe oublié ?</a>
    <button @click.prevent="login">S'identifier</button>
    <a href="#">
      <img class="vector" src="../../assets/img/Vector1.svg" alt="" />
      Vous n'avez pas reçu l'email de confirmation ?
    </a>
    <a class="vector2" href="">
      <img class="vector" src="../../assets/img/Vector2.svg" alt="" />Vous
      n'avez pas reçu l'email de déblocage ?</a
    >
  </form>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
    methods: {
      login: function () {
        let email = this.user.email 
        let password = this.user.password
        console.log("email & password",email,password)
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/Devis/new'))
       .catch(err => console.log(err))
      }

    }
 
    // login() {
    //   this.$http
    //     .post("/login", this.user)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(e => {
    //       console.error(e);
    //     });
    // }
  };

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}
.logo {
  width: 11%;
  position: relative;
  right: 42%;
  top: 4%;
}

h1 {
  font-weight: bold;
}

h2 {
  text-align: center;
}
.connex {
  margin-right: auto;
}
.inscription {
  position: relative;
  top: -31px;
  left: 18%;
  font-size: x-small;
}

.outil {
  text-align: start;
  margin-right: 3%;
  position: relative;
  left: -19%;
}
.p-fato {
  text-align: start;
  position: relative;
  left: -19%;
  font-size: small;
}
.Shapes {
  position: relative;
  left: 7%;
  height: 105%;
}
.vector3 {
  position: relative;
  top: 54%;
  right: 88%;
  width: 10%;
  height: 4%;
}
p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 6px;
  border: 1px solid #27d086;
  background-color: #27d086;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-right: auto;
  padding: 12px 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 917px;
  max-width: 100%;
  margin-top: 8em;
  min-height: 656px;
}
.mot {
  margin-right: auto;
}
.vector {
  width: 5%;
  margin-left: -4em;
}
.vector2 {
  margin-right: 1em;
  margin-top: -6px;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: url("../../assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  height: 100%;
  width: 140%;
  left: -40%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>
