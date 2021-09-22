<template>
<div>
  <Login text="כניסה" @getAllShifts="getAllShifts()" @shiftStatus="shiftStatus($event)" />
  <Menu/>
</div>
</template>


<script>
import Login from './Login.vue'
import Menu from './Menu.vue'
import { shiftStatus,getAllShifts } from '../services/ShiftService'

export default {
   name: 'Dashboard',
   components: {
    Login,
    Menu
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
            console.log(response)
            });
           
        },
        mounted () {
            this.getAllUsers();
        }
    }
}
</script>