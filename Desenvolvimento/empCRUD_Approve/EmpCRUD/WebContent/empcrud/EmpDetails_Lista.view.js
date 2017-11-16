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




                  return oPage;

     }

});
