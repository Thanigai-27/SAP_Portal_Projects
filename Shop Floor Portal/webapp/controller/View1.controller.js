sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Shop_floor_portalShop_floor_portal.controller.View1", {
		onInit:function(){
			
			var surl="/sap/opu/odata/SAP/ZODATA_TH_SFP_LOGIN_SRV/ZODATA_TH_SFP_LOGINSet(ZcusId='2',ZcusPassword='1234')";
			var jsonconv1 = new sap.ui.model.json.JSONModel();
			jsonconv1.loadData(surl,null,false);
			this.getView().setModel(jsonconv1);
			var a=jsonconv1.getProperty("/d/Return");
			window.console.log(a);
		
		},
		Onclick:function(){
			var user = this.getView().byId("user").getValue();
			var pass = this.getView().byId("pass").getValue();
			
			
			// var surl="/sap/opu/odata/SAP/ZODATA_TH_SFP_LOGIN_SRV/ZODATA_TH_SFP_LOGINSet(ZcusId="+user+",ZcusPassword="+pass+")?$format=json";
			// var jsonconv1 = new sap.ui.model.json.JSONModel();
			// jsonconv1.loadData(surl,null,false);
			// this.getView().setModel(jsonconv1);
			// var a=jsonconv1.getProperty("/d/Return");
		
			var surl="/sap/opu/odata/SAP/ZODATA_TH_SFP_LOGIN_SRV/ZODATA_TH_SFP_LOGINSet(ZcusId='"+user+"',ZcusPassword='"+pass+"')";
			var jsonconv1 = new sap.ui.model.json.JSONModel();
			jsonconv1.loadData(surl,null,false);
			this.getView().setModel(jsonconv1);
			var a=jsonconv1.getProperty("/d/Return");
			
		
		         
			if(a==="Login Successful"){
				window.console.log("success");
				var Or = sap.ui.core.UIComponent.getRouterFor(this);
				Or.navTo("View5");
			}
			else {
				window.console.log("Invalid User");
				window.console.log();
			
			}
			
		}

	});
});