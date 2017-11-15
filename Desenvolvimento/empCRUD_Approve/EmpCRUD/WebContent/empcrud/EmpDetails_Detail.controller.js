sap.ui.controller("empcrud.EmpDetails_Detail", {

	onInit: function() {

	},

	onBeforeRendering: function(evt) {
        //jQuery.sap.require("sap.m.MessageToast");
        //sap.m.MessageToast.show(evt.data.sPath);
				//console.log(evt);
	    //this.bindElement(evt.data.sPath);

	},

	Approve: function() {

		var oEntry = {};

		oEntry.Pernr 	= sap.ui.getCore().byId("txtPernr").getText();
		oEntry.Usrid 	= sap.ui.getCore().byId("txtUsrid").getText();
		oEntry.Status = "3";

		OData.request({
								requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/EmployeeSet",
								method : "GET",
								headers : {
														"X-Requested-With" : "XMLHttpRequest",
														"Content-Type" : "application/atom+xml",
														"DataServiceVersion" : "2.0",
														"X-CSRF-Token" : "Fetch"
								}
							},
								function(data, response) {
									header_xcsrf_token = response.headers['x-csrf-token'];
									var oHeaders = {
										"x-csrf-token" : header_xcsrf_token,
										'Accept' : 'application/json',
									};
									OData.request({
										requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/EmployeeSet('"+oEntry.Usrid+"')",

										method : "PUT",
										headers : oHeaders,
										data:oEntry
									},
									function(data,request) {
										sap.m.MessageToast.show("Dados Salvos com Sucesso");
										//alert("Dados Salvos com Sucesso");
										location.reload(true);
									},
									function(err) {
										var errorObj1 = JSON.parse(err.response.body);
										alert(errorObj1.error.message.value);
									});
								},
								function(err) {
									var request = err.request;
									var response = err.response;
									alert("Error in Get -- Request " + request + " Response " + response);
								}
		);

		OData.request({
								requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/DependentesSet",
								method : "GET",
								headers : {
														"X-Requested-With" : "XMLHttpRequest",
														"Content-Type" : "application/atom+xml",
														"DataServiceVersion" : "2.0",
														"X-CSRF-Token" : "Fetch"
								}
							},
								function(data, response) {
									header_xcsrf_token = response.headers['x-csrf-token'];
									var oHeaders = {
										"x-csrf-token" : header_xcsrf_token,
										'Accept' : 'application/json',
									};
									OData.request({
										requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/DependentesSet(Usrid='"+oEntry.Usrid+"',Objps='',Subty='')",

										method : "PUT",
										headers : oHeaders,
										data:oEntry
									},
									function(data,request) {
										sap.m.MessageToast.show("Dados Salvos com Sucesso");
										//alert("Dados Salvos com Sucesso");
										location.reload(true);
									},
									function(err) {
										var errorObj1 = JSON.parse(err.response.body);
										alert(errorObj1.error.message.value);
									});
								},
								function(err) {
									var request = err.request;
									var response = err.response;
									alert("Error in Get -- Request " + request + " Response " + response);
								}
		);


	}

})
