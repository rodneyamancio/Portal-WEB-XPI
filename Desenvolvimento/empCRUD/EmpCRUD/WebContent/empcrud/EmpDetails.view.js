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


              oBtnUpdDadosPessoais, oBtnCanDadosPessoais
            ]
          });

                            var oFormDadosPessoais = new sap.ui.layout.form.SimpleForm({
                               title: "Dados Pessoais",
                               width: "50%",
                               content: [

                                 new sap.m.Input({
                                   maxLength: 10,
                                   id: "Status",
                                   visible: false,
                                 }),
                                 new sap.m.Input({
                                   maxLength: 10,
                                   id: "Usrid",
                                   value: "{Usrid}",
                                   visible: false,
                                 }),
                                 new sap.m.Input({
                                   maxLength: 10,
                                   visible: false,
                                   id: "Cname",
                                   value: "{Cname}"
                                 }),
                                 new sap.m.Label({text:"Matrícula"}),
                                 new sap.m.Input({
                                   maxLength: 10,
                                   id: "Pernr",
                                   value: "{Pernr}",
                                   enabled: false
                                 }),
                                 new sap.m.Label({text:"Dt. Nascimento"}),
                                 new sap.m.DatePicker({
                                   maxLength: 10,
                                   id: "Gbdat",
                                   valueFormat: "yyyyMMdd",
                                   displayFormat: "dd.MM.yyyy",
                                   value: "{Gbdat}",
                                   enabled: false
                                 }),
                                 new sap.m.Label({text:"Telefone"}),
                                 new sap.m.MaskInput({
                                   maxLength: 10,
                                   id: "Num01",
                                   mask: "(99)9999-99999",
                                   width: "100%",
                                   value: "{Num01}"
                                 })

                               ]
                             });

                            var oFormEndereco = new sap.ui.layout.form.SimpleForm({
                   						title: "Endereço",
                              width: "50%",
                   						content: [
                                new sap.m.Label({text:"CEP", width: "100%"}),
                                new sap.m.MaskInput({
                                  maxLength: 9,
                                  id: "Pstlz",
                                  mask: "99999-999",
                                  value: "{Pstlz}"
                                }),
                                new sap.m.Button("buscaCEP", {
                                   text: "Buscar CEP",
                                   tap: [ oController.buscaCEP, oController ],

                                   //type: "Accept",
                                   icon: "sap-icon://sys-find"
                                }),
                                new sap.m.Label({text:"Rua"}),
                                new sap.m.Input({
                                  maxLength: 30,
                                  id: "Stras",
                                  value: "{Stras}"
                                }),
                                new sap.m.Label({text:"Número"}),
                                new sap.m.Input({
                                  maxLength: 14,
                                  id: "Hsnmr",
                                  value: "{Hsnmr}"
                                }),
                                new sap.m.Label({text:"Complemento"}),
                                new sap.m.Input({
                                  maxLength: 14,
                                  id: "Posta",
                                  value: "{Posta}"
                                }),
                                new sap.m.Label({text:"Bairro"}),
                                new sap.m.Input({
                                  maxLength: 14,
                                  id: "Ort02",
                                  value: "{Ort02}"
                                }),
                                new sap.m.Label({text:"Cidade"}),
                                new sap.m.Input({
                                  maxLength: 14,
                                  id: "Ort01",
                                  value: "{Ort01}"
                                }),
                                new sap.m.Label({text:"UF"}),
                                new sap.m.ComboBox({
                                  maxLength: 2,
                                  id: "State",
                                  width: "100%",
                                  value: "{State}",
                                  items: [
                                    new sap.ui.core.ListItem({key: "AC", text: "AC"}),
                                    new sap.ui.core.ListItem({key: "AL", text: "AL"}),
                                    new sap.ui.core.ListItem({key: "AM", text: "AM"}),
                                    new sap.ui.core.ListItem({key: "AP", text: "AP"}),
                                    new sap.ui.core.ListItem({key: "BA", text: "BA"}),
                                    new sap.ui.core.ListItem({key: "CE", text: "CE"}),
                                    new sap.ui.core.ListItem({key: "DF", text: "DF"}),
                                    new sap.ui.core.ListItem({key: "ES", text: "ES"}),
                                    new sap.ui.core.ListItem({key: "GO", text: "GO"}),
                                    new sap.ui.core.ListItem({key: "MA", text: "MA"}),
                                    new sap.ui.core.ListItem({key: "MG", text: "MG"}),
                                    new sap.ui.core.ListItem({key: "MS", text: "MS"}),
                                    new sap.ui.core.ListItem({key: "MT", text: "MT"}),
                                    new sap.ui.core.ListItem({key: "PA", text: "PA"}),
                                    new sap.ui.core.ListItem({key: "PB", text: "PB"}),
                                    new sap.ui.core.ListItem({key: "PE", text: "PE"}),
                                    new sap.ui.core.ListItem({key: "PI", text: "PI"}),
                                    new sap.ui.core.ListItem({key: "PR", text: "PR"}),
                                    new sap.ui.core.ListItem({key: "RJ", text: "RJ"}),
                                    new sap.ui.core.ListItem({key: "RN", text: "RN"}),
                                    new sap.ui.core.ListItem({key: "RO", text: "RO"}),
                                    new sap.ui.core.ListItem({key: "RR", text: "RR"}),
                                    new sap.ui.core.ListItem({key: "RS", text: "RS"}),
                                    new sap.ui.core.ListItem({key: "SC", text: "SC"}),
                                    new sap.ui.core.ListItem({key: "SE", text: "SE"}),
                                    new sap.ui.core.ListItem({key: "SP", text: "SP"}),
                                    new sap.ui.core.ListItem({key: "TO", text: "TO"}),
                                  ],
                                  change: function(oEvent){
                                    sap.ui.getCore().byId("State").setValue(oEvent.oSource.getSelectedKey());
                                  }
                                }),
                                new sap.m.Label({text:"País"}),
                                new sap.m.Input({
                                  maxLength: 14,
                                  id: "Land1",
                                  value: "{Land1}"
                                }),
                   						]
                   					});

                            var oFormDocumentos = new sap.ui.layout.form.SimpleForm({
                   						title: "Documentos",
                              width: "100%",
                   						content: [

                                new sap.ui.layout.form.SimpleForm({
                       						title: "CPF",
                       						content: [

                                    new sap.m.Label({text:"CPF"}),
                                    new sap.m.MaskInput({
                                      maxLength: 14,
                                      id: "CpfNr",
                                      mask: "999.999.999-99",
                                      width: "100%",
                                      value: "{CpfNr}"
                                    })

                                  ]
                       					}),

                                new sap.ui.layout.form.SimpleForm({
                                  title: "RG",
                                  width: "100%",
                                  content: [

                                    new sap.m.Label({text:"Nº RG"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "IdentNr",
                                      width: "100%",
                                      value: "{IdentNr}"
                                    }),
                                    new sap.m.Label({text:"Org.Emissor"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "IdentOrg",
                                      width: "100%",
                                      value: "{IdentOrg}"
                                    }),
                                    new sap.m.Label({text:"Dt. Emissão"}),
                                    new sap.m.DatePicker({
                                      maxLength: 10,
                                      id: "IdentDtEmis",
                                      valueFormat: "yyyyMMdd",
                                      displayFormat: "dd.MM.yyyy",
                                      value: "{IdentDtEmis}"
                                    }),
                                    new sap.m.Label({text:"UF"}),
                                    new sap.m.ComboBox({
                                      maxLength: 2,
                                      id: "IdentEsEmis",
                                      width: "100%",
                                      value: "{IdentEsEmis}",
                                      items: [
                                        new sap.ui.core.ListItem({key: "AC", text: "AC"}),
                                        new sap.ui.core.ListItem({key: "AL", text: "AL"}),
                                        new sap.ui.core.ListItem({key: "AM", text: "AM"}),
                                        new sap.ui.core.ListItem({key: "AP", text: "AP"}),
                                        new sap.ui.core.ListItem({key: "BA", text: "BA"}),
                                        new sap.ui.core.ListItem({key: "CE", text: "CE"}),
                                        new sap.ui.core.ListItem({key: "DF", text: "DF"}),
                                        new sap.ui.core.ListItem({key: "ES", text: "ES"}),
                                        new sap.ui.core.ListItem({key: "GO", text: "GO"}),
                                        new sap.ui.core.ListItem({key: "MA", text: "MA"}),
                                        new sap.ui.core.ListItem({key: "MG", text: "MG"}),
                                        new sap.ui.core.ListItem({key: "MS", text: "MS"}),
                                        new sap.ui.core.ListItem({key: "MT", text: "MT"}),
                                        new sap.ui.core.ListItem({key: "PA", text: "PA"}),
                                        new sap.ui.core.ListItem({key: "PB", text: "PB"}),
                                        new sap.ui.core.ListItem({key: "PE", text: "PE"}),
                                        new sap.ui.core.ListItem({key: "PI", text: "PI"}),
                                        new sap.ui.core.ListItem({key: "PR", text: "PR"}),
                                        new sap.ui.core.ListItem({key: "RJ", text: "RJ"}),
                                        new sap.ui.core.ListItem({key: "RN", text: "RN"}),
                                        new sap.ui.core.ListItem({key: "RO", text: "RO"}),
                                        new sap.ui.core.ListItem({key: "RR", text: "RR"}),
                                        new sap.ui.core.ListItem({key: "RS", text: "RS"}),
                                        new sap.ui.core.ListItem({key: "SC", text: "SC"}),
                                        new sap.ui.core.ListItem({key: "SE", text: "SE"}),
                                        new sap.ui.core.ListItem({key: "SP", text: "SP"}),
                                        new sap.ui.core.ListItem({key: "TO", text: "TO"}),
                                      ],
                                      change: function(oEvent){
                                        sap.ui.getCore().byId("IdentEsEmis").setValue(oEvent.oSource.getSelectedKey());
                                      }
                                    })

                                  ]
                                }),

                                new sap.ui.layout.form.SimpleForm({
                                  title: "Título Eleitor",
                                  width: "100%",
                                  content: [

                                    new sap.m.Label({text:"Nº Título Eleitor"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "ElecNr",
                                      width: "100%",
                                      value: "{ElecNr}"
                                    }),
                                    new sap.m.Label({text:"Zona Eleitoral"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "ElecZone",
                                      width: "100%",
                                      value: "{ElecZone}"
                                    }),
                                    new sap.m.Label({text:"Seção Eleitoral"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "ElecSect",
                                      width: "100%",
                                      value: "{ElecSect}"
                                    }),
                                    new sap.m.Label({text:"Dt. Emissão"}),
                                    new sap.m.DatePicker({
                                      maxLength: 10,
                                      id: "ElecDtEmis",
                                      valueFormat: "yyyyMMdd",
                                      displayFormat: "dd.MM.yyyy",
                                      value: "{ElecDtEmis}"
                                    }),
                                    new sap.m.Label({text:"UF"}),
                                    new sap.m.ComboBox({
                                      maxLength: 2,
                                      id: "ElecEsEmis",
                                      width: "100%",
                                      value: "{ElecEsEmis}",
                                      items: [
                                        new sap.ui.core.ListItem({key: "AC", text: "AC"}),
                                        new sap.ui.core.ListItem({key: "AL", text: "AL"}),
                                        new sap.ui.core.ListItem({key: "AM", text: "AM"}),
                                        new sap.ui.core.ListItem({key: "AP", text: "AP"}),
                                        new sap.ui.core.ListItem({key: "BA", text: "BA"}),
                                        new sap.ui.core.ListItem({key: "CE", text: "CE"}),
                                        new sap.ui.core.ListItem({key: "DF", text: "DF"}),
                                        new sap.ui.core.ListItem({key: "ES", text: "ES"}),
                                        new sap.ui.core.ListItem({key: "GO", text: "GO"}),
                                        new sap.ui.core.ListItem({key: "MA", text: "MA"}),
                                        new sap.ui.core.ListItem({key: "MG", text: "MG"}),
                                        new sap.ui.core.ListItem({key: "MS", text: "MS"}),
                                        new sap.ui.core.ListItem({key: "MT", text: "MT"}),
                                        new sap.ui.core.ListItem({key: "PA", text: "PA"}),
                                        new sap.ui.core.ListItem({key: "PB", text: "PB"}),
                                        new sap.ui.core.ListItem({key: "PE", text: "PE"}),
                                        new sap.ui.core.ListItem({key: "PI", text: "PI"}),
                                        new sap.ui.core.ListItem({key: "PR", text: "PR"}),
                                        new sap.ui.core.ListItem({key: "RJ", text: "RJ"}),
                                        new sap.ui.core.ListItem({key: "RN", text: "RN"}),
                                        new sap.ui.core.ListItem({key: "RO", text: "RO"}),
                                        new sap.ui.core.ListItem({key: "RR", text: "RR"}),
                                        new sap.ui.core.ListItem({key: "RS", text: "RS"}),
                                        new sap.ui.core.ListItem({key: "SC", text: "SC"}),
                                        new sap.ui.core.ListItem({key: "SE", text: "SE"}),
                                        new sap.ui.core.ListItem({key: "SP", text: "SP"}),
                                        new sap.ui.core.ListItem({key: "TO", text: "TO"}),
                                      ],
                                      change: function(oEvent){
                                        sap.ui.getCore().byId("ElecEsEmis").setValue(oEvent.oSource.getSelectedKey());
                                      }
                                    })

                                  ]
                                }),

                                new sap.ui.layout.form.SimpleForm({
                                  title: "CNH",
                                  width: "100%",
                                  content: [

                                    new sap.m.Label({text:"Nº CNH"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "DriveNr",
                                      width: "100%",
                                      value: "{DriveNr}"
                                    }),
                                    new sap.m.Label({text:"Categoria"}),
                                    new sap.m.ComboBox({
                                      maxLength: 30,
                                      id: "DriveCat",
                                      width: "100%",
                                      value: "{DriveCat}",
                                      items: [
                                        new sap.ui.core.ListItem({key: " ",	text: "Não informado"}),
                                        new sap.ui.core.ListItem({key: "A",	text: "Condutor de veículo motorizado de duas ou três rodas"}),
                                        new sap.ui.core.ListItem({key: "B",	text: "Condutor de veículo motorizado não abrangido por categoria A"}),
                                        new sap.ui.core.ListItem({key: "C",	text: "Condutor de veículo motorizado usado para transp. de carga"}),
                                        new sap.ui.core.ListItem({key: "D",	text: "condutor de veículo motorizado usado transp. de passageiros"}),
                                        new sap.ui.core.ListItem({key: "E",	text: "Condutor de combinação de veículos"}),
                                        new sap.ui.core.ListItem({key: "AB",	text: "Combinação de categ. A e B"}),
                                        new sap.ui.core.ListItem({key: "AC",	text: "Combinação de categ. A e C"}),
                                        new sap.ui.core.ListItem({key: "AD",	text: "Combinação de categ. A e D"}),
                                        new sap.ui.core.ListItem({key: "AE",	text: "Combinação de categ. A e E"})
                                      ],
                                      change: function(oEvent){
                                        sap.ui.getCore().byId("DriveCat").setValue(oEvent.oSource.getSelectedKey());
                                      }
                                    }),
                                    new sap.m.Label({text:"Dt. Emissão"}),
                                    new sap.m.DatePicker({
                                      maxLength: 10,
                                      id: "DriveDtEmis",
                                      valueFormat: "yyyyMMdd",
                                      displayFormat: "dd.MM.yyyy",
                                      value: "{DriveDtEmis}"
                                    })

                                  ]
                                }),

                                new sap.ui.layout.form.SimpleForm({
                                  title: "Passaporte",
                                  width: "100%",
                                  content: [

                                    new sap.m.Label({text:"Nº Passaporte"}),
                                    new sap.m.Input({
                                      maxLength: 14,
                                      id: "PasspNr",
                                      width: "100%",
                                      value: "{PasspNr}"
                                    }),
                                    new sap.m.Label({text:"Dt. Emissão"}),
                                    new sap.m.DatePicker({
                                      maxLength: 10,
                                      id: "PasspDtEmis",
                                      valueFormat: "yyyyMMdd",
                                      displayFormat: "dd.MM.yyyy",
                                      value: "{PasspDtEmis}"
                                    }),
                                    new sap.m.Label({text:"Cond.Trab.Estrangeiro"}),
                                    new sap.m.ComboBox({
                                      maxLength: 14,
                                      id: "ForeignSit",
                                      width: "100%",
                                      value: "{ForeignSit}",
                                      items: [
                                        new sap.ui.core.ListItem({key: "01",	text: "Visto permanente"}),
                                        new sap.ui.core.ListItem({key: "02",	text: "	Visto temporário"}),
                                        new sap.ui.core.ListItem({key: "03",	text: "	Asilado"}),
                                        new sap.ui.core.ListItem({key: "04",	text: "	Refugiado"}),
                                        new sap.ui.core.ListItem({key: "05",	text: "	Solicitante de refúgio"}),
                                        new sap.ui.core.ListItem({key: "06",	text: "	Residente em país fronteiriço ao Brasil"}),
                                        new sap.ui.core.ListItem({key: "07",	text: "	Deficiente físico e com mais de 51 anos"}),
                                        new sap.ui.core.ListItem({key: "08",	text: "	Com residência provisória e anistiado, em situação irregular"}),
                                        new sap.ui.core.ListItem({key: "09",	text: "	Permanência no Brasil em razão de filhos ou cônj.brasileiro"}),
                                        new sap.ui.core.ListItem({key: "10",	text: "	Beneficiado pelo acordo entre países do Mercosul"}),
                                        new sap.ui.core.ListItem({key: "11",	text: "	Depend. agente diplom. e/ou consular países conv. recipr."}),
                                        new sap.ui.core.ListItem({key: "12",	text: "	Beneficiado Tratado de Amizade, Coop. e Consul. com Portugal"})
                                      ],
                                      change: function(oEvent){
                                        sap.ui.getCore().byId("ForeignSit").setValue(oEvent.oSource.getSelectedKey());
                                      }
                                    })

                                  ]
                                }),

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

                               new sap.m.CheckBox({
                                text : 'Imposto de Renda?',
                                tooltip : 'Newsletter checkbox',
                                checked : true,
                                width: "100%",
                                id: "oCB",
                                select : function() {if(oCB.getChecked()){alert('YES')}else{alert('NO')};}
                               }),

                               new sap.m.Label({text:"Nome", width: "100%"}),
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
                               }),

                               oBtnUpdDependentes, oBtnCanDependentes
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

                  var oBtnSalvar = new sap.m.Button("Approve", {
                              text: "Salvar",
                              type: "Accept",
                              tap: [ oController.UpdateDadosPessoais, oController ]
                              });

                  var oBar = new sap.m.Bar({
                  				design : sap.m.BarDesign.Auto,
                  			});

                  oBar.addContentMiddle(new sap.m.Text({text: "{Cname}"}));
                  oBar.addContentMiddle(new sap.m.Text({text: "("}));
                  oBar.addContentMiddle(new sap.m.Text({text: "{Pernr}"}));
                  oBar.addContentMiddle(new sap.m.Text({text: ")"}));
                  oBar.addContentRight(oBtnSalvar);
                  oPage.setSubHeader(oBar);

                  var oFot = new sap.m.Bar({ });
                  oFot.addContentMiddle(new sap.m.Text({text: "PORTAL CWIT eSOCIAL - XP Investimentos ("}));
                  oFot.addContentMiddle(new sap.m.Text({text: "{Usrid}"}));
                  oFot.addContentMiddle(new sap.m.Text({text: ")"}));
                  oPage.setFooter(oFot);

                  //oPage.addContent(oFormHead);

                  oPage.addContent(oFormDadosPessoais);
                  oPage.addContent(oFormEndereco);
                  oPage.addContent(oFormDocumentos);

                  var  oFilters = null
                  oTableDadosPessoais.bindItems( "/results",templateDadosPessoais, null, oFilters);
                  oTableDadosPessoais.bindElement( "/results" );
                  //oPage.addContent(oTableDadosPessoais);

                  oTableDependentes.bindItems( "/results/0/cwitDependentes/results",templateDependentes, null, oFilters);
                  oTableDependentes.bindElement( "/results/0/cwitDependentes/results" );
                  oPage.addContent(oTableDependentes);

                  return oPage;

     }

});
