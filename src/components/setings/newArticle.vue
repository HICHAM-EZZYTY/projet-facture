<template>
    <div>
        <input type="text" v-model="article.article_type_value" placeholder="value en francais" />
        <input type="text" v-model="article.article_type_value_eng" placeholder="value in english" />
    
        <button @click="add">
            Add
        </button>
    </div>

</template>

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