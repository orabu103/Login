<template>
    <div class="container">
        <h2>Shifts</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>תאריך</th>
                    <th>יום בשבוע</th>
                    <th>סטאטוס</th>
                    <th>זמן</th>
                 
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in shifts" :key="item.updateTime">
                    <td>{{ item.ID }}</td>
                    <td>{{ getDate(item.updateTime)}}</td>
                    <td>{{ getDay(item.updateTime)}}</td>
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
        methods:{
            getTime(date){
                var _date = new Date(date);
                return _date.getHours() + ":" + _date.getMinutes();
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