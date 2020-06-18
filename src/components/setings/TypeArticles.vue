<template>
    
    <div class="tableplus" >
        <div v-if="isLoading">
            Loading ... 
        </div>
        <table border="1" v-else >
            <thead>
                <th>nom</th>
                <th>name</th>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.article_type_value_eng">
                    <td>{{ article.article_type_value }}</td>
                    <td>{{ article.article_type_value_eng }}</td>
                </tr>
            </tbody>
        </table>
        
        <button>
            Add new Article.
        </button>
    </div>
</template>

<style scoped>
    .tableplus{
        padding-right: 40px;
        border: 4px;
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    } 
    table{
        width: 50%;
        text-align: center;
    }
    button{
        text-transform : uppercase; 
        margin: 20px;
        height: 40px; 
        border-radius: 30px;  
    }
</style>

<script>
export default {
    // when this gets linked to the API the is loading field should be initialied with a true value,
    // to indicat that the dat still loading from the server
    name: "TypeArticles",
    data: function(){
        return {
            isLoading: true,
            articles: []
        }
    }, 
    methods: {
        getArticles(){
            this.$http
                .get("/type_articles")
                .then((res) => {
                        
                        this.isLoading = false ; 
                        this.articles = res.data;
                })
                .catch();
        },
        addArticles(){
            // ajouter un article . 
        }
    }, 
    created(){
        this.getArticles();
    }
}
</script>