<template>
<div>
  <Login text="כניסה"/>
  <Menu/>
</div>
</template>


<script>
import Login from './Login.vue'
import Menu from './Menu.vue'
import { getAllShifts } from '../services/ShiftService'

export default {
   name: 'Dashboard',
   components: {
    Login,
    Menu
    },
   methods:{
        getAllShifts() {
            getAllShifts().then(response => {
                console.log(response)
            })
        },
    }
}
</script>