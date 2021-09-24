<template>
<div>
  <Login text="כניסה" @getAllShifts="getAllShifts($event)" @shiftStatus="shiftStatus($event)" />
 
</div>
</template>


<script>
import Login from '../components/Login.vue'
//import Menu from './Menu.vue'
//import Shift from './Shift.vue'

import { shiftStatus } from '../services/ShiftService'

export default {
   name: 'Home',
   components: {
    Login,
    //Menu,
    //Shift
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
        }
    }
}
</script>