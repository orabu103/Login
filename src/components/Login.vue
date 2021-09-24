<template>
    <div class="container">
        <div class="row justify-content-center">
                <div class="col-1">
                    <input type="text" v-model="message" placeholder="הכנס תעודת זהות" /> 
                </div>
                 <div v-if="message.length == 9">
                     {{this.lastShiftStatus()}}
                    <div class="col-1">
                        <button  @click='shiftStatus()' type="button"> {{this.text}} </button>
                    </div>
                 </div>
                  
        </div>
    </div>
</template>
<script>
import { lastShiftStatus } from '../services/ShiftService'

export default{
 name: 'Login',
    data(){
        return{
            message:'',
            text :''
        }
    },
    methods:{
       shiftStatus() {
          console.log("ok")
           const payload = {
              ID: Number(this.message),
              updateTime:new Date()
          }
          this.$emit('shiftStatus', payload)
          this.message = '';
      },
       lastShiftStatus() {
            lastShiftStatus(this.message).then(response => {
            console.log(response);
            this.text = response ? "כניסה" : "יציאה";
            });
        }
   }
}
</script>
