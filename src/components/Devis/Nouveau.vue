<template>
  <div class="container">
    <h5>Nouveau Devis</h5>

    <div class="img">
      <img src="../../assets/img/view1.png" alt="" />
      <img src="../../assets/img/scanner2.svg" alt="scanner" />
    </div>
    <hr />
    <div class="card-container">
      <div class="card login-register login-reset">
        <h1 class="title">Marjane</h1>
        <form>
          <h6>Informations :</h6>
          <div class="form">
            <input
              type="text"
              name="Nom de devis"
              autocomplete="off"
              placeholder="# D2000001"
              required
            />
            <label for="name" class="label-name"></label>
            <samp class="content-name">Nom de devis</samp>
          </div>
          <div class="form-group col-md-4">
            <select id="inputState" class="form-control">
              <option selected>Jours</option>
              <option>Jours</option>
              <option>Jours</option>
            </select>
            <label for="inputState">Durée de validité</label>
            <div class="line"></div>
          </div>
          <div class="form-group col-md-4" id="Marjane">
            <select id="inputState" class="form-control">
              <option selected>Marjane</option>
              <option>Marjane</option>
              <option>Marjane</option>
            </select>
            <label for="inputState">Destinataire</label>
            <div class="line"></div>
          </div>
          <div class="form-group col-md-4">
            <select id="inputState" class="form-control">
              <option selected>Dirham Maroc (dh)</option>
              <option>dh</option>
              <option>dh</option>
            </select>
            <label for="inputState">Devise</label>
            <div class="line"></div>
          </div>
          <div class="Articles">
            <p>Articles :</p>
            <div class="form-group col-md-4" id="type">
              <select id="inputState" class="form-control">
                <option selected>Service</option>
                <option>Service</option>
                <option>Service</option>
              </select>
              <label for="inputState">Type</label>
              <div class="line"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nouveau"
};
</script>

<style lang="scss" scoped>
// Base Variables
$colour-primary: #26c6da;
$colour-secondary: #673ab7;
$colour-grey: #555555;
$grid-gutter-width: 30px;
$input-padding-horizontal: $grid-gutter-width / 3;
$input-padding-vertical: $grid-gutter-width / 3;

// Linear Gradient Mixin
@mixin horizontal-gradient($from, $to, $stop: 100%) {
  background-color: $from;
  background-image: -moz-linear-gradient(left, $from 0%, $to $stop);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, $from),
    color-stop($stop, $to)
  );
  background-image: -webkit-linear-gradient(left, $from 0%, $to $stop);
  background-image: -o-linear-gradient(left, $from 0%, $to $stop);
  background: -ms-linear-gradient(left, $from 0%, $to $stop);
  background: linear-gradient(to right, $from 0%, $to $stop);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
}

.wrapper {
  background-color: #eee;
  min-height: 100%;
  padding: $grid-gutter-width * 2 0;
}

// Typography

* {
  font-family: "Montserrat", sans-serif;
}

body {
  color: $colour-grey;
  font-size: 0.9rem;
}

h1 {
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: darken($colour-grey, 15%);
  text-align: center;
}

// Basic form styling

.form-row {
  margin-left: -$grid-gutter-width / 2;
  margin-right: -$grid-gutter-width / 2;
  .form-group {
    padding: $grid-gutter-width / 2 $grid-gutter-width / 2 0;
    align-self: flex-end;
  }
}

.form-group {
  position: relative;
  // padding-top: $grid-gutter-width / 2;
  // margin-bottom: $grid-gutter-width;
  top: 3px;
  left: 57%;
}

.form-control {
  border: 0;
  border-radius: 0;
  padding: $grid-gutter-width / 3 $input-padding-horizontal;
  background-color: transparent;
  position: relative;
  z-index: 2;
  font-size: 0.9rem;
  left: -16px;
  width: 58%;

  &:not(textarea) {
    height: 44px;
  }

  + label {
    position: absolute;
    z-index: 1;
    top: $input-padding-vertical + $grid-gutter-width / 2;
    margin: 0;
    // transition: all 0.2s ease-in-out;
    pointer-events: none;
    // left: $input-padding-horizontal;
    right: $input-padding-horizontal;
    top: -22px;
    left: -3px;
    font-size: small;
  }

  &:focus {
    box-shadow: none;
    background-color: transparent;
  }
}

// Position labels for when javascript is disabled
.no-js {
  .form-control + label {
    font-size: 0.75rem;
    top: 0;
  }
}

.form-row {
  .form-control {
    + label {
      left: $grid-gutter-width / 2 + $input-padding-horizontal;
      right: $grid-gutter-width / 2 + $input-padding-horizontal;
    }
  }
  .line {
    left: $grid-gutter-width / 2;
    right: $grid-gutter-width / 2;
  }
}

.line {
  position: absolute;
  display: block;
  width: 53%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  @include horizontal-gradient($colour-primary, $colour-secondary);
  &:after {
    content: "";
    height: 2px;
    position: absolute;
    display: block;
    background: $colour-primary;
    left: 0;
    right: 0;
    // transform: scaleX(0);
    // transition: transform 0.2s ease-in-out;
    transform-origin: 0 0;
  }
}

.form-control:focus {
  ~ .line {
    &:after {
      transform: scaleX(1);
    }
  }
}

// Remove Bootstrap 4 height from select
select.form-control:not([size]):not([multiple]) {
  height: 44px;
}
.container {
  position: relative;
  top: 11em;
  left: 5em;
}
.title {
  text-align: center;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  text-transform: capitalize;
  color: #2262c6;
  margin-top: 38px;
}
h5 {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 34px;
  text-transform: capitalize;

  color: #2262c6;
}
h6 {
  position: relative;
  left: 10%;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-transform: capitalize;
  top: 29px;
}
#Marjane {
  position: relative;
  top: 64px;
  left: 10%;
}
#type {
  position: relative;
  top: 90px;
  left: 10%;
}
// img{
//   position: absolute;
// width: 49px;
// height: 49px;
// left: 1696px;
// top: 188px;

// background: #E2E8F1;
// box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
// }
.card-container {
  position: fixed;
  width: 58%;
}
body {
  height: 6ovh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.form {
  width: 17%;
  position: relative;
  height: 80px;
  left: 10%;
  top: 50px;
  overflow: hidden;
}
.form input {
  width: 100%;
  height: 100%;
  color: rgb(0, 0, 0);
  padding-top: 20px;
  border: none;
  outline: none;
}
.form label {
  position: absolute;
  bottom: -6px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 2px solid #26c6da;
}
.form label::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -1px;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid #26c6da;
  transform: translateX(-100%);
  transform: transform 0, 3s ease;
}
.content-name {
  position: absolute;
  left: 0px;
  font-size: small;
  transform: all 0, 3s ease;
}

.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(-150%);
  font-size: 14px;
  color: #26c6da;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(0%);
}
</style>
