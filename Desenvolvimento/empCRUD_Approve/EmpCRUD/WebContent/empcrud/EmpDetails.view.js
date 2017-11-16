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

                //oPage.bindElement("/results/0");

                 //Table or Dashboard to show the Employee Data
                var oTableEmpregados = new sap.m.Table({
                  id: "empregados",
                  headerText:"Empregados",
                  itemPress : [ oController.ItemPress,oController ],
                  columns: [
                    new sap.m.Column({
                      width: "1em",
                      header: new sap.m.Label({
                        text: "Matrícula"
                      })
                    }),
                    new sap.m.Column({
                      width: "1em",
                      header: new sap.m.Label({
                        text: "Nome Completo"
                      })
                    })
                  ]
                });

                  //Template  to map the data to the respective column
                var templateEmpregados = new sap.m.ColumnListItem({

                  id: "templateEmpregados",
                  type: "Navigation",
                  visible: true,
                  cells: [
                    new sap.m.Label({
                      text: "{Pernr}"
                    }),
                    new sap.m.Label({
                      text: "{Cname}"
                    })
                  ]

                });


          			// create a List control
          			var list = new sap.m.List({
          				headerText:"Pendentes de Validação / Aprovação"
          			});

          			// bind the List items to the data collection
          			list.bindItems({
          				path : "/results",
          				sorter : new sap.ui.model.Sorter("Cname"),
          				template : new sap.m.StandardListItem({
          					title: "{Cname}",
          					description: "{Pernr}",
          					type: sap.m.ListType.Navigation,
          					press:function(evt){
          						var oBindingContext = evt.getSource().getBindingContext(); // evt.getSource() is the ListItem
          						//idEmpDetails2.setBindingContext(oBindingContext); // make sure the detail page has the correct data context
          						app.to("idEmpDetails2", this.getBindingContext());
          					}
          				})
          			});


                var oBtnLista = new sap.m.Button("Lista", {
                            text: "Lista de Acessos",
                            icon: "sap-icon://notes",
                            tap: [ oController.Lista, oController ]
                            });

                var oBar = new sap.m.Bar({
                        design : sap.m.BarDesign.Auto,
                      });

                oBar.addContentLeft(oBtnLista);
                oPage.setSubHeader(oBar);

                var  oFilters = null
                oTableEmpregados.bindItems( "/results",templateEmpregados, null, oFilters);
                oTableEmpregados.bindElement( "/results" );
                //oPage.addContent(oTableEmpregados);
                oPage.addContent(list);

                return oPage;

     }

});
