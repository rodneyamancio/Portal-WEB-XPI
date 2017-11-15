sap.ui.controller("empcrud.EmpDetails", {

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf empcrud.EmpDetails
	*/
	            onInit: function() {

									var sServiceUrl = "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/";
									var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);

									var oJsonModel = new sap.ui.model.json.JSONModel();

									oModel.read("/EmployeeSet?$expand=cwitDependentes&$filter=Status eq '1'",null,null,true,function(oData,repsonse){
										oJsonModel.setData(oData);
									});

									sap.ui.getCore().setModel(oJsonModel);

/*
									oModelUser = new sap.ui.model.json.JSONModel();
					        oModelUser.loadData("http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/bc/ui2/start_up", "", false);
					        var SAPUserName = oModelUser.getProperty("/id")
					        console.log(oModelUser);
					        console.log(SAPUserName);
*/

									/*
									oModel = new sap.ui.model.json.JSONModel();
									oModel.loadData("http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV/EmployeeSet('T0374')", "", false);
									sap.ui.getCore().setModel(oModel);
									console.log(oModel);
									*/

							},

	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf empcrud.EmpDetails
	*/
//	          onBeforeRendering: function() {
	//
//	          },

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf empcrud.EmpDetails
	*/
	          onAfterRendering: function() {

	          },

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf empcrud.EmpDetails
	*/
//	          onExit: function() {
	//
//	          }
	          ItemPress: function(evt) {

								var oSelectedItem 	= evt.getParameter("listItem");
								var oSelectedUsrid 	= oSelectedItem.getBindingContext().getProperty("Usrid");

					  		app.to("idEmpDetails2", "slide", {oUsrid:oSelectedUsrid});

						},

						 UpdateDadosPessoais: function() {

	                      var oEntry = {};
												oEntry.Usrid = sap.ui.getCore().byId("Usrid").getValue();
	                      oEntry.Pernr = sap.ui.getCore().byId("Pernr").getValue();
	                      oEntry.Gbdat = sap.ui.getCore().byId("Gbdat").getValue();
	                      oEntry.Num01 = sap.ui.getCore().byId("Num01").getValue();
	                      oEntry.CpfNr = sap.ui.getCore().byId("CpfNr").getValue();
												oEntry.Cname = sap.ui.getCore().byId("Cname").getValue();

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
                                                //alert("Dados Salvos com Sucesso");
                                                location.reload(true);
                        },          function(err) {
                                                alert("Erro ao Salvar Dados");
                                    });
                        }, function(err) {
                                                var request = err.request;
                                                var response = err.response;
                                                alert("Error in Get -- Request " + request + " Response " + response);
                                    });
                                    },

							UpdateDependentes: function() {

			                    var oEntry = {};
													oEntry.Usrid = sap.ui.getCore().byId("UsridDependentes").getValue();
			                    oEntry.Type  = sap.ui.getCore().byId("Type").getValue();
			                    oEntry.Fcnam = sap.ui.getCore().byId("Fcnam").getValue();
			                    oEntry.Icnum = sap.ui.getCore().byId("Icnum").getValue();
			                    oEntry.Dtcvc = sap.ui.getCore().byId("Dtcvc").getValue();
			                    oEntry.Objps = sap.ui.getCore().byId("Objps").getValue();
			                    oEntry.Subty = sap.ui.getCore().byId("Subty").getValue();
													oEntry.Pernr = sap.ui.getCore().byId("PernrDependentes").getValue();


//DependentesSet(Usrid='T0374',Objps='',Subty='11')
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
			                               requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZCWIT_PORTAL_SRV_01/DependentesSet(Usrid='"+oEntry.Usrid+"',Objps='"+oEntry.Objps+"',Subty='"+oEntry.Subty+"')",

			                               method : "PUT",
			                               headers : oHeaders,
			                               data:oEntry
			                   },
			                   function(data,request) {
			                                           //alert("Dados Salvos com Sucesso");
			                                           location.reload(true);
			                   },          function(err) {
			                                           alert("Erro ao Salvar Dados");
			                               });
			                   }, function(err) {
			                                           var request = err.request;
			                                           var response = err.response;
			                                           alert("Error in Get -- Request " + request + " Response " + response);
			                               });
			                               },

	             NewEntry: function() {
	                        sap.ui.getCore().byId("Dialog").open();
	                        sap.ui.getCore().byId("Save").setVisible(true);
	                        sap.ui.getCore().byId("Update").setVisible(false);
	                        sap.ui.getCore().byId("Delete").setVisible(false);
	                        sap.ui.getCore().byId("Id").setValue("");
	                        sap.ui.getCore().byId("Name").setValue("");
	                        sap.ui.getCore().byId("Address").setValue("");
	                        sap.ui.getCore().byId("Role").setValue("");
	                        sap.ui.getCore().byId("Id").setEnabled(true);
	                        },

	Save: function() {

	            var oEntry = {};
	            oEntry.Empid= sap.ui.getCore().byId("Id").getValue();
	            oEntry.Empname= sap.ui.getCore().byId("Name").getValue();
	            oEntry.Empadd= sap.ui.getCore().byId("Address").getValue();
	            oEntry.Empdes= sap.ui.getCore().byId("Role").getValue();

	            OData.request({
	                        requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZMM_EMP_SRV/EmployeeSet",
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
	                                                requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZMM_EMP_SRV/EmployeeSet",

	                                                method : "POST",
	                                                headers : oHeaders,
	                                                data:oEntry
	                                    },
	                                                function(data,request) {
	                                                alert("Employee Created Successfully...UHUUUUUU");
	                                                location.reload(true);
	                                    },          function(err) {
	                                                alert("Employee Creation Failed");
	                                    });
	                        }, function(err) {
	                                                var request = err.request;
	                                                var response = err.response;
	                                                alert("Error in Get -- Request " + request + " Response " + response);
	                                    });
	                                                            },

	// Delete Action
	Delete: function() {
	            var oEntry = {};
	            oEntry.Empid= sap.ui.getCore().byId("Id").getValue();

	            OData.request({
	                        requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZMM_EMP_SRV/EmployeeSet('" + oEntry.Empid + "')",
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
	                                                requestUri : "http://dsv-xp-sap01.xpcorretora.com.br:50000/sap/opu/odata/sap/ZMM_EMP_SRV/EmployeeSet('"+oEntry.Empid+"')",

	                                                method : "DELETE",
	                                                headers : oHeaders,
	                                                data:oEntry
	                                    },
	                                                function(data,request) {
	                                                alert("Delete Success");
	                                                location.reload(true);
	                                    },          function(err) {
	                                                alert("Delete Failed");
	                                    });
	                        }, function(err) {
	                                                var request = err.request;
	                                                var response = err.response;
	                                                alert("Error in Get -- Request " + request + " Response " + response);
	                                    });

	                              },
	// Cancel Action
	  										Cancel:function() {
													sap.ui.getCore().byId("DialogDadosPessoais").close();
													sap.ui.getCore().byId("DialogDependentes").close();
	                      }

	})
