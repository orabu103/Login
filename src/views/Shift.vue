<template>
  <div class="Shift">
    <div class="col-1">
            <input type="text" v-model="message" placeholder="הכנס תעודת זהות"/>
    </div> 
    <button v-if="message.length == 9" @click='getAllShifts()' type="button"> הצג משמרות</button> 
   <Shifts v-if="shifts.length > 0" :shifts="shifts" />
  </div>
</template>

<script>
import Shifts from '../components/Shifts.vue'
import {getAllShifts } from '../services/ShiftService'

export default {
  name: 'Shift',
  components:{
    Shifts
  },
  data() {
      return {
          shifts: [],
          message: ''
      }
  },
   methods:{
        getAllShifts(id) {
            getAllShifts(this.message).then(response => {
            console.log(id)
            this.shifts = response  
            console.log(this.shifts)
            });
        }
    }
}
</script>