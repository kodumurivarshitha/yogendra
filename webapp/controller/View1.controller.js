sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,ODataModel) {
        "use strict";

        return Controller.extend("feedbackform.controller.View1", {
            onInit: function () {
                var c_Name = this.getView().byId('customerNameInput').getMaxLength();
                

             

            },
            onSubmit: function(){
                // var a = this.getView().byId('customerNameInput').getValue();
                // var cust_Name = a.length;
                // if(cust_Name<=3){
                //     MessageToast.show("please enter valid input");
                // }

                var customerName = this.byId("customerNameInput").getValue();
                var email = this.byId("emailInput").getValue();
                var feedback = this.getView().byId('feedbackTypeSelect').getSelectedItem();
                var feedbackType = feedback ? selectedFeedbackType.getText() : '';
                var comments = this.byId("commentsTextArea").getValue();

                if (!customerName || !email || !feedbackType || !comments) {
                    MessageToast.show("Please fill in all fields");
                    return;
                }
                else{
                    MessageToast.show("Validation success");
                }
            }
        });
    });
