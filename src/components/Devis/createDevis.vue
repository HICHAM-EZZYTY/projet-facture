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
  width: 1vw;
  height:  20vh;
  background: #FFFFFF;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
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



</style>
