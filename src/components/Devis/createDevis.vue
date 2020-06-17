<template>
  <div class="contain">

      <div class="header">
        <h1>Nouveau Devis</h1>
        <div class="header_logo">
        <img src="../../assets/img/eye.svg" alt="eyes icon">
        <img  id="leftIcon" src="../../assets/img/print.svg" alt="print icon">
      </div>

      <img id="ellipse" src="../../assets/img/Ellipse.svg" alt="ellipse icon">

      <hr class="solid">


      <div class="whitePaper">
      <div class="heading">Marjane</div>
      <div class="informations">
        <h1>Informations :</h1>
        <div class="inp1">
          <label>Nom de devis</label>
          <br>
          <input type="text" value="# D2000001">
        </div>
      </div>



      </div>




      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;   

#ellipse{
  position: absolute;
  right: -3px;
  width: 65px;
}
#leftIcon{
  position: relative;
  right: 12px;
}

.whitePaper{
    width: 53.5vw;
    margin-left: 77px;
    margin-top: 56px;
    height: 86vh;
    background: white;
    box-shadow: 0px 4px 18px rgba(71, 71, 71, 0.3)
}

hr{
    width: 87%;
    margin-top: 15px;
    margin-bottom: 1rem;
}

.header{
  display: block;
  margin-top: 13px;
  h1{
    position: relative;
    top: 19px;
    width: 74%;
    font-size: 19px;
    margin-left: 80px;
    margin-right: 0px !important;
    display: inline-block;
    font-family: "Gilroy-Bold";
    color: #2262C6;
  }
  .header_logo{
    display: inline-block;
    position: relative;
    top: 18px;
    left: 5px;
    img{
      width: 55px;
      position: relative;
    }
  }
}

.heading{
    text-align: center;
    font-family: "Gilroy-Bold";
    color: #2262C6;
    font-size: 21px;
    padding-top: 39px
}

.informations{
  h1{
    font-family: $gm;
    color: $black;
    font-size: 16px;
    padding-top: 20px;
    margin-left: 51px;
    padding-bottom: 14px;

  }
}

.inp1{
  label{
    font-family: $gm;
    font-size: 12px;
    color:$white2;
    margin-left: 51px;
    padding-top: 7px;
    margin-bottom: 7px;
  }
  input{
    border: none;
    border-bottom: 0.6px solid #616467;
    background-color: transparent;
    margin-left: 51px;
    color:#6E7275;
  }
}





 @media (max-width: 1000px) {

   .header h1{
    margin-left: 9%;
   }
}

 @media (max-width: 777px) {

   .header h1{
    margin-left: 9%;
    width: 60%;
   }
   hr{
    position: relative;
    right: 6%;
    width: 83%;
   }
}

 @media (max-width: 577px) {
.header h1{
    margin-left: 12%;
    width: 60%;
}
hr {
    position: relative;
    right: 0%;
    width: 74%;
}

}

 @media (max-width: 409px) {

hr {
    position: relative;
    left: 3%;
    width: 77%;
}

}

 @media (max-width:  395px) {

hr {
    position: relative;
    left: 3%;
    width: 49%;
}
.header h1{
    margin-left: 12%;
    width: 81%;
    text-align: center;
}
.header .header_logo{
    display: block;
    position: relative;
    float: none;
    width: 111px;
    margin:0 auto
}

}





</style>
