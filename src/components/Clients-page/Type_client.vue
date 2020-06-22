<template>
    <div>
      <samp>Question 1 :</samp>
      <h4>Veuillez choisir le type de votre client ?</h4>
           <!-- Professionnel-->

      <div class="grid-wrapper">
        <div class="card-wrapper">
        <input type="radio" id="rdo1" name="radio" checked>
          <div class="card-content">
            <div class="card-state-icon"></div>
            <label for="rdo1">
              <div class="image"> <img src="../../assets/img/entreprise 1.svg" alt="Professionnel">
              </div>
              <p class="small-meta dim"> Professionnel </p>
            </label>
          </div>    
        <div class="page-item">
                  <a class="page-link" id="Next" href="#"><img class="Next" src="../../assets/img/next white 1.svg" alt="Next">Next</a>
        </div>
        </div>
      </div>
      <!-- particulier -->

        <div class="grid-wrapper">
            <div class="card-wrapper">
            <input type="radio" id="rdo2" name="radio" checked>
            <div class="card-content">
                <div class="card-state-icon"></div>
                <label for="rdo2">
                <div class="image">
                    <img src="../../assets/img/clients 1.svg" alt="particulier">
                </div>
                <p class="small-meta dim"> particulier </p>
                </label>
            </div>
                  <div class="page-item ">
                        <a class="page-link" id="Previous" href="#"><img class="previous" src="../../assets/img/previous 1.svg" alt="previous">Previous</a>
                  </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:"Type_client",
}
</script>
<style scoped>
    
samp{
    position: relative;
    width: 125px;
    height: 28px;
    left: 38%;
    top: 6em;
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-transform: capitalize;
    color: #AAB5C6;
}
h4{
    position: relative;
    width: 591px;
    height: 41px;
    left: 25%;
    top: 5em;
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    text-transform: lowercase;
    color: #404041;
}

/* card checkbox */
*,
*:before,
*:after {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.small-meta {
  font-size: 12px;
}

.dim {
  opacity: 1;
  font-size: medium;
}

.image {
  height: 119px;
  position: relative;
  top: 1em;
}

.grid-wrapper {
  margin: 0 auto;
  vertical-align: middle;
  text-align: center;
  position: relative;
  top: 0em;
  left: 1em;

}

.card-content {
  border: 1px solid rgb(0, 0, 0);
  border-radius: 15px;
  padding: 25px 25px 10px 25px;
}

.card-content * {
  cursor: pointer;
}

.card-wrapper {
  position: relative;
  width: 236px;
  top: 12em;
  left: 22em;
  float: left;
  margin: 2%;

}

.c-card {
  position: absolute;
  top: 18px;
  right: 9%;

}
input[type=radio] {
    box-sizing: border-box;
    padding: 0;
    position: relative;
    top: 35px;
    left: 37%;
}

.c-card~.card-content {
  transition: all 500ms ease-out;
}

.c-card~.card-content .card-state-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
  width: 20px;
  height: 20px;
  background-position: 0 0;
  transition: all 100ms ease-out;
}

.c-card~.card-content:before {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 0;
  height: 0;
  border-top: 52px solid #47cf73;
  border-left: 52px solid transparent;
  transition: all 200ms ease-out;
}


.c-card~.card-content:hover {
  border: 1px solid #32af91;
  border-radius: 15px;
}

.c-card~.card-content:hover .card-state-icon {
  background-position: -30px 0;
}

.c-card~.card-content:hover:before {
  border-top: 52px solid #2262c6;
  border-radius: 15px;
}

.c-card:checked~.card-content {
  border: 1px solid #2262c6;
  border-radius: 15px;
}
/*  */

#Previous{
    position: relative;
    width: 227px;
    height: 44px;
    left: -18em;
    top: 38px;
    border: 1px solid #E0E0E1;
    text-align: end;
    box-sizing: border-box;
    border-radius: 4px;
    color: #C5C5C5;
}
#Next{
    position: absolute;
    width: 227px;
    height: 44px;
    left: 19em;
    color: aliceblue;
    text-align: left;
    top: 266px;
    background: #2262C6;
    border-radius: 4px;

}
.Next{
    position: relative;
    left: 83%;
}
.previous{
    position: relative;
    right: 55%;
}
/*  */
@media only screen and (max-width: 600px) {

  .card-wrapper{
    position: relative;
    left: 21em;
}
#Next{
    position: absolute;
    width: 217px;
    height: 44px;
    left: 1em;
    color: aliceblue;
    text-align: left;
    top: 31em;
    background: #2262C6;
    border-radius: 4px;
}
#Previous{
    position: relative;
    width: 217px;
    height: 44px;
    left: 1em;
    top: 79px;
    border: 1px solid #E0E0E1;
    text-align: end;
    box-sizing: border-box;
    border-radius: 4px;
    color: #C5C5C5;
}
h4[data-v-059a18b6] {
    position: relative;
    width: 322px;
    left: 21%;
    top: 5em;
}
}
@media only screen and (max-width: 1300px) {

.grid-wrapper{
    position: relative;
    top: 0em;
    left: -10em;
}
h4{
  position: relative;
  left: 13%;
}
samp{
  position: relative;
  left: 42%;
}
}
</style>