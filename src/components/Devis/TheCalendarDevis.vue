<template>
    
    <div class="containerGlobal">
    <div class="rec1">
    <img src="../../assets/img/Group 34.svg" alt="PictureOfRectange1">
    </div>
    <div id="card">
    </div>

    <div class="rec2"></div>
    <div class="circleclose"></div>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;   


.containerGlobal {
    background-color: $background;
    height: 615px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
}

.rec1{
    background-image: url("../../assets/img/Rectangle 45.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 183px;
    width: 331px;
    border-radius: 6px;
    top: 19%;
    left: 18.2%;
    z-index: 1;
    float: left;
    img{
    height: 128px;
    position: relative;
    bottom: 50px;
    left: 13%;
    }
}
#card{

    background-color: #2262C6;
    height: 288px;
    width: 665px;
    border-radius: 10px;
    z-index: 2;
    position: absolute;
    left: 24%;
    top: 141px;
}
    .rec2{

    background-image: url("../../assets/img/Rectangle 46.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 137px;
    width: 245px;
    border-radius: 6px;
    top: 323px;
    right: 22%;
    z-index: 1;
    float: right;
    }
    .circleclose{
    background-image: url("../../assets/img/Ellipse 33.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 428px;
    float: left;
    height: 192px;
    width: 173px;

    }


</style>