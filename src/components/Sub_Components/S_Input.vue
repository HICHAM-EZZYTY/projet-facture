<template>
    <div class="custom-input">
        <input 
            type="text"  
            class="forms-sides--group_text" 
            v-model="value" 
            :placeholder="placeholder" />

        <div class="fa-buttons">
            <i class="fa fa-plus" v-show='isLast' @click="add"></i>
            <i class="fa fa-times"  @click="remove"></i>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: "S_Input", 
    
    data: function(){
        return {
            value: null 
        }
    }, 
    
    props:[
        'placeholder', 
        'isLast', 
        'index', 
        'inputValue', 
        'isRemovable', 
        'defaultValue'
        ],
    
    watch: {
        value: _.debounce(
            function() {
                this.$emit('onInput', this.index, this.value)
            }, 10
        ) 
    }, 
    
    methods: {
        add: function() {
            this.$emit("add");
        }, 
        
        remove: function() {
            this.$emit("remove", this.index);
        }
    },

    created: function() {
        this.value = this.defaultValue
    }
}
</script>

<style lang="scss" scoped>
    .custom-input{
        
        position: relative ; 
        & .forms-sides--group_text{
            background: transparent;
            margin: .5em 0em; 
            &:first-child{
                // margin-top: 0em !important;
            }
        }
        & .fa-buttons {
            display: flex ; 
            align-items: center ; 
            color: black ;
            position : absolute; 
            // height: 30px;
            top : 32% ;
            right : 0.3em; 
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