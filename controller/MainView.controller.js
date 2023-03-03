sap.ui.define(["./BaseController",'sap/m/MessageToast'],
 function (Controller,MessageToast) {
	"use strict";
	return Controller.extend("com.myorg.UI5Exercise.controller.MainView", {

        // Popups can be shown with Messagetoast
        onPress: function (){
            MessageToast.show("This application shows restaurants near wuerzburg office. It also includes an random restaurant picker.");
        },
        
        onPressList: function () {
            this.navTo("RestaurantList");
        },

        onPressRandom: function () {
            this.navTo("RandomRestaurantPicker");
        }
	});
});