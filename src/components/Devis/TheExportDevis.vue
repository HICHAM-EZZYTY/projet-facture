<template>
<div class="containerGlobal">

<div class="rec1"><img src="../../assets/img/Rec1.svg" alt="PictureOfRectange1"></div>
<div class="rec2"><img src="../../assets/img/Rec2.svg" alt="PictureOfRectange2">
<div class="containerCard"></div>

</div>
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

.containerGlobal {
    background-color: $background;
}

.rec1>img{
    display: block;
    margin: 0 auto;
    position: relative;
    width: 23%;
    height: 209px;
    right: 17%;
    top: 75px;
    z-index: 0;
}

.rec2>img{
   position: relative;
    width: 53%;
    height: 394px;
    display: block;
    margin: 0 auto;
    left: 12%;
    bottom: 57px;
    z-index: 0;
}

.containerCard{

    background-color: $white;
    display: block;
    margin: 0 auto;
    width: 53%;
    height: 400px;
    border-radius: 6px;
    z-index: 2;
    position: absolute;
    top: 102px;
    left: 25%;
    box-shadow: -2px -5px 24px rgba(0, 0, 0, 0.07);    
}
// start Styling the responsive for small devices 

@media (max-width: 1100px) {



}


</style>