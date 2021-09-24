<template>
<div>
  <Login text="כניסה" @getAllShifts="getAllShifts()" @shiftStatus="shiftStatus($event)" />
  <Menu/>
  <Shift v-if="shifts.length > 0" :shifts="shifts" />
</div>
</template>


<script>
import Login from './Login.vue'
import Menu from './Menu.vue'
import Shift from './Shift.vue'

import { shiftStatus,getAllShifts } from '../services/ShiftService'

export default {
   name: 'Dashboard',
   components: {
    Login,
    Menu,
    Shift
    },
    data() {
      return {
          shifts: [],
      }
  },
   methods:{
        shiftStatus(data) {
            console.log('data:::', data)
            shiftStatus(data).then(response => {
            console.log(response);
            });
         },
        getAllShifts() {
            getAllShifts().then(response => {
            this.shifts = response  
            console.log(this.shifts);
            console.log(response)
            });
           
        },
        mounted () {
            this.getAllUsers();
        }
    }
}
</script>