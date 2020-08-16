<template>
    <!-- <b-button class="submit  my-sm-1" type="submit" variant="primary">      -->
        <router-link :to=route  class="submit  my-sm-1">
            <img src="../assets/img/Plus.svg" class="plus">
            Nouveau {{text}}
        </router-link>
    <!-- </b-button> -->
    
</template>

<script>
export default {
    name: "navbar-button", 
    data: function() {
        return {
            text: "Facture", 
            route: {
                name: 'NewFacture'
            }
        }
    }, 
    watch: {
        $route(to){
            if(to.name === "Client" || to.name === "Devis" || to.name === "Facture" || to.name === "Societe"){
                this.text = to.name; 
                this.route.name = `New${to.name}`;
            }
        }
    }

}
</script>

<style lang="scss" scoped >
.submit {
    padding: 9px 20px;
    background: #2262c6;
    color: white;
    font-weight: 500;
    font-size: 13px;
    text-align: center;
    border-radius: 5px;

}
.plus{
    width: 12px;
    height: 12px;
    position: relative;
    // right: 14px;
    // bottom: 0.6px;
}
</style>