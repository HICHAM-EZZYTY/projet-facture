<template>
    
    <div class="tableplus" :key="componentKey">
        <div v-if="isLoading">
            Loading ... 
        </div>
        
        <table border="1" v-else >
            <thead>
                <th>nom</th>
                <th>name</th>
                <th>name</th>
            </thead>
            <tbody>
                <tr v-for="(article, index) in articles" :key="index">
                    <td>{{ article.English }}</td>
                    <td>{{ article.French }}</td>
                    <td>
                        <button v-show='article.isDelitable' @click="deleteArticle(article.id)">
                            delete
                        </button> 
                    </td>
                </tr>
            </tbody>
        </table>

        
        
        <router-link :to="{ name: 'NewTypeArticles' }" >
            Add new Article.
        </router-link>
    </div>
</template>

<script>
export default {
    // when this gets linked to the API the is loading field should be initialied with a true value,
    // to indicat that the dat still loading from the server
    name: "TypeArticles",
    data: function(){
        return {
            componentKey: 0,
            isLoading: true,
            articles: []
        }
    }, 
    methods: {
        getArticles(){
            this.$http
                .get("/type_articles")
                .then((res) => {
                        console.log(res.data)
                    this.isLoading = false ; 
                    res.data.forEach( (data) => {
                        let d = {
                            id: data.id,
                            isDelitable : (data.user_id == null) ? false : true ,
                            French: data.article_type_value, 
                            English: data.article_type_value_eng, 
                        }
                    this.articles.push(d);
                    });
                })
                .catch();
        },
        deleteArticle(id){
            // ajouter un article.
            this.$http
                .delete(`/type_articles/${id}`)
                .then( () => {
                    this.componentKey += 1 ;
                    
                    console.log("deleted")
                })
                .catch(
                    () => {
                        console.log("grrr")
                    }
                );
        }
    }, 
    created(){
        this.getArticles();
    }
}
</script>
<style scoped >
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
