sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Shop_floor_portalShop_floor_portal.controller.View2", {

		Onclick: function() {
			var Or = sap.ui.core.UIComponent.getRouterFor(this);
				Or.navTo("View3");
		}
	

	
	});

});