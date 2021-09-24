<template>
  <div class="Shift">
    <div class="col-1">
            <input type="text" v-model="message" placeholder="הכנס תעודת זהות"/>
    </div> 
    <button @click='getAllShifts()' type="button"> משמרות </button> 
    <h1>{{message}} </h1>
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
           
        },
        mounted () {
            this.getAllUsers();
        }
    }
}
</script>