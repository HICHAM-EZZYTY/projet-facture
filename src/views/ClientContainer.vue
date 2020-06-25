<template>
    <div>
        <Type_client @typeChange="_typeClient" @nextClicked="_next" v-show="typePage" />
        <Information_Compte v-show="clientInfoPage" @typePageClicked="_clientPrev" @comfirm="_clientInfo" :typeClient="type == 1"/>
        
    </div>
</template>


<script>
import Type_client from '../components/Clients-page/Type_client.vue';
import Information_Compte from '@/components/Clients-page/Information_Compte'; 
// import AddScociete from '@/components/client/AddSociete.vue';

export default {
    name: "ClientContainer",
    data: function() {
        return {
            type: 0, 
            client: {}, 
            typePage: true,
            clientInfoPage: false,
            // companyPage: false, 
        }
    },  
    components: {
        Type_client,
        Information_Compte,
        // AddScociete
    },
    methods: {
        _typeClient: function(arg) {
            this.type = arg; 
            console.log(this.type == 0);
        }, 
        _clientInfo: function(arg) {
            console.log(arg)
            this.client = arg;
            this.$http
                .post("/clients", this.client)
                .then((r) => console.log(r))
                .catch( (e) => console.error(e));
        }, 
        
        // navigation
        _next: function(){
            this.typePage = false;
            this.clientInfoPage = true;
        },
        _clientPrev: function() {
            this.typePage = true; 
            this.clientInfoPage = false;
        },
    } 
   
}
</script>