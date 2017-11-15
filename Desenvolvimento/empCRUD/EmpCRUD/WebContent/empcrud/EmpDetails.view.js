sap.ui.jsview("empcrud.EmpDetails", {
	 /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf empcrud.EmpDetails
     */
     getControllerName : function() {
                 return "empcrud.EmpDetails";
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
                 });

                 var oFormHead = new sap.ui.layout.form.SimpleForm({
       						content: [
       							new sap.m.Label({text: "Matrícula", textAlign: "Center"}),
       							new sap.m.Text({text: "{Pernr}", maxLength: 10,}),
       							new sap.m.Label({text: "Nome Completo"}),
       							new sap.m.Text({text: "{Cname}", maxLength: 10,})
                  ]
                });

                 oPage.bindElement("/results/0");

                 var oBtnUpdDadosPessoais = new sap.m.Button("UpdateDadosPessoais", {
                             text: "Salvar",
                             tap: [ oController.UpdateDadosPessoais, oController ]
                             });

                 var oBtnCanDadosPessoais = new sap.m.Button("CancelDadosPessoais", {
                             text: "Cancel",
                             tap: [ oController.Cancel, oController ]
                             });

                 var oBtnUpdDependentes = new sap.m.Button("UpdateDependentes", {
                             text: "Salvar",
                             tap: [ oController.UpdateDependentes, oController ]
                             });

                 var oBtnCanDependentes = new sap.m.Button("CancelDependentes", {
                             text: "Cancel",
                             tap: [ oController.Cancel, oController ]
                             });
//Dialog box / pop-up window for Add/Modify Employee Data

                 var oDialogDadosPessoais = new sap.m.Dialog("DialogDadosPessoais",{
                             title:"Dados Pessoais",
                             modal: true,
                             contentWidth:"1em",

                             content:[
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Status"
                               }),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Usrid"
                               }),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Cname"
                               }),
                               new sap.m.Label({text:"Matrícula"}),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Pernr"
                               }),
                               new sap.m.Label({text:"Dt. Nascimento"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "Gbdat",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
                               }),
                               new sap.m.Label({text:"Telefone"}),
                               new sap.m.MaskInput({
                                 maxLength: 20,
                                 id: "Num01",
                                 mask: "(99)9999-99999",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"CPF"}),
                               new sap.m.MaskInput({
                                 maxLength: 14,
                                 id: "CpfNr",
                                 mask: "999.999.999-99",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Nº RG"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "IdentNr",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Org.Emissor"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "IdentOrg",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Dt. Emissão"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "IdentDtEmis",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
                               }),
                               new sap.m.Label({text:"UF"}),
                               new sap.m.Input({
                                 maxLength: 2,
                                 id: "IdentEsEmis",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Nº Título Eleitor"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "ElecNr",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Zona Eleitoral"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "ElecZone",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Seção Eleitoral"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "ElecSect",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Dt. Emissão"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "ElecDtEmis",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
                               }),
                               new sap.m.Label({text:"UF"}),
                               new sap.m.Input({
                                 maxLength: 2,
                                 id: "ElecEsEmis",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Nº CNH"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "DriveNr",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Categoria"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "DriveCat",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Dt. Emissão"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "DriveDtEmis",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
                               }),
                               new sap.m.Label({text:"Nº Passaporte"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "PasspNr",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Dt. Emissão"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "PasspDtEmis",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
                               }),
                               new sap.m.Label({text:"Cond.Trab.Estrangeiro"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "ForeignSit",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"CEP", width: "100%"}),
                               new sap.m.MaskInput({
                                 maxLength: 9,
                                 id: "Pstlz",
                                 mask: "99999-999",
                                 width: "50%"
                               }),
                              new sap.m.Button("buscaCEP", {
                                  text: "Buscar CEP",
                                  tap: [ oController.buscaCEP, oController ],
                                  width: "50%",
                                  type: "Accept",
                                  icon: "sap-icon://sys-find"
                              }),
                               new sap.m.Label({text:"Rua"}),
                               new sap.m.Input({
                                 maxLength: 30,
                                 id: "Stras"
                               }),
                               new sap.m.Label({text:"Número"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "Hsnmr"
                               }),
                               new sap.m.Label({text:"Complemento"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "Posta"
                               }),
                               new sap.m.Label({text:"Bairro"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "Ort02"
                               }),
                               new sap.m.Label({text:"Cidade"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "Ort01"
                               }),
                               new sap.m.Label({text:"UF"}),
                               new sap.m.MaskInput({
                                 maxLength: 2,
                                 id: "State",
                                 mask: "aa",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"País"}),
                               new sap.m.Input({
                                 maxLength: 14,
                                 id: "Land1"
                               }),
                               oBtnUpdDadosPessoais, oBtnCanDadosPessoais
                             ]
                             });


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



                 var oDialogDependentes = new sap.m.Dialog("DialogDependentes",{
                             title:"Dependentes",
                             modal: true,
                             contentWidth:"1em",

                             content:[
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "StatusDependentes"
                               }),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "UsridDependentes"
                               }),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Objps"
                               }),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Subty"
                               }),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "PernrDependentes"
                               }),
                               new sap.m.Label({text:"Tipo"}),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Type"
                               }),
                               new sap.m.Label({text:"Nome"}),
                               new sap.m.Input({
                                 maxLength: 20,
                                 id: "Fcnam"
                               }),
                               new sap.m.Label({text:"CPF"}),
                               new sap.m.MaskInput({
                                 maxLength: 14,
                                 id: "Icnum",
                                 mask: "999.999.999-99",
                                 width: "100%"
                               }),
                               new sap.m.Label({text:"Dt. Venc. Cart. Vacinação"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "Dtcvc",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
                               }),oBtnUpdDependentes, oBtnCanDependentes
                             ]
                             });

                 //Table or Dashboard to show the Employee Data
                 var oTableDadosPessoais = new sap.m.Table({
                             id: "dadosPessoais",
                             visibleRowCount: 1,
                             headerText:"Dados Pessoais",
                             itemPress : [ oController.ItemPress,oController ],
                             columns: [
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Dt. Nascimento"  }) }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Telefone" })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "CPF"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Nº RG"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Org.Emissor"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Dt. Emissão"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "UF"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Nº Tit. Eleitor"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Zona"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Seção"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Dt. Emissão"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "UF"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Nº CNH"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Categoria"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Dt. Emissão"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Nº Passaporte"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Dt. Emissão"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Cond.Trab.Estrangeiro"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Cód Banco"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Agência"
                                 })
                               }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                   text: "Conta"
                                 })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Rua"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Número"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Complemento"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Bairro"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "CEP"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "Cidade"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "UF"
                               })
                               }),
                               new sap.m.Column({
                               width: "1em",
                               header: new sap.m.Label({
                               text: "País"
                               })
                               })
                             ]
                 });

                 //Table or Dashboard to show the Employee Data
                  var oTableDependentes = new sap.m.Table({
                              id: "dependentes",
                              headerText:"Dependentes",
                              itemPress : [ oController.ItemPress,oController ],
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
                  var templateDadosPessoais = new sap.m.ColumnListItem({

                         id: "first_template",
                         type: "Navigation",
                         visible: true,
                         visibleRowCount: 1,
                         cells: [
                            new sap.m.Label({
                              text: "{Gbdat}"
                            }),
                            new sap.m.Label({
                              text: "{Num01}"
                            }),
                            new sap.m.Label({
                              text: "{CpfNr}"
                            }),
                            new sap.m.Label({
                              text: "{IdentNr}"
                            }),
                            new sap.m.Label({
                              text: "{IdentOrg}"
                            }),
                            new sap.m.Label({
                              text: "{IdentDtEmis}"
                            }),
                            new sap.m.Label({
                              text: "{IdentEsEmis}"
                            }),
                            new sap.m.Label({
                              text: "{ElecNr}"
                            }),
                            new sap.m.Label({
                              text: "{ElecZone}"
                            }),
                            new sap.m.Label({
                              text: "{ElecSect}"
                            }),
                            new sap.m.Label({
                              text: "{ElecDtEmis}"
                            }),
                            new sap.m.Label({
                              text: "{ElecEsEmis}"
                            }),
                            new sap.m.Label({
                              text: "{DriveNr}"
                            }),
                            new sap.m.Label({
                              text: "{DriveCat}"
                            }),
                            new sap.m.Label({
                              text: "{DriveDtEmis}"
                            }),
                            new sap.m.Label({
                              text: "{PasspNr}"
                            }),
                            new sap.m.Label({
                              text: "{PasspDtEmis}"
                            }),
                            new sap.m.Label({
                              text: "{ForeignSit}"
                            }),
                            new sap.m.Label({
                              text: "{Bkont}"
                            }),
                            new sap.m.Label({
                              text: "{Bankl}"
                            }),
                            new sap.m.Label({
                              text: "{Bankn}"
                            }),
                            new sap.m.Label({
                              text: "{Stras}"
                            }),
                            new sap.m.Label({
                              text: "{Hsnmr}"
                            }),
                            new sap.m.Label({
                              text: "{Posta}"
                            }),
                            new sap.m.Label({
                              text: "{Ort02}"
                            }),
                            new sap.m.Label({
                              text: "{Pstlz}"
                            }),
                            new sap.m.Label({
                              text: "{Ort01}"
                            }),
                            new sap.m.Label({
                              text: "{State}"
                            }),
                            new sap.m.Label({
                              text: "{Land1}"
                            })
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

                  var oBar = new sap.m.Bar({
                  				design : sap.m.BarDesign.Auto,
                  			});

                  oBar.addContentMiddle(new sap.m.Text({text: "{Cname}"}));
                  oBar.addContentMiddle(new sap.m.Text({text: "("}));
                  oBar.addContentMiddle(new sap.m.Text({text: "{Pernr}"}));
                  oBar.addContentMiddle(new sap.m.Text({text: ")"}));
                  oPage.setSubHeader(oBar);

                  var oFot = new sap.m.Bar({ });
                  oFot.addContentMiddle(new sap.m.Text({text: "PORTAL CWIT eSOCIAL - XP Investimentos ("}));
                  oFot.addContentMiddle(new sap.m.Text({text: "{Usrid}"}));
                  oFot.addContentMiddle(new sap.m.Text({text: ")"}));
                  oPage.setFooter(oFot);

                  //oPage.addContent(oFormHead);

                  var  oFilters = null
                  oTableDadosPessoais.bindItems( "/results",templateDadosPessoais, null, oFilters);
                  oTableDadosPessoais.bindElement( "/results" );
                  oPage.addContent(oTableDadosPessoais);

                  oTableDependentes.bindItems( "/results/0/cwitDependentes/results",templateDependentes, null, oFilters);
                  oTableDependentes.bindElement( "/results/0/cwitDependentes/results" );
                  oPage.addContent(oTableDependentes);

                  return oPage;

     }

});
