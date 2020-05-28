<template>
  <div class="row">
    <div class="container1">
      <b-form-input class="effect-1 simplebox" v-model="text" placeholder="Enter your name"></b-form-input>
      <span class="focus-border"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/*= Reset CSS 
============= */
html,
body {
  border: 0;
  margin: 0;
  padding: 0;
}
body {
  font: 14px "Lato", Arial, sans-serif;
  min-width: 100%;
  min-height: 100%;
  color: #666;
}
.container {
  margin: 0 auto;
  max-width: 1200px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row {
  float: left;
  width: 100%;
  padding: 20px 0 50px;
}
/*= Reset CSS End
================= */

/*= input focus effects css
=========================== */
:focus {
  outline: none;
}

.simplebox {
  outline: none;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.container1 {
  float: left;
  width: 27.33%;
  margin: 40px 3%;
  position: relative;
}
/* necessary to give position: relative to parent. */
input[type="text"] {
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

.effect-1 {
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
}

.effect-1 ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.4s;
}
.effect-1:focus ~ .focus-border {
  width: 100%;
  transition: 0.4s;
}
</style>