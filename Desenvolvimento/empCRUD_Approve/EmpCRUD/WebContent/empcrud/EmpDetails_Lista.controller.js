sap.ui.controller("empcrud.EmpDetails_Lista", {

	onInit: function() {


		var sServiceUrl = "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/";
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);

		var oJsonModel = new sap.ui.model.json.JSONModel();

		oModel.read("/AcessosSet",null,null,true,function(oData,repsonse){
			oJsonModel.setData(oData);
		});

		sap.ui.getCore().setModel(oJsonModel, "AcessosSet");

	},

})
