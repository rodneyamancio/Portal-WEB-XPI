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

									oModel.read("/EmployeeSet?$expand=cwitDependentes",null,null,true,function(oData,repsonse){
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

							buscaCEP: function() {

								var vCEP = sap.ui.getCore().byId("Pstlz").getValue();
								vCEP = vCEP.replace(new RegExp("-","g"), "");

								oModel = new sap.ui.model.json.JSONModel();
								oModel.loadData("https://viacep.com.br/ws/"+vCEP+"/json/", "", false);

								var SAPUserName =

								sap.ui.getCore().byId("Stras").setValue(oModel.getProperty("/logradouro"));
								sap.ui.getCore().byId("Ort02").setValue(oModel.getProperty("/bairro"));
								sap.ui.getCore().byId("Posta").setValue(oModel.getProperty("/complemento"));
								sap.ui.getCore().byId("Ort01").setValue(oModel.getProperty("/localidade"));
								sap.ui.getCore().byId("State").setValue(oModel.getProperty("/uf"));
								sap.ui.getCore().byId("Land1").setValue("BR");

								//console.log(oModel);
								//console.log(SAPUserName);

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

													var oOption = evt.getParameter("id");

														if(oOption == "dadosPessoais"){

			                        sap.ui.getCore().byId("DialogDadosPessoais").open();
			                        sap.ui.getCore().byId("UpdateDadosPessoais").setVisible(true);
															sap.ui.getCore().byId("CancelDadosPessoais").setVisible(true);

			                        var oSelectedItem = evt.getParameter("listItem");

			                        var sPernr 				= oSelectedItem.getBindingContext().getProperty("Pernr");
			                        var sGbdat 				= oSelectedItem.getBindingContext().getProperty("Gbdat");
			                        var sNum01 				= oSelectedItem.getBindingContext().getProperty("Num01");
			                        var sCpfNr 				= oSelectedItem.getBindingContext().getProperty("CpfNr");
															var sUsrid 				= oSelectedItem.getBindingContext().getProperty("Usrid");
															var sStatus 			= oSelectedItem.getBindingContext().getProperty("Status");
															var sCname  			= oSelectedItem.getBindingContext().getProperty("Cname");
															var sStras  			= oSelectedItem.getBindingContext().getProperty("Stras");
															var sHsnmr  			= oSelectedItem.getBindingContext().getProperty("Hsnmr");
															var sOrt02  			= oSelectedItem.getBindingContext().getProperty("Ort02");
															var sPosta  			= oSelectedItem.getBindingContext().getProperty("Posta");
															var sPstlz  			= oSelectedItem.getBindingContext().getProperty("Pstlz");
															var sOrt01  			= oSelectedItem.getBindingContext().getProperty("Ort01");
															var sState  			= oSelectedItem.getBindingContext().getProperty("State");
															var sLand1  			= oSelectedItem.getBindingContext().getProperty("Land1");
			                        var sIdentNr 			= oSelectedItem.getBindingContext().getProperty("IdentNr");
															var sIdentOrg 		= oSelectedItem.getBindingContext().getProperty("IdentOrg");
															var sIdentDtEmis 	= oSelectedItem.getBindingContext().getProperty("IdentDtEmis");
															var sIdentEsEmis 	= oSelectedItem.getBindingContext().getProperty("IdentEsEmis");
															var sElecNr 			= oSelectedItem.getBindingContext().getProperty("ElecNr");
															var sElecZone 		= oSelectedItem.getBindingContext().getProperty("ElecZone");
															var sElecSect 		= oSelectedItem.getBindingContext().getProperty("ElecSect");
															var sElecDtEmis 	= oSelectedItem.getBindingContext().getProperty("ElecDtEmis");
															var sElecEsEmis 	= oSelectedItem.getBindingContext().getProperty("ElecEsEmis");
															var sDriveNr 			= oSelectedItem.getBindingContext().getProperty("DriveNr");
															var sDriveCat 		= oSelectedItem.getBindingContext().getProperty("DriveCat");
															var sDriveDtEmis 	= oSelectedItem.getBindingContext().getProperty("DriveDtEmis");
															var sPasspNr 			= oSelectedItem.getBindingContext().getProperty("PasspNr");
															var sPasspDtEmis 	= oSelectedItem.getBindingContext().getProperty("PasspDrEmis");
															var sForeignSit 	= oSelectedItem.getBindingContext().getProperty("ForeignSit");



															sap.ui.getCore().byId("Usrid").setValue(sUsrid);
															sap.ui.getCore().byId("Pernr").setValue(sPernr);
			                        sap.ui.getCore().byId("Gbdat").setValue(sGbdat);
			                        sap.ui.getCore().byId("Num01").setValue(sNum01);
			                        sap.ui.getCore().byId("CpfNr").setValue(sCpfNr);
															sap.ui.getCore().byId("Status").setValue(sStatus);
															sap.ui.getCore().byId("Cname").setValue(sCname);
															sap.ui.getCore().byId("Stras").setValue(sStras);
															sap.ui.getCore().byId("Hsnmr").setValue(sHsnmr);
															sap.ui.getCore().byId("Ort02").setValue(sOrt02);
															sap.ui.getCore().byId("Posta").setValue(sPosta);
															sap.ui.getCore().byId("Pstlz").setValue(sPstlz);
															sap.ui.getCore().byId("Ort01").setValue(sOrt01);
															sap.ui.getCore().byId("State").setValue(sState);
															sap.ui.getCore().byId("Land1").setValue(sLand1);
															sap.ui.getCore().byId("IdentNr").setValue(sIdentNr);
															sap.ui.getCore().byId("IdentOrg").setValue(sIdentOrg);
															sap.ui.getCore().byId("IdentDtEmis").setValue(sIdentDtEmis);
															sap.ui.getCore().byId("IdentEsEmis").setValue(sIdentEsEmis);
															sap.ui.getCore().byId("ElecNr").setValue(sElecNr);
															sap.ui.getCore().byId("ElecZone").setValue(sElecZone);
															sap.ui.getCore().byId("ElecSect").setValue(sElecSect);
															sap.ui.getCore().byId("ElecDtEmis").setValue(sElecDtEmis);
															sap.ui.getCore().byId("ElecEsEmis").setValue(sElecEsEmis);
															sap.ui.getCore().byId("DriveNr").setValue(sDriveNr);
															sap.ui.getCore().byId("DriveCat").setValue(sDriveCat);
															sap.ui.getCore().byId("DriveDtEmis").setValue(sDriveDtEmis);
															sap.ui.getCore().byId("PasspNr").setValue(sPasspNr);
															sap.ui.getCore().byId("PasspDtEmis").setValue(sPasspDtEmis);
															sap.ui.getCore().byId("ForeignSit").setValue(sForeignSit);

			                        sap.ui.getCore().byId("Pernr").setEnabled(false);

															sap.ui.getCore().byId("Usrid").setVisible(false);
															sap.ui.getCore().byId("Status").setVisible(false);
															sap.ui.getCore().byId("Cname").setVisible(false);

/*
															if (sStatus == '3') {
																sap.ui.getCore().byId("Usrid").setEnabled(false);
																sap.ui.getCore().byId("Pernr").setEnabled(false);
																sap.ui.getCore().byId("Gbdat").setEnabled(false);
																sap.ui.getCore().byId("Num01").setEnabled(false);
																sap.ui.getCore().byId("CpfNr").setEnabled(false);
																sap.ui.getCore().byId("Status").setEnabled(false);
																sap.ui.getCore().byId("UpdateDadosPessoais").setEnabled(false);
															}
*/
													 }else{

															 sap.ui.getCore().byId("DialogDependentes").open();
															 sap.ui.getCore().byId("UpdateDependentes").setVisible(true);
															 sap.ui.getCore().byId("CancelDependentes").setVisible(true);

															 var oSelectedItem = evt.getParameter("listItem");
															 var sType 		= oSelectedItem.getBindingContext().getProperty("Type");
															 var sFcnam 	= oSelectedItem.getBindingContext().getProperty("Fcnam");
															 var sIcnum 	= oSelectedItem.getBindingContext().getProperty("Icnum");
															 var sDtcvc 	= oSelectedItem.getBindingContext().getProperty("Dtcvc");
															 var sUsrid 	= oSelectedItem.getBindingContext().getProperty("Usrid");
															 var sObjps 	= oSelectedItem.getBindingContext().getProperty("Objps");
															 var sSubty 	= oSelectedItem.getBindingContext().getProperty("Subty");
															 var sStatus 	= oSelectedItem.getBindingContext().getProperty("Status");
															 var sPernr  	= oSelectedItem.getBindingContext().getProperty("Pernr");

															 sap.ui.getCore().byId("Type").setValue(sType);
															 sap.ui.getCore().byId("Fcnam").setValue(sFcnam);
															 sap.ui.getCore().byId("Icnum").setValue(sIcnum);
															 sap.ui.getCore().byId("Dtcvc").setValue(sDtcvc);
															 sap.ui.getCore().byId("UsridDependentes").setValue(sUsrid);
															 sap.ui.getCore().byId("Objps").setValue(sObjps);
															 sap.ui.getCore().byId("Subty").setValue(sSubty);
															 sap.ui.getCore().byId("StatusDependentes").setValue(sStatus);
															 sap.ui.getCore().byId("PernrDependentes").setValue(sPernr);

															 sap.ui.getCore().byId("Type").setEnabled(false);

															 sap.ui.getCore().byId("UsridDependentes").setVisible(false);
															 sap.ui.getCore().byId("Objps").setVisible(false);
															 sap.ui.getCore().byId("Subty").setVisible(false);
															 sap.ui.getCore().byId("StatusDependentes").setVisible(false);
															 sap.ui.getCore().byId("PernrDependentes").setVisible(false);

/*
															 if (sStatus == '3') {
																 sap.ui.getCore().byId("Type").setEnabled(false);
																 sap.ui.getCore().byId("Fcnam").setEnabled(false);
																 sap.ui.getCore().byId("Icnum").setEnabled(false);
																 sap.ui.getCore().byId("Dtcvc").setEnabled(false);
																 sap.ui.getCore().byId("UsridDependentes").setEnabled(false);
																 sap.ui.getCore().byId("Objps").setEnabled(false);
																 sap.ui.getCore().byId("Subty").setEnabled(false);
																 sap.ui.getCore().byId("UpdateDependentes").setEnabled(false);
															 }
*/

													 }

												 },

						 UpdateDadosPessoais: function() {

	                      var oEntry = {};
												oEntry.Usrid 				= sap.ui.getCore().byId("Usrid").getValue();
	                      oEntry.Pernr 				= sap.ui.getCore().byId("Pernr").getValue();
	                      oEntry.Gbdat 				= sap.ui.getCore().byId("Gbdat").getValue();
	                      oEntry.Num01 				= sap.ui.getCore().byId("Num01").getValue();
	                      oEntry.CpfNr 				= sap.ui.getCore().byId("CpfNr").getValue();
												oEntry.Cname 				= sap.ui.getCore().byId("Cname").getValue();
												oEntry.Stras 				= sap.ui.getCore().byId("Stras").getValue();
												oEntry.Hsnmr 				= sap.ui.getCore().byId("Hsnmr").getValue();
												oEntry.Ort02 				= sap.ui.getCore().byId("Ort02").getValue();
												oEntry.Posta 				= sap.ui.getCore().byId("Posta").getValue();
												oEntry.Pstlz 				= sap.ui.getCore().byId("Pstlz").getValue();
												oEntry.Ort01 				= sap.ui.getCore().byId("Ort01").getValue();
												oEntry.State 				= sap.ui.getCore().byId("State").getValue();
												oEntry.Land1 				= sap.ui.getCore().byId("Land1").getValue();
												oEntry.IdentNr 			= sap.ui.getCore().byId("IdentNr").getValue();
												oEntry.IdentOrg 		= sap.ui.getCore().byId("IdentOrg").getValue();
												oEntry.IdentDtEmis 	= sap.ui.getCore().byId("IdentDtEmis").getValue();
												oEntry.IdentEsEmis 	= sap.ui.getCore().byId("IdentEsEmis").getValue();
												oEntry.ElecNr 			= sap.ui.getCore().byId("ElecNr").getValue();
												oEntry.ElecZone 		= sap.ui.getCore().byId("ElecZone").getValue();
												oEntry.ElecSect 		= sap.ui.getCore().byId("ElecSect").getValue();
												oEntry.ElecDtEmis 	= sap.ui.getCore().byId("ElecDtEmis").getValue();
												oEntry.ElecEsEmis 	= sap.ui.getCore().byId("ElecEsEmis").getValue();
												oEntry.DriveNr 			= sap.ui.getCore().byId("DriveNr").getValue();
												oEntry.DriveCat 		= sap.ui.getCore().byId("DriveCat").getValue();
												oEntry.DriveDtEmis 	= sap.ui.getCore().byId("DriveDtEmis").getValue();
												oEntry.PasspNr 			= sap.ui.getCore().byId("PasspNr").getValue();
												oEntry.PasspDtEmis 	= sap.ui.getCore().byId("PasspDtEmis").getValue();
												oEntry.ForeignSit 	= sap.ui.getCore().byId("ForeignSit").getValue();

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
                        },          function(err) {
																			var errorObj1 = JSON.parse(err.response.body);
																			alert(errorObj1.error.message.value);
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
																								 sap.m.MessageToast.show("Dados Salvos com Sucesso");
			                                           location.reload(true);
			                   },          function(err) {
																			 var errorObj1 = JSON.parse(err.response.body);
																			 alert(errorObj1.error.message.value);
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
