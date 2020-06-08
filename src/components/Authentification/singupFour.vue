<template>
  <div id="visa">
    <h1>Vue Visa Application</h1>
    <form>
      <button @click="addVisa">Add another previous visa</button>
      <button @click="deleteVisa(counter)">Delete visa</button>
      <br />
      <div class="previous" v-for="(applicant, counter) in applicants" v-bind:key="counter">
        <span @click="deleteVisa(counter)">x</span>

        <label for="duration">visa:</label>
        <input type="text" v-model="applicant.expiration" required />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicants: [
        {
          previous: ""
        }
      ]
    };
  },
  methods: {
    addVisa() {
      this.applicants.push({
        previous: ""
      });
    },
    deleteVisa(counter) {
      this.applicants.splice(counter, 1);
    }
  }
};
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

.effect-2 {
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
}
.effect-2 ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.4s;
}
.effect-2:focus ~ .focus-border {
  width: 100%;
  transition: 0.4s;
  left: 0;
}
input {
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #45494c;
  font-size: 14px;
  color: #959595;
  padding: 8px 0;
  margin-top: 20px;
}
</style>


