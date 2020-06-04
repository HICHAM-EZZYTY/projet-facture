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

<style >

p{
    font-family:var(--f-sb);
    color: var(--c-r);
    background-color: var(--c-r);
}

</style>