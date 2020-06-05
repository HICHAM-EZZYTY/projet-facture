<template>
<div class="containerGlobal">

<div class="rec1"><img src="../../assets/img/Rec1.svg" alt="PictureOfRectange1"></div>
<div class="rec2"><img src="../../assets/img/Rec2.svg" alt="PictureOfRectange2"></div>







</div>
</template>

<script>
export default {
      props:{
      
        DevisId:{

            type:String,
            required:true
        }
    },

        methods:{
        test(){
            console.log("hada tibiyen bali params khadma",this.DevisId)
            
        },
     
    },
 
 

}
</script>

<style  scoped lang="scss" >
@import "../../scss/main.scss" ;   

body {
    background-color: $background;
}

.rec1>img{
    position: relative;
    width: 316px;
    height: 209px;
    left: 20.4%;
    top: 75px;
    z-index: 0;
}

.rec2>img{
    position: relative;
    width: 509px;
    height: 394px;
    left: 41.4%;
    bottom: 57px;
    z-index: 0;
}



</style>