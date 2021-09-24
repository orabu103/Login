<template>
    <div class="container">
        <div class="row justify-content-center">
                <div class="col-1">
                    <input type="text" v-model="message" placeholder="הכנס תעודת זהות"/>
                </div>
                <div class="col-1">
                     <button @click='shiftStatus()' type="button"> {{text}} </button>
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
          this.$emit('getAllShifts' , this.message)
       },
       shiftStatus() {
          console.log("ok")
           const payload = {
              ID: Number(this.message),
              updateTime:new Date()
          }
          this.$emit('shiftStatus', payload)
      }
   }
}
</script>
