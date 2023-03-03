sap.ui.define([
'sap/ui/core/mvc/Controller',
'sap/ui/model/json/JSONModel',
'../model/formatter',
"sap/ui/core/routing/History"], function (Controller, JSONModel, formatter, History) {
	"use strict";
	return Controller.extend("com.myorg.UI5Exercise.controller.RestaurantList", {
    formatter: formatter,

    onInit: function () {
      // set explored app's demo model on this sample
      var oModel = new JSONModel(sap.ui.require.toUrl("com.myorg.UI5Exercise/webapp/Restaurants.json"));
      this.getView().setModel(oModel);
    },

    onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("MainView", {}, true);
			}
		},

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("DetailView", {
				restaurantPath: window.encodeURIComponent(oItem.getBindingContext("restaurant").getPath().substring(1)) 
			});
				// restaurantPath is defined in manifest.xml
				// router gives information to next page. There it can be get by the next controller. 
				// In this case DetailView controller
		}
	});
});