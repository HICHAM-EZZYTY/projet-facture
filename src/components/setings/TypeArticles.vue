<template>
    
    <div class="tableplus" :key="componentKey">
     
        
        <!-- 
            this is a custom component . 
        -->
      <Title mainTitle="Préférences Type Articles :" subTitle="Ici, Vous Pouvez Modifier Les Préférences des Type Articles" />
        <div v-if="isLoading">
            Loading ... 
        </div>
        <table class="table" v-else>
            <thead class="thead-dark">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Nom</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(article, index) in articles" :key="index">
                    <td>{{ article.English }}</td>
                    <td>{{ article.French }}</td>
                    <td>
                        <button v-show='article.isDelitable' class="btn btn-danger" @click="deleteArticle(article.id)">
                            delete
                        </button> 
                    </td>
                </tr>
            </tbody>
        </table>

        
        <router-link class="settings-btn btn btn-primary" :to="{ name: 'NewTypeArticles' }" >
            Add new Article.
        </router-link>
    </div>
</template>

<script>
import Title from './Title.vue'; 
export default {
    // when this gets linked to the API the is loading field should be initialied with a true value,
    // to indicat that the dat still loading from the server
    name: "TypeArticles",
    components: {
        Title,
    }
    ,
    data: function(){
        return {
            componentKey: 0,
            isLoading: true,
            articles: []
        }
    }, 
    methods: {
        getArticles: function(){
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
        deleteArticle: function(id){
            // ajouter un article.
            this.$http
                .delete(`/type_articles/${id}`)
                .then( () => {
                    this.componentKey += 1 ;
                    this.articles.splice(id, 1);  
                    console.log("deleted");
                })
                .catch(
                    () => {
                        console.log("grrr")
                    }
                );
        }, 
    }, 
    created(){
        this.getArticles();
    }
}
</script>
<style lang="scss" scoped >
    .tableplus{
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        min-height: 70vh;
    } 
    table{
        width: 80%;
        margin-top: 2em;
        text-align: center;
    }
    button{
        border-radius: 3px;
    }
</style>
