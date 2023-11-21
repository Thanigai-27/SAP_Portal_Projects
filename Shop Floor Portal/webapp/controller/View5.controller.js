sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Shop_floor_portalShop_floor_portal.controller.View5", {

		
			Onclick: function() {
					var Or = sap.ui.core.UIComponent.getRouterFor(this);
					Or.navTo("View3");
		
			},
			Onpress: function() {
					var Or = sap.ui.core.UIComponent.getRouterFor(this);
					Or.navTo("View4");
		
			},
				back: function() {
					var Or = sap.ui.core.UIComponent.getRouterFor(this);
					Or.navTo("View1");
		
			}

		

	});

});