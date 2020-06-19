<template>
    <div class="new-article-container">
        <div class="text-group">
            <input type="text" class= "text-input" v-model="article.article_type_value" placeholder="value en francais" />
        </div>    
        <div class="text-group">
            
            <input type="text" class= "text-input" v-model="article.article_type_value_eng" placeholder="value in english" />
        </div>
        <button class="settings-btn btn btn-primary" @click="add">
            Add
        </button>
    </div>

</template>
<style lang="scss" scoped>
    .new-article{
        &-container{
            padding-top: 1.2em; 
            display: flex;
            flex-direction: column; 
            align-items: center; 
            width: 100%;
        }  
    }
 
    .text{
        &-group{
            width: 100%; 
            display: flex; 
            flex-direction: row;
            align-items: center;
            @media screen and (max-width: 600px){
                &{
                    width: 100%
                }
            }
        }
        &-input{ 
            border: 0px;
            border-bottom: 1px solid black; 
            width: 90%;
            margin: auto;
            display: block;
            padding: 1em; 
            
            &::placeholder{
                text-transform: uppercase;
            }
            &:focus{
                outline:none;
                border-bottom:1px solid red; 
            }
            
        }
    }
    
</style>
<script>
export default {
    name : "newArticle", 
    data: function () {
        return {
            article: {
                article_type_value: null,
                article_type_value_eng: null,
            }
        };
    }, 
    methods: {
        add: function () {
            this.$http
                .post("type_articles", this.article)
                .then( () => this.$router.push('/settings/type-articles'))
                .catch( () => console.log("error") );
        }
    }
}
</script>