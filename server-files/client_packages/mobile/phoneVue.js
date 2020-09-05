
$(document).ready(function(){

  $('p').tooltip(options)

});

var today = new Date()
var final = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
let vm = new Vue({
    el:"#app",
    data:{
        x : 0,
        y : 0,
        ded : '',
        key_set : false,
        PhoneStep : 1,
        UserTime : final,
        PhoneStyle : 'Loading',
        MessagePanel: true,
        WlanPanel : false,
        ContactPanel : false,
        CallPanel : false,
        UserIC : 'Irancell',

    },
    computed : {
        PhoneStyle : function(){
            if(this.PhoneStep == 1){
                return 'Main';
            }else{
                return 'Loading';
                
            }
        },
        
    },
    methods:{
        unlockPhone : function(){
            this.ded = 'dead'
            this.PhoneStep = 1
            console.log(this.PhoneStep)
        }
    },
    watch : {
        UserTime : function(){
            console.log('worked')
        }
    }

});
function up() {
    setInterval(() => {
        var today = new Date()
        var final = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        vm.$data.UserTime = final
        up();
    },1000);
}
up()
