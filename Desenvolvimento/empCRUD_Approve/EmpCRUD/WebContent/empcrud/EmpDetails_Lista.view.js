sap.ui.jsview("empcrud.EmpDetails_Lista", {
	 /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf empcrud.EmpDetails
     */
     getControllerName : function() {
                 return "empcrud.EmpDetails_Lista";
     },

     /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf empcrud.EmpDetails
     */
     createContent : function(oController) {

                var oPage = new sap.m.Page({
                  title: "Lista de Acessos ao Portal",
                  showHeader: true,
                  showSubHeader: true,
                  showNavButton : true,
                    navButtonPress : function() { oPage.unbindElement (); app.to("idEmpDetails1");},
                });



                //Table or Dashboard to show the Employee Data
                 var oTableAcessos = new sap.m.Table({
                             id: "acessos",
                             headerText:"Acessos",
                             noDataText: "Nenhum Acesso feito no Portal até o momento!",
                             //itemPress : [ oController.ItemPress,oController ],
                             columns: [
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                 text: "Status"  }) }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                 text: "Matrícula"  }) }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                 text: "Usuário"  }) }),
                               new sap.m.Column({
                                 width: "8em",
                                 header: new sap.m.Label({
                                 text: "Nome Completo"  }) }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                 text: "Data"  }) }),
                               new sap.m.Column({
                                 width: "1em",
                                 header: new sap.m.Label({
                                 text: "Hora"  }) })
                             ]
                 });

                 //Template  to map the data to the respective column
                 var templateDependentes = new sap.m.ColumnListItem({

                        id: "templateDependentes",
                        type: "Navigation",
                        visible: true,
                        cells: [
                          new sap.m.ObjectStatus({
                           icon: "{AcessosSet>Status}"
                          }),
                          new sap.m.Label({
                           text: "{AcessosSet>Pernr}"
                          }),
                          new sap.m.Label({
                           text: "{AcessosSet>Usrid}"
                          }),
                          new sap.m.Label({
                           text: "{AcessosSet>Cname}"
                          }),
                          new sap.m.Label({
                           text: "{AcessosSet>Datum}"
                          }),
                          new sap.m.Label({
                           text: "{AcessosSet>Uzeit}"
                          }),
                        ]
                 });

                 var  oFilters = null
                 oTableAcessos.bindItems( "AcessosSet>/results",templateDependentes, null, oFilters);
                 oTableAcessos.bindElement( "AcessosSet>/results" );
                 oPage.addContent(oTableAcessos);
            		//oPage.addContent(list);

                return oPage;

     }

});
