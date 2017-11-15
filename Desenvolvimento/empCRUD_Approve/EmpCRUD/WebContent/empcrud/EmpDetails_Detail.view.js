sap.ui.jsview("empcrud.EmpDetails_Detail", {
	 /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf empcrud.EmpDetails
     */
     getControllerName : function() {
                 return "empcrud.EmpDetails_Detail";
     },

     /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf empcrud.EmpDetails
     */
     createContent : function(oController) {

                 var oPage = new sap.m.Page({
                             title: "Alteração de Dados Cadastrais",
                             showHeader: true,
                             showSubHeader: true,
                             showNavButton : true,
                                navButtonPress : function() { oPage.unbindElement (); app.to("idEmpDetails1");},
                 });

                 //oPage.bindElement("/results/0");
                this.addEventDelegate({
                    onAfterShow: function(event){

                      this.bindElement(event.data.sPath);

                      var sPath = this.getBindingContext().sPath;

                      oTableDependentes.bindItems(sPath+"/cwitDependentes/results",templateDependentes, null, oFilters);
                      oTableDependentes.bindElement(sPath+"/cwitDependentes/results" );

                    }
                }, this);

                var oFormDadosPessoais = new sap.ui.layout.form.SimpleForm({
      						title: "Dados Pessoais",
      						content: [
      							new sap.m.Label({text: "Nome"}),
      							new sap.m.Text({text: "{Cname}"}),
      							new sap.m.Label({text: "Matrícula"}),
      							new sap.m.Text({text: "{Pernr}", id:"txtPernr"}),
      							new sap.m.Label({text: "Dt. Nascimento"}),
      							new sap.m.Text({text: "{Gbdat}"}),
      							new sap.m.Label({text: "Telefone"}),
      							new sap.m.Text({text: "{Num01}"}),
                    new sap.m.Label({text: "CPF"}),
      							new sap.m.Text({text: "{CpfNr}"}),
                    new sap.m.Label({text: "Rua"}),
      							new sap.m.Text({text: "{Stras}"}),
                    new sap.m.Label({text: "Número"}),
      							new sap.m.Text({text: "{Hsnmr}"}),
                    new sap.m.Label({text: "Complemento"}),
      							new sap.m.Text({text: "{Posta}"}),
                    new sap.m.Label({text: "Bairro"}),
      							new sap.m.Text({text: "{Ort02}"}),
                    new sap.m.Label({text: "CEP"}),
      							new sap.m.Text({text: "{Pstlz}"}),
                    new sap.m.Label({text: "Cidade"}),
      							new sap.m.Text({text: "{Ort01}"}),
                    new sap.m.Label({text: "UF"}),
      							new sap.m.Text({text: "{State}"}),
                    new sap.m.Label({text: "País"}),
      							new sap.m.Text({text: "{Land1}"})
      						]
      					});

                 //Table or Dashboard to show the Employee Data
                  var oTableDependentes = new sap.m.Table({
                              id: "dependentes",
                              headerText:"Dependentes",
                              noDataText: "Nenhum Dependente cadastrado para a Matrícula selecionada",
                              //itemPress : [ oController.ItemPress,oController ],
                              columns: [
                                new sap.m.Column({
                                width: "1em",
                                header: new sap.m.Label({
                                text: "Tipo"  }) }),
                                new sap.m.Column({
                                width: "1em",
                                header: new sap.m.Label({
                                text: "Nome Completo"  }) }),
                                new sap.m.Column({
                                width: "1em",
                                header: new sap.m.Label({
                                text: "CPF"  }) }),
                                new sap.m.Column({
                                width: "1em",
                                header: new sap.m.Label({
                                text: "Dt. Venc. Cart. Vacinação"  }) })
                              ]
                  });

                  //Template  to map the data to the respective column
                  var templateDependentes = new sap.m.ColumnListItem({

                         id: "second_template",
                         type: "Navigation",
                         visible: true,
                         cells: [
                           new sap.m.Label({
                            text: "{Type}"
                           }),
                           new sap.m.Label({
                            text: "{Fcnam}"
                           }),
                           new sap.m.Label({
                            text: "{Icnum}"
                           }),
                           new sap.m.Label({
                            text: "{Dtcvc}"
                           }),
                         ]
                  });

                  var oBtnApprove = new sap.m.Button("Approve", {
                              text: "Aprovar",
                              type: "Accept",
                              tap: [ oController.Approve, oController ]
                              });

                  var oBar = new sap.m.Bar({
                  				design : sap.m.BarDesign.Auto,
                  			});

                  oBar.addContentMiddle(new sap.m.Text({text: "{Cname}"}));
                  oBar.addContentMiddle(new sap.m.Text({text: "("}));
                  oBar.addContentMiddle(new sap.m.Text({text: "{Pernr}"}));
                  oBar.addContentMiddle(new sap.m.Text({text: ")"}));
                  oBar.addContentRight(oBtnApprove);
                  oPage.setSubHeader(oBar);

                  var oFot = new sap.m.Bar({ });
                  oFot.addContentMiddle(new sap.m.Text({text: "PORTAL CWIT eSOCIAL - XP Investimentos ("}));
                  oFot.addContentMiddle(new sap.m.Text({text: "{Usrid}", id: "txtUsrid"}));
                  oFot.addContentMiddle(new sap.m.Text({text: ")"}));
                  //oFot.addContentMiddle(oBtnApprove);
                  oPage.setFooter(oFot);

                  var  oFilters = null

                  //oPage.addContent(oBtnApprove);
                  oPage.addContent(oFormDadosPessoais);
                  oPage.addContent(oTableDependentes);

                  return oPage;

     }

});