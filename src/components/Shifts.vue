<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>תעודת זהות</th>
                    <th>תאריך</th>
                    <th>יום</th>
                    <th>סטטוס</th>
                    <th>שעה</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in shifts" :key="item.updateTime">
                    <td>{{ item.ID }}</td>
                    <td>{{getDate(item.updateTime)}}</td>
                    <td>{{ days[getDay(item.updateTime)]}}</td>
                    <td v-if="item.Status > 0" >כניסה</td>
                    <td v-else >יציאה</td>
                    <td>{{ getTime(item.updateTime)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        name: 'Shift',
        props: ['shifts'],
        data(){
            return{
             days:["ראשון", "שני", "שלישי", "רביעי" ,"חמישי", "שישי", "שבת"]
            }
        },
        methods:{
            getTime(date){
                var _date = new Date(date);
                console.log(_date.getMinutes());
                return (_date.getHours()<10?'0':'') +_date.getHours() + ":" + (_date.getMinutes()<10?'0':'') + _date.getMinutes();
            },
             getDate(date){
                var _date = new Date(date);
                return _date.getDate() + "-" + _date.getMonth() + "-" + _date.getFullYear();
            },
             getDay(date){
                var _date = new Date(date);
                return _date.getDay();
            }
        }
    }  
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 50%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:nth-child(even) {background-color: #f2f2f2;}
</style>