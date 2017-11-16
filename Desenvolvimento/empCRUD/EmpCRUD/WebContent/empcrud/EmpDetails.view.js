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
                                   maxLength: 20,
                                   id: "Status",
                                   visible: false,
                                 }),
                                 new sap.m.Input({
                                   maxLength: 20,
                                   id: "Usrid",
                                   value: "{Usrid}",
                                   visible: false,
                                 }),
                                 new sap.m.Input({
                                   maxLength: 80,
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
                                 }),
                                 new sap.m.Label({text:"Escolaridade"}),
                                 new sap.m.ComboBox({
                                   maxLength: 10,
                                   id: "Escol",
                                   width: "100%",
                                   value: "{Escol}",
                                   items: [
                                    new sap.ui.core.ListItem({key: "1", text: "Analfabeto"}),
                                    new sap.ui.core.ListItem({key: "10", text: "Pós grad.incompleto"}),
                                    new sap.ui.core.ListItem({key: "11", text: "Pós grad.completo"}),
                                    new sap.ui.core.ListItem({key: "12", text: "Mestrado incompleto"}),
                                    new sap.ui.core.ListItem({key: "13", text: "Mestrado completo"}),
                                    new sap.ui.core.ListItem({key: "14", text: "Doutorado incompleto"}),
                                    new sap.ui.core.ListItem({key: "15", text: "Doutorado completo"}),
                                    new sap.ui.core.ListItem({key: "16", text: "Pós dout.incompleto"}),
                                    new sap.ui.core.ListItem({key: "17", text: "Pós dout completo"}),
                                    new sap.ui.core.ListItem({key: "2", text: "Primário incompleto"}),
                                    new sap.ui.core.ListItem({key: "3", text: "Primário completo"}),
                                    new sap.ui.core.ListItem({key: "4", text: "Ginasial incompleto"}),
                                    new sap.ui.core.ListItem({key: "5", text: "Ginasial completo"}),
                                    new sap.ui.core.ListItem({key: "6", text: "Colegial incompleto"}),
                                    new sap.ui.core.ListItem({key: "7", text: "Colegial completo"}),
                                    new sap.ui.core.ListItem({key: "8", text: "Superior incompleto"}),
                                    new sap.ui.core.ListItem({key: "9", text: "Superior completo"})
                                   ],
                                   change: function(oEvent){
                                     sap.ui.getCore().byId("Escol").setValue(oEvent.oSource.getSelectedKey());
                                   }
                                 })

                               ]
                             });

                             var oFormDadosBancarios = new sap.ui.layout.form.SimpleForm({
                                title: "Dados Bancários",
                                width: "50%",
                                content: [

                                  new sap.m.Label({text:"Banco"}),
                                  new sap.m.ComboBox({
                                    maxLength: 10,
                                    id: "Bkont",
                                    value: "{Bkont}",
                                    items: [
                                      new sap.ui.core.ListItem({key: "654", text: "Banco A.J.Renner S.A."}),
                                      new sap.ui.core.ListItem({key: "246", text: "Banco ABC Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "25", text: "Banco Alfa S.A."}),
                                      new sap.ui.core.ListItem({key: "641", text: "Banco Alvorada S.A."}),
                                      new sap.ui.core.ListItem({key: "213", text: "Banco Arbi S.A."}),
                                      new sap.ui.core.ListItem({key: "19", text: "Banco Azteca do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "29", text: "Banco Banerj S.A."}),
                                      new sap.ui.core.ListItem({key: "0", text: "Banco Bankpar S.A."}),
                                      new sap.ui.core.ListItem({key: "740", text: "Banco Barclays S.A."}),
                                      new sap.ui.core.ListItem({key: "107", text: "Banco BBM S.A."}),
                                      new sap.ui.core.ListItem({key: "31", text: "Banco Beg S.A."}),
                                      new sap.ui.core.ListItem({key: "739", text: "Banco BGN S.A."}),
                                      new sap.ui.core.ListItem({key: "96", text: "Banco BM&F de Serviços de Liquidação e Custódia S.A"}),
                                      new sap.ui.core.ListItem({key: "318", text: "Banco BMG S.A."}),
                                      new sap.ui.core.ListItem({key: "752", text: "Banco BNP Paribas Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "248", text: "Banco Boavista Interatlântico S.A."}),
                                      new sap.ui.core.ListItem({key: "218", text: "Banco Bonsucesso S.A."}),
                                      new sap.ui.core.ListItem({key: "65", text: "Banco Bracce S.A."}),
                                      new sap.ui.core.ListItem({key: "36", text: "Banco Bradesco BBI S.A."}),
                                      new sap.ui.core.ListItem({key: "204", text: "Banco Bradesco Cartões S.A."}),
                                      new sap.ui.core.ListItem({key: "394", text: "Banco Bradesco Financiamentos S.A."}),
                                      new sap.ui.core.ListItem({key: "237", text: "Banco Bradesco S.A."}),
                                      new sap.ui.core.ListItem({key: "225", text: "Banco Brascan S.A."}),
                                      new sap.ui.core.ListItem({key: "M15", text: "Banco BRJ S.A."}),
                                      new sap.ui.core.ListItem({key: "208", text: "Banco BTG Pactual S.A."}),
                                      new sap.ui.core.ListItem({key: "44", text: "Banco BVA S.A."}),
                                      new sap.ui.core.ListItem({key: "263", text: "Banco Cacique S.A."}),
                                      new sap.ui.core.ListItem({key: "473", text: "Banco Caixa Geral - Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "412", text: "Banco Capital S.A."}),
                                      new sap.ui.core.ListItem({key: "40", text: "Banco Cargill S.A."}),
                                      new sap.ui.core.ListItem({key: "745", text: "Banco Citibank S.A."}),
                                      new sap.ui.core.ListItem({key: "M08", text: "Banco Citicard S.A."}),
                                      new sap.ui.core.ListItem({key: "241", text: "Banco Clássico S.A."}),
                                      new sap.ui.core.ListItem({key: "M19", text: "Banco CNH Capital S.A."}),
                                      new sap.ui.core.ListItem({key: "215", text: "Banco Comercial e de Investimento Sudameris S.A."}),
                                      new sap.ui.core.ListItem({key: "756", text: "Banco Cooperativo do Brasil S.A. - BANCOOB"}),
                                      new sap.ui.core.ListItem({key: "748", text: "Banco Cooperativo Sicredi S.A."}),
                                      new sap.ui.core.ListItem({key: "75", text: "Banco CR2 S.A."}),
                                      new sap.ui.core.ListItem({key: "721", text: "Banco Credibel S.A."}),
                                      new sap.ui.core.ListItem({key: "222", text: "Banco Credit Agricole Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "505", text: "Banco Credit Suisse (Brasil) S.A."}),
                                      new sap.ui.core.ListItem({key: "229", text: "Banco Cruzeiro do Sul S.A."}),
                                      new sap.ui.core.ListItem({key: "266", text: "Banco Cédula S.A."}),
                                      new sap.ui.core.ListItem({key: "3", text: "Banco da Amazônia S.A."}),
                                      new sap.ui.core.ListItem({key: "083-3", text: "Banco da China Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "M21", text: "Banco Daimlerchrysler S.A."}),
                                      new sap.ui.core.ListItem({key: "707", text: "Banco Daycoval S.A."}),
                                      new sap.ui.core.ListItem({key: "300", text: "Banco de La Nacion Argentina"}),
                                      new sap.ui.core.ListItem({key: "495", text: "Banco de La Provincia de Buenos Aires"}),
                                      new sap.ui.core.ListItem({key: "494", text: "Banco de La Republica Oriental del Uruguay"}),
                                      new sap.ui.core.ListItem({key: "M06", text: "Banco de Lage Landen Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "24", text: "Banco de Pernambuco S.A. - BANDEPE"}),
                                      new sap.ui.core.ListItem({key: "456", text: "Banco de Tokyo-Mitsubishi UFJ Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "214", text: "Banco Dibens S.A."}),
                                      new sap.ui.core.ListItem({key: "1", text: "Banco do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "47", text: "Banco do Estado de Sergipe S.A."}),
                                      new sap.ui.core.ListItem({key: "37", text: "Banco do Estado do Pará S.A."}),
                                      new sap.ui.core.ListItem({key: "39", text: "Banco do Estado do Piauí S.A. - BEP"}),
                                      new sap.ui.core.ListItem({key: "41", text: "Banco do Estado do Rio Grande do Sul S.A."}),
                                      new sap.ui.core.ListItem({key: "4", text: "Banco do Nordeste do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "265", text: "Banco Fator S.A."}),
                                      new sap.ui.core.ListItem({key: "M03", text: "Banco Fiat S.A."}),
                                      new sap.ui.core.ListItem({key: "224", text: "Banco Fibra S.A."}),
                                      new sap.ui.core.ListItem({key: "626", text: "Banco Ficsa S.A."}),
                                      new sap.ui.core.ListItem({key: "M18", text: "Banco Ford S.A."}),
                                      new sap.ui.core.ListItem({key: "233", text: "Banco GE Capital S.A."}),
                                      new sap.ui.core.ListItem({key: "734", text: "Banco Gerdau S.A."}),
                                      new sap.ui.core.ListItem({key: "M07", text: "Banco GMAC S.A."}),
                                      new sap.ui.core.ListItem({key: "612", text: "Banco Guanabara S.A."}),
                                      new sap.ui.core.ListItem({key: "M22", text: "Banco Honda S.A."}),
                                      new sap.ui.core.ListItem({key: "63", text: "Banco Ibi S.A. Banco Múltiplo"}),
                                      new sap.ui.core.ListItem({key: "M11", text: "Banco IBM S.A."}),
                                      new sap.ui.core.ListItem({key: "604", text: "Banco Industrial do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "320", text: "Banco Industrial e Comercial S.A."}),
                                      new sap.ui.core.ListItem({key: "653", text: "Banco Indusval S.A."}),
                                      new sap.ui.core.ListItem({key: "630", text: "Banco Intercap S.A."}),
                                      new sap.ui.core.ListItem({key: "077-9", text: "Banco Intermedium S.A."}),
                                      new sap.ui.core.ListItem({key: "249", text: "Banco Investcred Unibanco S.A."}),
                                      new sap.ui.core.ListItem({key: "M09", text: "Banco Itaucred Financiamentos S.A."}),
                                      new sap.ui.core.ListItem({key: "184", text: "Banco Itaú BBA S.A."}),
                                      new sap.ui.core.ListItem({key: "479", text: "Banco ItaúBank S.A"}),
                                      new sap.ui.core.ListItem({key: "376", text: "Banco J. P. Morgan S.A."}),
                                      new sap.ui.core.ListItem({key: "74", text: "Banco J. Safra S.A."}),
                                      new sap.ui.core.ListItem({key: "217", text: "Banco John Deere S.A."}),
                                      new sap.ui.core.ListItem({key: "76", text: "Banco KDB S.A."}),
                                      new sap.ui.core.ListItem({key: "757", text: "Banco KEB do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "600", text: "Banco Luso Brasileiro S.A."}),
                                      new sap.ui.core.ListItem({key: "212", text: "Banco Matone S.A."}),
                                      new sap.ui.core.ListItem({key: "M12", text: "Banco Maxinvest S.A."}),
                                      new sap.ui.core.ListItem({key: "389", text: "Banco Mercantil do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "746", text: "Banco Modal S.A."}),
                                      new sap.ui.core.ListItem({key: "M10", text: "Banco Moneo S.A."}),
                                      new sap.ui.core.ListItem({key: "738", text: "Banco Morada S.A."}),
                                      new sap.ui.core.ListItem({key: "66", text: "Banco Morgan Stanley S.A."}),
                                      new sap.ui.core.ListItem({key: "243", text: "Banco Máxima S.A."}),
                                      new sap.ui.core.ListItem({key: "45", text: "Banco Opportunity S.A."}),
                                      new sap.ui.core.ListItem({key: "M17", text: "Banco Ourinvest S.A."}),
                                      new sap.ui.core.ListItem({key: "623", text: "Banco Panamericano S.A."}),
                                      new sap.ui.core.ListItem({key: "611", text: "Banco Paulista S.A."}),
                                      new sap.ui.core.ListItem({key: "613", text: "Banco Pecúnia S.A."}),
                                      new sap.ui.core.ListItem({key: "094-2", text: "Banco Petra S.A."}),
                                      new sap.ui.core.ListItem({key: "643", text: "Banco Pine S.A."}),
                                      new sap.ui.core.ListItem({key: "724", text: "Banco Porto Seguro S.A."}),
                                      new sap.ui.core.ListItem({key: "735", text: "Banco Pottencial S.A."}),
                                      new sap.ui.core.ListItem({key: "638", text: "Banco Prosper S.A."}),
                                      new sap.ui.core.ListItem({key: "M24", text: "Banco PSA Finance Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "747", text: "Banco Rabobank International Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "088-4", text: "Banco Randon S.A."}),
                                      new sap.ui.core.ListItem({key: "356", text: "Banco Real S.A."}),
                                      new sap.ui.core.ListItem({key: "633", text: "Banco Rendimento S.A."}),
                                      new sap.ui.core.ListItem({key: "741", text: "Banco Ribeirão Preto S.A."}),
                                      new sap.ui.core.ListItem({key: "M16", text: "Banco Rodobens S.A."}),
                                      new sap.ui.core.ListItem({key: "72", text: "Banco Rural Mais S.A."}),
                                      new sap.ui.core.ListItem({key: "453", text: "Banco Rural S.A."}),
                                      new sap.ui.core.ListItem({key: "422", text: "Banco Safra S.A."}),
                                      new sap.ui.core.ListItem({key: "33", text: "Banco Santander (Brasil) S.A."}),
                                      new sap.ui.core.ListItem({key: "250", text: "Banco Schahin S.A."}),
                                      new sap.ui.core.ListItem({key: "743", text: "Banco Semear S.A."}),
                                      new sap.ui.core.ListItem({key: "749", text: "Banco Simples S.A."}),
                                      new sap.ui.core.ListItem({key: "366", text: "Banco Société Générale Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "637", text: "Banco Sofisa S.A."}),
                                      new sap.ui.core.ListItem({key: "12", text: "Banco Standard de Investimentos S.A."}),
                                      new sap.ui.core.ListItem({key: "464", text: "Banco Sumitomo Mitsui Brasileiro S.A."}),
                                      new sap.ui.core.ListItem({key: "082-5", text: "Banco Topázio S.A."}),
                                      new sap.ui.core.ListItem({key: "M20", text: "Banco Toyota do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "M13", text: "Banco Tricury S.A."}),
                                      new sap.ui.core.ListItem({key: "634", text: "Banco Triângulo S.A."}),
                                      new sap.ui.core.ListItem({key: "M14", text: "Banco Volkswagen S.A."}),
                                      new sap.ui.core.ListItem({key: "M23", text: "Banco Volvo (Brasil) S.A."}),
                                      new sap.ui.core.ListItem({key: "655", text: "Banco Votorantim S.A."}),
                                      new sap.ui.core.ListItem({key: "610", text: "Banco VR S.A."}),
                                      new sap.ui.core.ListItem({key: "370", text: "Banco WestLB do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "21", text: "BANESTES S.A. Banco do Estado do Espírito Santo"}),
                                      new sap.ui.core.ListItem({key: "719", text: "Banif-Banco Internacional do Funchal (Brasil)S.A."}),
                                      new sap.ui.core.ListItem({key: "755", text: "Bank of America Merrill Lynch Banco Múltiplo S.A."}),
                                      new sap.ui.core.ListItem({key: "744", text: "BankBoston N.A."}),
                                      new sap.ui.core.ListItem({key: "73", text: "BB Banco Popular do Brasil S.A."}),
                                      new sap.ui.core.ListItem({key: "78", text: "BES Investimento do Brasil S.A.-Banco de Investimento"}),
                                      new sap.ui.core.ListItem({key: "69", text: "BPN Brasil Banco Múltiplo S.A."}),
                                      new sap.ui.core.ListItem({key: "70", text: "BRB - Banco de Brasília S.A."}),
                                      new sap.ui.core.ListItem({key: "092-2", text: "Brickell S.A. Crédito, financiamento e Investimento"}),
                                      new sap.ui.core.ListItem({key: "104", text: "Caixa Econômica Federal"}),
                                      new sap.ui.core.ListItem({key: "477", text: "Citibank N.A."}),
                                      new sap.ui.core.ListItem({key: "081-7", text: "Concórdia Banco S.A."}),
                                      new sap.ui.core.ListItem({key: "097-3", text: "Cooperativa Central de Crédito Noroeste Brasileiro Ltda."}),
                                      new sap.ui.core.ListItem({key: "085-x", text: "Cooperativa Central de Crédito Urbano-CECRED"}),
                                      new sap.ui.core.ListItem({key: "099-x", text: "Cooperativa Central de Economia e Credito Mutuo das Unicreds"}),
                                      new sap.ui.core.ListItem({key: "090-2", text: "Cooperativa Central de Economia e Crédito Mutuo das Unicreds"}),
                                      new sap.ui.core.ListItem({key: "089-2", text: "Cooperativa de Crédito Rural da Região de Mogiana"}),
                                      new sap.ui.core.ListItem({key: "087-6", text: "Cooperativa Unicred Central Santa Catarina"}),
                                      new sap.ui.core.ListItem({key: "098-1", text: "Credicorol Cooperativa de Crédito Rural"}),
                                      new sap.ui.core.ListItem({key: "487", text: "Deutsche Bank S.A. - Banco Alemão"}),
                                      new sap.ui.core.ListItem({key: "751", text: "Dresdner Bank Brasil S.A. - Banco Múltiplo"}),
                                      new sap.ui.core.ListItem({key: "64", text: "Goldman Sachs do Brasil Banco Múltiplo S.A."}),
                                      new sap.ui.core.ListItem({key: "62", text: "Hipercard Banco Múltiplo S.A."}),
                                      new sap.ui.core.ListItem({key: "399", text: "HSBC Bank Brasil S.A. - Banco Múltiplo"}),
                                      new sap.ui.core.ListItem({key: "168", text: "HSBC Finance (Brasil) S.A. - Banco Múltiplo"}),
                                      new sap.ui.core.ListItem({key: "492", text: "ING Bank N.V."}),
                                      new sap.ui.core.ListItem({key: "652", text: "Itaú Unibanco Holding S.A."}),
                                      new sap.ui.core.ListItem({key: "341", text: "Itaú Unibanco S.A."}),
                                      new sap.ui.core.ListItem({key: "79", text: "JBS Banco S.A."}),
                                      new sap.ui.core.ListItem({key: "488", text: "JPMorgan Chase Bank"}),
                                      new sap.ui.core.ListItem({key: "14", text: "Natixis Brasil S.A. Banco Múltiplo"}),
                                      new sap.ui.core.ListItem({key: "753", text: "NBC Bank Brasil S.A. - Banco Múltiplo"}),
                                      new sap.ui.core.ListItem({key: "086-8", text: "OBOE Crédito Financiamento e Investimento S.A."}),
                                      new sap.ui.core.ListItem({key: "254", text: "Paraná Banco S.A."}),
                                      new sap.ui.core.ListItem({key: "409", text: "UNIBANCO - União de Bancos Brasileiros S.A."}),
                                      new sap.ui.core.ListItem({key: "230", text: "Unicard Banco Múltiplo S.A."}),
                                      new sap.ui.core.ListItem({key: "091-4", text: "Unicred Central do Rio Grande do Sul"}),
                                      new sap.ui.core.ListItem({key: "84", text: "Unicred Norte do Paraná"})

                                    ],
                                    change: function(oEvent){
                                      sap.ui.getCore().byId("Bkont").setValue(oEvent.oSource.getSelectedKey());
                                    }
                                  }),
                                  new sap.m.Label({text:"Agência"}),
                                  new sap.m.Input({
                                    maxLength: 10,
                                    id: "Bankl",
                                    value: "{Bankl}"
                                  }),
                                  new sap.m.Label({text:"Conta"}),
                                  new sap.m.Input({
                                    maxLength: 10,
                                    id: "Bankn",
                                    value: "{Bankn}"
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
                                        new sap.ui.core.ListItem({key: " ",	  text: "Não informado"}),
                                        new sap.ui.core.ListItem({key: "A",	  text: "Condutor de veículo motorizado de duas ou três rodas"}),
                                        new sap.ui.core.ListItem({key: "B",	  text: "Condutor de veículo motorizado não abrangido por categoria A"}),
                                        new sap.ui.core.ListItem({key: "C",	  text: "Condutor de veículo motorizado usado para transp. de carga"}),
                                        new sap.ui.core.ListItem({key: "D",	  text: "condutor de veículo motorizado usado transp. de passageiros"}),
                                        new sap.ui.core.ListItem({key: "E",	  text: "Condutor de combinação de veículos"}),
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
                                select : function(oEvent) {if(oEvent.getParameter('selected') == true) {  };}
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
                               new sap.m.Label({text:"Dt. Nascimento"}),
                               new sap.m.DatePicker({
                                 maxLength: 20,
                                 id: "Fgbdt",
                                 valueFormat: "yyyyMMdd",
                                 displayFormat: "dd.MM.yyyy"
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
                                  text: "Imp.Renda"  }) }),
                                new sap.m.Column({
                                  width: "1em",
                                  header: new sap.m.Label({
                                  text: "CPF"  }) }),
                                new sap.m.Column({
                                  width: "1em",
                                  header: new sap.m.Label({
                                  text: "Dt. Nascimento"  }) }),
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
                            text: "{Irflg}"
                           }),
                           new sap.m.Label({
                            text: "{Icnum}"
                           }),
                           new sap.m.Label({
                            text: "{Fgbdt}"
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
                  oPage.addContent(oFormDadosBancarios);
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
