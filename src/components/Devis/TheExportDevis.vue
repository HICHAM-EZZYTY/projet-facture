


<template>
  
<p @click="test()">This Is juste testing</p>

</template>

<script>
export default {
      props:{
      
        DevisId:{

            type:Number,
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

<style scoped>

</style>