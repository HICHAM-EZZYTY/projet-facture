<template>
    <div>
        <div class="forms-sides--group" :key="counter">
            <div class="nn">
                <label class="forms-sides--group_label" >{{title}} :</label>
            </div>
            
            <S_Input 
                v-for="i in values.length" 
                :placeholder="placeholder + ' ' + i " 
                :key="i" 
                :isLast=" i == values.length"
                :index= 'i - 1'
                :defaultValue="values[i - 1].value"

                @onInput='addValue' 
                @add="_add" 
                @remove="_remove"  />
        </div>
    </div>
</template>
<script>

import S_Input from './S_Input.vue';
// import _ from 'lodash'; 

export default {
    name: "Custom_Input", 
    data: function(){
        return {
            counter : 1, 
            values: []
        }
    }, 
    props:[
        "placeholder",
        "title", 
        "dValues"
    ],
    components: {
        S_Input
    }, 
    methods: {
        _add: function(){
            this.values.push("");
            this.counter++;
        }, 
        _remove: function(arg) {
            this.counter--;
            if(this.values.length > 1  ){
                this.values.splice(arg, 1);
            }
        }, 
        addValue: function(argIndex, argValue) {
            this.values[argIndex] = {"value": argValue}
            this.$emit('addedInput', this.values);
        }
    }, 
    
    created: function() {
        this.values.push(""); 
    }
}
</script>
<style lang="scss" scoped>
    .nn{
        display: flex ; 
        
    }
</style>