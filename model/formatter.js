sap.ui.define([], function () {
    "use strict";

    return {

		statusText :  function (OpeningTime, Closed) {
      var actualTime = this.getView().getModel("i18n").getResourceBundle();
      var time = new Date().toLocaleTimeString('de-de', { 
        hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
      
        var day = new Date().toLocaleString('de-de', {  weekday: 'long' });
      
        if (OpeningTime <= time && time <= "20:00" && Closed != day ) {
          return actualTime.getText("restaurantStatusA");
        }else{
          return actualTime.getText("restaurantStatusB");
        }
		}
	};

});
