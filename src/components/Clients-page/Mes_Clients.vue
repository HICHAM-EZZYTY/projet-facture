<template>
    
      <div class="header">
        <h1>Nouveau Devis</h1>
            <div class="header_logo">
                <img src="../../assets/img/eye.svg" alt="eyes icon">
                <img  id="leftIcon" src="../../assets/img/print.svg" alt="print icon">
            </div>
      </div>
</template>

<script>
export default {
    name: "Mes_clients",
}
</script>

<style scoped lang="scss">
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