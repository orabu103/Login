<template>
    <div class="container">
        <div class="row justify-content-center">
                <div class="col-1">
                     <button @click='test()' type="button"> {{text}} </button>
                </div>
                <div class="col-1">
                    <input type="text" v-model="message" placeholder="הכנס תעודת זהות"/>
                </div>  
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default{
 name: 'Login',
    props:{
       text: String
    },
    data(){
        return{
            message:''
        }
    },
    methods:{
       getAllShifts() {
          this.$emit('getAllShifts')
       },
        test(){
                axios.get(`api/getTable`).then(response => (this.info = response))
        }
   }
}
</script>
