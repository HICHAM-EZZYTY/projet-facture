<template>

<p>This is testing right now</p>

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

<style  lang="scss" >

@import "../../scss/main.scss" ;   



p{
    color: $primary;
    background-color:$primary;

}

</style>