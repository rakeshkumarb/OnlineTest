import Ember from 'ember';


export default Ember.Controller.extend({
    isShowingModal: false,
    actions: {
        
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
            console.log("toggled");
            console.log(JSON.stringify(dataStringsc));
        
            var uid = this.get('uid');
            var q_type = this.get('q_type');
            var score = this.get('score');
        
            var model = this.get(model.message);
            var datalist = [];
            for(var i=0; i< model.length; i++){

          var dataStringsc ={
                    "uid": uid,
                    "q_type": item.id,
                    "score": item.userans
                }

                datalist[0] = dataStringsc;
                datalist[1] = dataStringsc;
                datalist[2] = dataStringsc;
                datalist[3] = dataStringsc;
                datalist[4] = dataStringsc;

            }
              
                $.ajax({
                    type: 'POST',
                    accepts: 'application/json',
                    url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8082/userAnswer',
                    data: datalist,
                    dataType: "json",
                    success: function(response) {
                        this.transitionToRoute('programming');
                        alert(response)
                    },
                    failure: function(result) {
                        alert(result)
                    }
                })

        },
        toggleModalOk:function(){
            this.transitionToRoute('home');
        },

        scoreCalculation : function() {

            var lastName = this.get('lname');
            var firstName = this.get('fname');
            var phoneNo = this.get('phone');
            var emailId = this.get('email');
            //var phoneNo = document.getElementById('phone');


            var dataString = {
                "fname": firstName,
                "lname": lastName,
                "phone": phoneNo,
                "email": emailId
            }
            console.log(JSON.stringify(dataString));
            $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8082/registerUser',
                    data: dataString,
                    dataType: "json",
                    success: function(response) {
                        this.transitionToRoute('test');
                        alert(response)
                    },
                    failure: function(result) {
                        alert(result)
                    }
                })     

                }
    }

});