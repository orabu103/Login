<template>
    <div class="container">
        <div class="row justify-content-center">
                <div class="col-1">
                     <button @click='getAllShifts()' type="button"> {{text}} </button>
                </div>
                <div class="col-1">
                    <input type="text" v-model="message" placeholder="הכנס תעודת זהות"/>
                </div>  
        </div>
    </div>
</template>
<script>


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
       }
   }
}
</script>
