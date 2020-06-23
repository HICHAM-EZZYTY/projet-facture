<template>
    <div>
        <div class="forms-sides--group">
            <div class="nn">
                <label class="forms-sides--group_label" >Numéro de téléphone :</label>
                <div>
                    <i class="fa fa-plus" @click="add"></i>
                    <i class="fa fa-times" @click="remove"></i>
                </div>
            </div>
            
            <S_Input v-for="i in counter" :placeholder=" placeholder + ' ' + i " :key="i" @onInput='addValue'/>
        </div>
    </div>
</template>
<script>

import S_Input from './S_Input.vue'
export default {
    name: "Custom_Input", 
    data: function(){
        return {
            counter : 1, 
            values: []
        }
    }, 
    props:["placeholder"],
    components: {
        S_Input
    }, 
    methods: {
        add: function(){
            this.counter ++;
        }, 
        remove: function() {
            if(this.counter > 1 ) {
                this.counter--;
            }
            this.values.pop();
        }, 
        addValue: function(arg) {
            this.values.push({
                value: arg
            })
            this.$emit('addedInput', this.values);
        }
    }
}
</script>
<style lang="scss" scoped>
    .nn{
        display: flex ; 
        & div {
            display: flex ; 
            align-items: center ; 
            color: black ;
            & .fa{
                margin: 0em .2em;
                display: flex; 
                background: #2262C6;
                color: white; 
                height: 1.5em ;
                width: 1.5em ;
                align-items: center;
                justify-content: center;
                border-radius: 50%; 
                
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
</style>