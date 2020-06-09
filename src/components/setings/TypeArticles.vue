<template>
    <div>
        <table border="1" >
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
    </div>
</template>


<script>
export default {
    name: "TypeArticles",
    data: function(){
        return {
            articles: []
        }
    }, 
    methods: {
        getArticles(){
            let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MTcwNTYxNCwiZXhwIjoxNTkxNzA5MjE0LCJuYmYiOjE1OTE3MDU2MTQsImp0aSI6InMxOW1HajhBbHd4RzFNVXEiLCJzdWIiOjEzLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.u9hnLwMQ99bhbCY7weaWX3vvpju8pVJqZFIfcaV8dW4";
            this.$http.defaults.headers.common = { Authorization: `Bearer ${token}` };
            
            this.$http
                .get("/type_articles")
                .then(
                    (res) => {
                        this.articles = res.data;
                    }
                )
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