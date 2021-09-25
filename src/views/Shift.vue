<template>
<div class="container">
  <div class="form">
    <div class="input-id">
      <input type="text" v-model="message" placeholder="הכנס תעודת זהות" maxlength="9" dir="rtl"/>
    </div> 
    <div>    
      <button v-if="message.length == 9" @click='getAllShifts()' type="button"> הצג משמרות</button>  
    </div>
  </div>
  <Shifts class="shift" v-if="shifts.length > 0" :shifts="shifts" />
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
            this.message = '';
            });
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button{
    background-color: green;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius:10px;
}
.container{
  
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.form {
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 80px 40px 40px;
  background: rgba(0,0,0,0.7);
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 15px 25px rgba(0,0,0,0.5);
}
.form::before {
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255,255,255, 0.08);
  transform: skewX(-26deg);
  transform-origin: bottom left;
  border-radius: 10px;
  pointer-events: none;
}
.input-id input{
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: inherit;
}
</style>