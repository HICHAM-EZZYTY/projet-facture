<template>
  <div class="contain">

    <div class="header">
      <div class="leftHeader">
        <h1>Mes Devis</h1>
      </div>

      <div class="rightHeader">
        <h4>Exporter mes Devis</h4>
        <img  id="icn1" src="../../assets/img/Group75.svg" alt="exporterIcon">
        <img id="icn2" src="../../assets/img/Group76.svg" alt="infoIcon">
      </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;   

.header{
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 43px;
  margin-left: 5%;
}
.leftHeader{
  h1{
  font-family: $bd;
  font-size: 19px;
  line-height: 34px;
  text-transform: capitalize;
  color: $blue;
  }
}
.rightHeader{
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  margin-right: 22%;
  h4{
  font-family: "Gilroy-Regular";
  font-size: 13.5px;
  line-height: 23px;
  text-transform: capitalize;
  color: #AAB5C6;
  margin-top: 3px;
  justify-self: end;
  margin-right: 5%;

  }
  img{
    height:30px;
    width:30px
  }
}
 #icn1{
    justify-self: end;
    margin-right: 7px;
    
 }
 #icn2{
  justify-self: flex-start;
 }


</style>