<template>
  <div class="container" id="container">
    <div class="form-container sign-in-container">
      <img class="logo" src="../../assets/img/logo-login.svg" alt />
      <h1 class="connex">Veuillez remplir vos coordonnées</h1>
      <form action="#">
        <!-- <span class="inscription">iNSCRIPTION</span> -->
        <div class="col-3 signup_input">
          <input type="text" placeholder="Email" />
          <span class="focus-border"></span>
        </div>

        <div class="col-3 signup_input">
          <input type="text" placeholder="Nom complet" />
          <span class="focus-border"></span>
        </div>
        <div class="col-3 signup_input">
          <input type="text" placeholder="Nom de la société" />
          <span class="focus-border"></span>
        </div>
        <div class="col-3 signup_input">
          <input type="text" placeholder="Société" />
          <span class="focus-border"></span>
        </div>
        <div class="col-3 signup_input">
          <input type="text" placeholder="Identifiant fiscale" />
          <span class="focus-border"></span>
        </div>
        <div class="col-3 signup_input">
          <input type="text" placeholder="Identifiant commun de l'entreprise" />
          <span class="focus-border"></span>
        </div>
        <div class="col-3 signup_input">
          <input type="text" placeholder="Taxe professionnelle" />
          <span class="focus-border"></span>
        </div>
        <button class="button_left">
          <span class="text_color">Précédente</span>
        </button>
        <button class="button_right">Suivant</button>
        <p class="conditions">
          La création d'un compte implique que vous avez lu et accepté les termes et
          <a
            href="#"
          >conditions d'utilisation.</a>
        </p>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <img class="Shapes" src="../../assets/img/Shapes.png" alt />
        <div class="overlay-panel overlay-right">
          <img class="vector3" src="../../assets/img/Vector3.png" alt />
          <h1 class="outil">Fatoura outil de devis et facturation</h1>
          <p
            class="p-fato"
          >100% gratuit fatoura est un outil gratuit et il restera toujours C'est promis !</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name: "Login"
};
</script>
<style scoped>
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
  left: 47%;
  margin-top: 6%;
}

h1 {
  font-weight: bold;
}

h2 {
  text-align: center;
}
.connex {
  position: absolute;
  height: 72px;
  top: 122px;
  font-size: 24px;
  margin-left: 6rem;
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
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.button_left,
.button_right {
  position: absolute;
  width: 137px;
  height: 56px;
  left: 118px;
  top: 36.5rem;
  border: 1px solid #aab5c6;
  box-sizing: border-box;
  border-radius: 4px;
}

.text_color {
  color: grey;
}

.button_right {
  left: 264px;
  background-color: #27d086;
  left: 307px;
}

button:active {
  transform: scale(0.95);
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
  /* height: 100%; */
  text-align: center;
  margin-top: 4rem;
}

button,
input {
  overflow: visible;
  border-bottom: 1px solid #9c9cb3;
}

.conditions {
  color: grey;
  font-size: 13px;
  position: relative;
  margin-top: 6rem;
  width: 20rem;
  left: 7px;
}

.conditions > a {
  text-decoration: none;
  color: #3399ff;
}

/* INPUT FOCUS EFFECTS CSS */

input[type="text"] {
  font: 15px/24px "Gilroy", Arial, sans-serif;
  color: #333;
  /* width: 100%; */
  box-sizing: border-box;
  letter-spacing: 1px;
  margin-left: -9.5rem;
  width: 20rem;
  margin-top: 110px;
}

.signup_input {
  margin-top: -94px;
  margin-left: 5rem;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
  border: none;
  border-bottom: 1px solid #aab5c6;
  /* border: none; */
  width: 20.1rem;
  margin-left: 14px;
  margin-top: 25px;
}

.custom-select {
  border-radius: 0px !important;
}

/* FIN INPUT FOCUS EFFECTS CSS */

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 68rem;
  max-width: 100%;
  margin-top: 8em;
  /* min-height: 656px; */
  height: 45rem;
  margin-top: 1rem;
}
.mot {
  margin-right: auto;
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
