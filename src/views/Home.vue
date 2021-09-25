<template>
    <div>
        <Login @shiftStatus="shiftStatus($event)" />
    </div>
</template>


<script>
import Login from '../components/Login.vue'
import { shiftStatus } from '../services/ShiftService'

export default {
   name: 'Home',
   components: {
    Login,
    },data() {
      return {
          text:''
      }
  },
   methods:{
        shiftStatus(data) {
            console.log('shiftStatus:::', data)
            shiftStatus(data).then(response => {
            console.log(response);
            });
        } 
    }
}
</script>