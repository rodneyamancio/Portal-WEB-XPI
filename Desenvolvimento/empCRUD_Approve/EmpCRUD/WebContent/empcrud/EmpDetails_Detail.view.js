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
                          new sap.m.ObjectStatus({text: "{Cname}", state: '{OldCname}'}),
                          new sap.m.Label({text: "Matrícula"}),
            							new sap.m.ObjectStatus({id: "txtPernr", text: "{Pernr}", state: '{OldPernr}'}),
            							new sap.m.Label({text: "Dt. Nascimento"}),
            							new sap.m.ObjectStatus({text: "{Gbdat}",  state: '{OldGbdat}'}),
                          new sap.m.Label({text: "Telefone"}),
                          new sap.m.ObjectStatus({text: "{Num01}",  state: '{OldNum01}'}),
                          new sap.m.Label({text: "Grau de Escolaridade"}),
            							new sap.m.ObjectStatus({text: "{Escol}",  state: '{OldEscol}'}),

      						]
      					});

                var oFormDadosBancarios = new sap.ui.layout.form.SimpleForm({
      						title: "Dados Bancários",
      						content: [
                    new sap.m.Label({text:  "Banco"}),
                    new sap.m.ObjectStatus({text:   "{Bkont}", state: '{OldBkont}'}),
                    new sap.m.Label({text:  "Agência"}),
                    new sap.m.ObjectStatus({text:   "{Bankl}", state: '{OldBankl}'}),
                    new sap.m.Label({text:  "Conta"}),
                    new sap.m.ObjectStatus({text:   "{Bankn}", state: '{OldBankn}'}),
                    new sap.m.Label({text:  "Dígito"}),
                    new sap.m.ObjectStatus({text:   "{Bankp}", state: '{OldBankp}'}),
      						]
      					});

                var oFormEndereco = new sap.ui.layout.form.SimpleForm({
                  title: "Endereço",
                  content: [
                    new sap.m.Label({text: "Rua"}),
                    new sap.m.ObjectStatus({text: "{Stras}", state: '{OldStras}'}),
                    new sap.m.Label({text: "Número"}),
                    new sap.m.ObjectStatus({text: "{Hsnmr}", state: '{OldHsnmr}'}),
                    new sap.m.Label({text: "Complemento"}),
                    new sap.m.ObjectStatus({text: "{Posta}", state: '{OldPosta}'}),
                    new sap.m.Label({text: "Bairro"}),
                    new sap.m.ObjectStatus({text: "{Ort02}", state: '{OldOrt02}'}),
                    new sap.m.Label({text: "CEP"}),
                    new sap.m.ObjectStatus({text: "{Pstlz}", state: '{OldPstlz}'}),
                    new sap.m.Label({text: "Cidade"}),
                    new sap.m.ObjectStatus({text: "{Ort01}", state: '{OldOrt01}'}),
                    new sap.m.Label({text: "UF"}),
                    new sap.m.ObjectStatus({text: "{State}", state: '{OldState}'}),
                    new sap.m.Label({text: "País"}),
                    new sap.m.ObjectStatus({text: "{Land1}", state: '{OldLand1}'}),
                  ]
                });

                var oFormDocumentos = new sap.ui.layout.form.SimpleForm({
                  title: "Documentos",
                  content: [

                    new sap.ui.layout.form.SimpleForm({
                      title: "CPF",
                      content: [
                        new sap.m.Label({text: "CPF"}),
                        new sap.m.ObjectStatus({text: "{CpfNr}", state: '{OldCpfNr}'}),
                      ]
                    }),

                    new sap.ui.layout.form.SimpleForm({
                      title: "RG",
                      content: [
                        new sap.m.Label({text:"Nº RG"}),
                        new sap.m.ObjectStatus({text: "{IdentNr}", state: '{OldIdentNr}'}),
                        new sap.m.Label({text:"Org.Emissor"}),
                        new sap.m.ObjectStatus({text: "{IdentOrg}", state: '{OldIdentOrg}'}),
                        new sap.m.Label({text:"Dt. Emissão"}),
                        new sap.m.ObjectStatus({text: "{IdentDtEmis}", state: '{OldIdentDtEmis}'}),
                        new sap.m.Label({text:"UF"}),
                        new sap.m.ObjectStatus({text: "{IdentEsEmis}" , state: '{OldIdentEsEmis}'}),
                      ]
                    }),

                    new sap.ui.layout.form.SimpleForm({
                      title: "Título de Eleitor",
                      content: [
                        new sap.m.Label({text:"Nº Título Eleitor"}),
                        new sap.m.ObjectStatus({text: "{ElecNr}", state: '{OldElecNr}'}),
                        new sap.m.Label({text:"Zona Eleitoral"}),
                        new sap.m.ObjectStatus({text: "{ElecZone}", state: '{OldElecZone}'}),
                        new sap.m.Label({text:"Seção Eleitoral"}),
                        new sap.m.ObjectStatus({tex: "{ElecSect}", state: '{OldElecSect}'}),
                        new sap.m.Label({text:"Dt. Emissão"}),
                        new sap.m.ObjectStatus({text: "{ElecDtEmis}", state: '{OldElecDtEmis}'}),
                        new sap.m.Label({text:"UF"}),
                        new sap.m.ObjectStatus({text: "{ElecEsEmis}", state: '{OldElecEsEmis}'}),
                      ]
                    }),

                    new sap.ui.layout.form.SimpleForm({
                      title: "CNH",
                      content: [
                        new sap.m.Label({text:"Nº CNH"}),
                        new sap.m.ObjectStatus({text: "{DriveNr}", state: '{OldDriveNr}'}),
                        new sap.m.Label({text:"Categoria"}),
                        new sap.m.ObjectStatus({text: "{DriveCat}", state: '{OldDriveCat}'}),
                        new sap.m.Label({text:"Dt. Emissão"}),
                        new sap.m.ObjectStatus({text: "{DriveDtEmis}", state: '{OldDriveDtEmis}'}),
                      ]
                    }),

                    new sap.ui.layout.form.SimpleForm({
                      title: "Passaporte",
                      content: [
                        new sap.m.Label({text:"Nº Passaporte"}),
                        new sap.m.ObjectStatus({text: "{PasspNr}", state: '{OldPasspNr}'}),
                        new sap.m.Label({text:"Dt. Emissão"}),
                        new sap.m.ObjectStatus({text: "{PasspDtEmis}", state: '{OldPasspDtEmis}'}),
                        new sap.m.Label({text:"Cond.Trab.Estrangeiro"}),
                        new sap.m.ObjectStatus({text: "{ForeignSit}", state: '{OldForeignSit}'}),
                      ]
                    }),

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
                                  width: "8em",
                                  header: new sap.m.Label({
                                  text: "Nome Completo"  }) }),
                                new sap.m.Column({
                                  width: "1em",
                                  header: new sap.m.Label({
                                  text: "Imp.Renda"  }) }),
                                new sap.m.Column({
                                  width: "1em",
                                  header: new sap.m.Label({
                                  text: "Dt.Nascimento"  }) }),
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
                           new sap.m.ObjectStatus({
                            text: "{Type}"}),
                           new sap.m.ObjectStatus({
                            text: "{Fcnam}", state: '{OldFcnam}'
                           }),
                           new sap.m.ObjectStatus({
                            text: "{Irflg}", state: '{OldIrflg}'
                           }),
                           new sap.m.ObjectStatus({
                            text: "{Fgbdt}", state: '{OldFgbdt}'
                           }),
                           new sap.m.ObjectStatus({
                            text: "{Icnum}", state: '{OldIcnum}'
                           }),
                           new sap.m.ObjectStatus({
                            text: "{Dtcvc}", state: '{OldDtcvc}'
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
                  oPage.addContent(oFormDadosBancarios);
                  oPage.addContent(oFormEndereco);
                  oPage.addContent(oFormDocumentos);
                  oPage.addContent(oTableDependentes);

                  return oPage;

     }

});
