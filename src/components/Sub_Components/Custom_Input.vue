<template>
    <div>
        <div class="forms-sides--group" :key="counter">
            <div class="nn">
                <label class="forms-sides--group_label" >Numéro de téléphone :</label>
            </div>
            
            <S_Input 
                v-for="i in values.length" 
                :placeholder=" placeholder + ' ' + i " 
                :key="i" 
                :isLast=" i == values.length"
                :isRemovable="i != 1 "
                :index= 'i - 1'
                :defaultValue="values[i - 1]"
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
    props:["placeholder"],
    components: {
        S_Input
    }, 
    methods: {
        _add: function(){
            // this.counter ++;
            this.values.push("");
            // console.log(this.values);
        }, 
        _remove: function(arg) {
            // if(this.counter > 1 ) {
            //     this.counter--;
            // }
            // this.values.pop();
            // console.log(arg);
            this.counter++;
            if(this.values.length > 1  ){
                console.log(arg)
                this.values.splice(arg, 1);
                console.log(this.values);
            }
        }, 
        addValue: function(argIndex, argValue) {
            this.values[argIndex] = argValue
            this.$emit('addedInput', this.values);
            console.log(this.values);
        }
    }, 
    created: function() {
        this.values.push(""); 
        console.log(this.values);
    }
}
</script>
<style lang="scss" scoped>
    .nn{
        display: flex ; 
        
    }
</style>