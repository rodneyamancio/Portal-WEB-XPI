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
                             text: "OK",
                             width: "10em",
                             tap: [ oController.UpdateDependentes, oController ]
                             });

                 var oBtnCanDependentes = new sap.m.Button("CancelDependentes", {
                             text: "Cancel",
                             width: "8em",
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
                                 new sap.m.Select({
                                   maxLength: 10,
                                   id: "Escol",
                                   width: "100%",
                                   selectedKey: "{Escol}",
                                   items: [
                                    new sap.ui.core.Item({key: "1", text: "Analfabeto"}),
                                    new sap.ui.core.Item({key: "10", text: "Pós grad.incompleto"}),
                                    new sap.ui.core.Item({key: "11", text: "Pós grad.completo"}),
                                    new sap.ui.core.Item({key: "12", text: "Mestrado incompleto"}),
                                    new sap.ui.core.Item({key: "13", text: "Mestrado completo"}),
                                    new sap.ui.core.Item({key: "14", text: "Doutorado incompleto"}),
                                    new sap.ui.core.Item({key: "15", text: "Doutorado completo"}),
                                    new sap.ui.core.Item({key: "16", text: "Pós dout.incompleto"}),
                                    new sap.ui.core.Item({key: "17", text: "Pós dout completo"}),
                                    new sap.ui.core.Item({key: "2", text: "Primário incompleto"}),
                                    new sap.ui.core.Item({key: "3", text: "Primário completo"}),
                                    new sap.ui.core.Item({key: "4", text: "Ginasial incompleto"}),
                                    new sap.ui.core.Item({key: "5", text: "Ginasial completo"}),
                                    new sap.ui.core.Item({key: "6", text: "Colegial incompleto"}),
                                    new sap.ui.core.Item({key: "7", text: "Colegial completo"}),
                                    new sap.ui.core.Item({key: "8", text: "Superior incompleto"}),
                                    new sap.ui.core.Item({key: "9", text: "Superior completo"})
                                   ]
                                   //,
                                   //change: function(oEvent){
                                   //sap.ui.getCore().byId("Escol").setValue(oEvent.oSource.getSelectedKey());
                                   //}
                                 }),



                               ]
                             });

                             var oFormDadosBancarios = new sap.ui.layout.form.SimpleForm({
                                title: "Dados Bancários",
                                width: "50%",
                                content: [

                                  new sap.m.Label({text:"Banco"}),
                                  new sap.m.Select({
                                    maxLength: 4,
                                    id: "Bkont",
                                    selectedKey: "{Bkont}",
                                    //width: "30%",
                                    items: [
                                        new sap.ui.core.Item({key: "654", text:"654 - Banco A.J.Renner S.A."}),
                                        new sap.ui.core.Item({key: "246", text:"246 - Banco ABC Brasil S.A."}),
                                        new sap.ui.core.Item({key: "075", text:"075 - Banco ABN AMRO S.A."}),
                                        new sap.ui.core.Item({key: "121", text:"121 - Banco Agiplan S.A."}),
                                        new sap.ui.core.Item({key: "025", text:"025 - Banco Alfa S.A."}),
                                        new sap.ui.core.Item({key: "641", text:"641 - Banco Alvorada S.A."}),
                                        new sap.ui.core.Item({key: "065", text:"065 - Banco Andbank (Brasil) S.A."}),
                                        new sap.ui.core.Item({key: "213", text:"213 - Banco Arbi S.A."}),
                                        new sap.ui.core.Item({key: "024", text:"024 - Banco BANDEPE S.A."}),
                                        new sap.ui.core.Item({key: "107", text:"107 - Banco BBM S.A."}),
                                        new sap.ui.core.Item({key: "096", text:"096 - Banco BM&FBOVESPA de Serviços de Liquidação e Custódia S.A"}),
                                        new sap.ui.core.Item({key: "318", text:"318 - Banco BMG S.A."}),
                                        new sap.ui.core.Item({key: "752", text:"752 - Banco BNP Paribas Brasil S.A."}),
                                        new sap.ui.core.Item({key: "248", text:"248 - Banco Boavista Interatlântico S.A."}),
                                        new sap.ui.core.Item({key: "218", text:"218 - Banco Bonsucesso S.A."}),
                                        new sap.ui.core.Item({key: "063", text:"063 - Banco Bradescard S.A."}),
                                        new sap.ui.core.Item({key: "036", text:"036 - Banco Bradesco BBI S.A."}),
                                        new sap.ui.core.Item({key: "122", text:"122 - Banco Bradesco BERJ S.A."}),
                                        new sap.ui.core.Item({key: "204", text:"204 - Banco Bradesco Cartões S.A."}),
                                        new sap.ui.core.Item({key: "394", text:"394 - Banco Bradesco Financiamentos S.A."}),
                                        new sap.ui.core.Item({key: "237", text:"237 - Banco Bradesco S.A."}),
                                        new sap.ui.core.Item({key: "208", text:"208 - Banco BTG Pactual S.A."}),
                                        new sap.ui.core.Item({key: "263", text:"263 - Banco Cacique S.A."}),
                                        new sap.ui.core.Item({key: "473", text:"473 - Banco Caixa Geral - Brasil S.A."}),
                                        new sap.ui.core.Item({key: "412", text:"412 - Banco Capital S.A."}),
                                        new sap.ui.core.Item({key: "040", text:"040 - Banco Cargill S.A."}),
                                        new sap.ui.core.Item({key: "266", text:"266 - Banco Cédula S.A."}),
                                        new sap.ui.core.Item({key: "739", text:"739 - Banco Cetelem S.A."}),
                                        new sap.ui.core.Item({key: "233", text:"233 - Banco Cifra S.A."}),
                                        new sap.ui.core.Item({key: "745", text:"745 - Banco Citibank S.A."}),
                                        new sap.ui.core.Item({key: "241", text:"241 - Banco Clássico S.A."}),
                                        new sap.ui.core.Item({key: "095", text:"095 - Banco Confidence de Câmbio S.A."}),
                                        new sap.ui.core.Item({key: "756", text:"756 - Banco Cooperativo do Brasil S.A. - BANCOOB"}),
                                        new sap.ui.core.Item({key: "748", text:"748 - Banco Cooperativo Sicredi S.A."}),
                                        new sap.ui.core.Item({key: "222", text:"222 - Banco Credit Agricole Brasil S.A."}),
                                        new sap.ui.core.Item({key: "505", text:"505 - Banco Credit Suisse (Brasil) S.A."}),
                                        new sap.ui.core.Item({key: "069", text:"069 - Banco Crefisa S.A."}),
                                        new sap.ui.core.Item({key: "003", text:"003 - Banco da Amazônia S.A."}),
                                        new sap.ui.core.Item({key: "083", text:"083 - Banco da China Brasil S.A."}),
                                        new sap.ui.core.Item({key: "707", text:"707 - Banco Daycoval S.A."}),
                                        new sap.ui.core.Item({key: "300", text:"300 - Banco de La Nacion Argentina"}),
                                        new sap.ui.core.Item({key: "495", text:"495 - Banco de La Provincia de Buenos Aires"}),
                                        new sap.ui.core.Item({key: "494", text:"494 - Banco de La Republica Oriental del Uruguay"}),
                                        new sap.ui.core.Item({key: "456", text:"456 - Banco de Tokyo-Mitsubishi UFJ Brasil S.A."}),
                                        new sap.ui.core.Item({key: "001", text:"001 - Banco do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "047", text:"047 - Banco do Estado de Sergipe S.A."}),
                                        new sap.ui.core.Item({key: "037", text:"037 - Banco do Estado do Pará S.A."}),
                                        new sap.ui.core.Item({key: "041", text:"041 - Banco do Estado do Rio Grande do Sul S.A."}),
                                        new sap.ui.core.Item({key: "004", text:"004 - Banco do Nordeste do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "265", text:"265 - Banco Fator S.A."}),
                                        new sap.ui.core.Item({key: "224", text:"224 - Banco Fibra S.A."}),
                                        new sap.ui.core.Item({key: "626", text:"626 - Banco Ficsa S.A."}),
                                        new sap.ui.core.Item({key: "094", text:"094 - Banco Finaxis S.A."}),
                                        new sap.ui.core.Item({key: "612", text:"612 - Banco Guanabara S.A."}),
                                        new sap.ui.core.Item({key: "012", text:"012 - Banco INBURSA de Investimentos S.A."}),
                                        new sap.ui.core.Item({key: "604", text:"604 - Banco Industrial do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "653", text:"653 - Banco Indusval S.A."}),
                                        new sap.ui.core.Item({key: "077", text:"077 - Banco Inter S.A."}),
                                        new sap.ui.core.Item({key: "630", text:"630 - Banco Intercap S.A."}),
                                        new sap.ui.core.Item({key: "249", text:"249 - Banco Investcred Unibanco S.A."}),
                                        new sap.ui.core.Item({key: "184", text:"184 - Banco Itaú BBA S.A."}),
                                        new sap.ui.core.Item({key: "029", text:"029 - Banco Itaú Consignado S.A."}),
                                        new sap.ui.core.Item({key: "479", text:"479 - Banco ItauBank S.A"}),
                                        new sap.ui.core.Item({key: "376", text:"376 - Banco J. P. Morgan S.A."}),
                                        new sap.ui.core.Item({key: "074", text:"074 - Banco J. Safra S.A."}),
                                        new sap.ui.core.Item({key: "217", text:"217 - Banco John Deere S.A."}),
                                        new sap.ui.core.Item({key: "076", text:"076 - Banco KDB S.A."}),
                                        new sap.ui.core.Item({key: "757", text:"757 - Banco KEB HANA do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "600", text:"600 - Banco Luso Brasileiro S.A."}),
                                        new sap.ui.core.Item({key: "243", text:"243 - Banco Máxima S.A."}),
                                        new sap.ui.core.Item({key: "720", text:"720 - Banco Maxinvest S.A."}),
                                        new sap.ui.core.Item({key: "389", text:"389 - Banco Mercantil do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "370", text:"370 - Banco Mizuho do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "746", text:"746 - Banco Modal S.A."}),
                                        new sap.ui.core.Item({key: "066", text:"066 - Banco Morgan Stanley S.A."}),
                                        new sap.ui.core.Item({key: "007", text:"007 - Banco Nacional de Desenvolvimento Econômico e Social"}),
                                        new sap.ui.core.Item({key: "735", text:"735 - Banco Neon S.A."}),
                                        new sap.ui.core.Item({key: "169", text:"169 - Banco Olé Bonsucesso Consignado S.A."}),
                                        new sap.ui.core.Item({key: "079", text:"079 - Banco Original do Agronegócio S.A."}),
                                        new sap.ui.core.Item({key: "212", text:"212 - Banco Original S.A."}),
                                        new sap.ui.core.Item({key: "712", text:"712 - Banco Ourinvest S.A."}),
                                        new sap.ui.core.Item({key: "623", text:"623 - Banco PAN S.A."}),
                                        new sap.ui.core.Item({key: "611", text:"611 - Banco Paulista S.A."}),
                                        new sap.ui.core.Item({key: "613", text:"613 - Banco Pecúnia S.A."}),
                                        new sap.ui.core.Item({key: "643", text:"643 - Banco Pine S.A."}),
                                        new sap.ui.core.Item({key: "658", text:"658 - Banco Porto Real de Investimentos S.A."}),
                                        new sap.ui.core.Item({key: "747", text:"747 - Banco Rabobank International Brasil S.A."}),
                                        new sap.ui.core.Item({key: "633", text:"633 - Banco Rendimento S.A."}),
                                        new sap.ui.core.Item({key: "741", text:"741 - Banco Ribeirão Preto S.A."}),
                                        new sap.ui.core.Item({key: "120", text:"120 - Banco Rodobens S.A."}),
                                        new sap.ui.core.Item({key: "422", text:"422 - Banco Safra S.A."}),
                                        new sap.ui.core.Item({key: "033", text:"033 - Banco Santander (Brasil) S.A."}),
                                        new sap.ui.core.Item({key: "743", text:"743 - Banco Semear S.A."}),
                                        new sap.ui.core.Item({key: "754", text:"754 - Banco Sistema S.A."}),
                                        new sap.ui.core.Item({key: "366", text:"366 - Banco Société Générale Brasil S.A."}),
                                        new sap.ui.core.Item({key: "637", text:"637 - Banco Sofisa S.A."}),
                                        new sap.ui.core.Item({key: "464", text:"464 - Banco Sumitomo Mitsui Brasileiro S.A."}),
                                        new sap.ui.core.Item({key: "082", text:"082 - Banco Topázio S.A."}),
                                        new sap.ui.core.Item({key: "634", text:"634 - Banco Triângulo S.A."}),
                                        new sap.ui.core.Item({key: "018", text:"018 - Banco Tricury S.A."}),
                                        new sap.ui.core.Item({key: "655", text:"655 - Banco Votorantim S.A."}),
                                        new sap.ui.core.Item({key: "610", text:"610 - Banco VR S.A."}),
                                        new sap.ui.core.Item({key: "119", text:"119 - Banco Western Union do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "124", text:"124 - Banco Woori Bank do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "021", text:"021 - BANESTES S.A. Banco do Estado do Espírito Santo"}),
                                        new sap.ui.core.Item({key: "719", text:"719 - Banif-Banco Internacional do Funchal (Brasil)S.A."}),
                                        new sap.ui.core.Item({key: "755", text:"755 - Bank of America Merrill Lynch Banco Múltiplo S.A."}),
                                        new sap.ui.core.Item({key: "081", text:"081 - BBN Banco Brasileiro de Negócios S.A."}),
                                        new sap.ui.core.Item({key: "250", text:"250 - BCV - Banco de Crédito e Varejo S.A."}),
                                        new sap.ui.core.Item({key: "144", text:"144 - BEXS Banco de Câmbio S.A."}),
                                        new sap.ui.core.Item({key: "017", text:"017 - BNY Mellon Banco S.A."}),
                                        new sap.ui.core.Item({key: "126", text:"126 - BR Partners Banco de Investimento S.A."}),
                                        new sap.ui.core.Item({key: "125", text:"125 - Brasil Plural S.A. - Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "070", text:"070 - BRB - Banco de Brasília S.A."}),
                                        new sap.ui.core.Item({key: "092", text:"092 - Brickell S.A. Crédito, Financiamento e Investimento"}),
                                        new sap.ui.core.Item({key: "104", text:"104 - Caixa Econômica Federal"}),
                                        new sap.ui.core.Item({key: "114", text:"114 - Central das Cooperativas de Economia e Crédito Mútuo do Estado do Espírito Santo Ltda."}),
                                        new sap.ui.core.Item({key: "320", text:"320 - China Construction Bank (Brasil) Banco Múltiplo S.A."}),
                                        new sap.ui.core.Item({key: "477", text:"477 - Citibank N.A."}),
                                        new sap.ui.core.Item({key: "163", text:"163 - Commerzbank Brasil S.A. - Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "136", text:"136 - CONFEDERACAO NACIONAL DAS COOPERATIVAS CENTRAIS UNICREDS"}),
                                        new sap.ui.core.Item({key: "097", text:"097 - Cooperativa Central de Crédito Noroeste Brasileiro Ltda."}),
                                        new sap.ui.core.Item({key: "085", text:"085 - Cooperativa Central de Crédito Urbano-CECRED"}),
                                        new sap.ui.core.Item({key: "099", text:"099 - Cooperativa Central de Economia e Credito Mutuo das Unicreds"}),
                                        new sap.ui.core.Item({key: "090", text:"090 - Cooperativa Central de Economia e Crédito Mutuo das Unicreds"}),
                                        new sap.ui.core.Item({key: "089", text:"089 - Cooperativa de Crédito Rural da Região de Mogiana"}),
                                        new sap.ui.core.Item({key: "087", text:"087 - Cooperativa Unicred Central Santa Catarina"}),
                                        new sap.ui.core.Item({key: "098", text:"098 - CREDIALIANÇA COOPERATIVA DE CRÉDITO RURAL"}),
                                        new sap.ui.core.Item({key: "487", text:"487 - Deutsche Bank S.A. - Banco Alemão"}),
                                        new sap.ui.core.Item({key: "064", text:"064 - Goldman Sachs do Brasil Banco Múltiplo S.A."}),
                                        new sap.ui.core.Item({key: "135", text:"135 - Gradual Corretora de Câmbio,Títulos e Valores Mobiliários SA"}),
                                        new sap.ui.core.Item({key: "078", text:"078 - Haitong Banco de Investimento do Brasil S.A."}),
                                        new sap.ui.core.Item({key: "062", text:"062 - Hipercard Banco Múltiplo S.A."}),
                                        new sap.ui.core.Item({key: "132", text:"132 - ICBC do Brasil Banco Múltiplo S.A."}),
                                        new sap.ui.core.Item({key: "492", text:"492 - ING Bank N.V."}),
                                        new sap.ui.core.Item({key: "139", text:"139 - Intesa Sanpaolo Brasil S.A. - Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "652", text:"652 - Itaú Unibanco Holding S.A."}),
                                        new sap.ui.core.Item({key: "341", text:"341 - Itaú Unibanco S.A."}),
                                        new sap.ui.core.Item({key: "488", text:"488 - JPMorgan Chase Bank, National Association"}),
                                        new sap.ui.core.Item({key: "399", text:"399 - Kirton Bank S.A. - Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "128", text:"128 - MS Bank S.A. Banco de Câmbio"}),
                                        new sap.ui.core.Item({key: "014", text:"014 - Natixis Brasil S.A. Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "753", text:"753 - Novo Banco Continental S.A. - Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "086", text:"086 - OBOE Crédito Financiamento e Investimento S.A."}),
                                        new sap.ui.core.Item({key: "254", text:"254 - Paraná Banco S.A."}),
                                        new sap.ui.core.Item({key: "751", text:"751 - Scotiabank Brasil S.A. Banco Múltiplo"}),
                                        new sap.ui.core.Item({key: "118", text:"118 - Standard Chartered Bank (Brasil) S/A–Bco Invest."}),
                                        new sap.ui.core.Item({key: "129", text:"129 - UBS Brasil Banco de Investimento S.A."}),
                                        new sap.ui.core.Item({key: "091", text:"091 - Unicred Central do Rio Grande do Sul"}),
                                        new sap.ui.core.Item({key: "084", text:"084 - Uniprime Norte do Paraná - Coop de Economia e Crédito Mútuo dos Médicos, Profissionais das Ciências"}),
                                    ]
                                    //,
                                    //change: function(oEvent){
                                    //  sap.ui.getCore().byId("txtDescBanco").setText(oEvent.oSource.getSelectedItemId());
                                    //  sap.ui.getCore().byId("Bkont").setValue(oEvent.oSource.getSelectedKey());
                                    //}
                                  }),
                                  new sap.m.Text({text:"", id:"txtDescBanco"}),
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
                                  }),
                                  new sap.m.Label({text:"Dígito"}),
                                  new sap.m.Input({
                                    maxLength: 2,
                                    id: "Bankp",
                                    value: "{Bankp}",
                                    width: "20%"
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
                                    new sap.m.Select({
                                      maxLength: 30,
                                      id: "DriveCat",
                                      width: "100%",
                                      selectedKey: "{DriveCat}",
                                      items: [
                                        new sap.ui.core.Item({key: " ",	  text: "Não informado"}),
                                        new sap.ui.core.Item({key: "A",	  text: "Condutor de veículo motorizado de duas ou três rodas"}),
                                        new sap.ui.core.Item({key: "B",	  text: "Condutor de veículo motorizado não abrangido por categoria A"}),
                                        new sap.ui.core.Item({key: "C",	  text: "Condutor de veículo motorizado usado para transp. de carga"}),
                                        new sap.ui.core.Item({key: "D",	  text: "condutor de veículo motorizado usado transp. de passageiros"}),
                                        new sap.ui.core.Item({key: "E",	  text: "Condutor de combinação de veículos"}),
                                        new sap.ui.core.Item({key: "AB",	text: "Combinação de categ. A e B"}),
                                        new sap.ui.core.Item({key: "AC",	text: "Combinação de categ. A e C"}),
                                        new sap.ui.core.Item({key: "AD",	text: "Combinação de categ. A e D"}),
                                        new sap.ui.core.Item({key: "AE",	text: "Combinação de categ. A e E"})
                                      ]
                                      //,
                                      //change: function(oEvent){
                                      //  sap.ui.getCore().byId("DriveCat").setValue(oEvent.oSource.getSelectedKey());
                                      //}
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
                                    new sap.m.Select({
                                      maxLength: 14,
                                      id: "ForeignSit",
                                      width: "100%",
                                      selectedKey: "{ForeignSit}",
                                      items: [
                                        new sap.ui.core.Item({key: "  ",	text: ""}),
                                        new sap.ui.core.Item({key: "01",	text: " Visto permanente"}),
                                        new sap.ui.core.Item({key: "02",	text: "	Visto temporário"}),
                                        new sap.ui.core.Item({key: "03",	text: "	Asilado"}),
                                        new sap.ui.core.Item({key: "04",	text: "	Refugiado"}),
                                        new sap.ui.core.Item({key: "05",	text: "	Solicitante de refúgio"}),
                                        new sap.ui.core.Item({key: "06",	text: "	Residente em país fronteiriço ao Brasil"}),
                                        new sap.ui.core.Item({key: "07",	text: "	Deficiente físico e com mais de 51 anos"}),
                                        new sap.ui.core.Item({key: "08",	text: "	Com residência provisória e anistiado, em situação irregular"}),
                                        new sap.ui.core.Item({key: "09",	text: "	Permanência no Brasil em razão de filhos ou cônj.brasileiro"}),
                                        new sap.ui.core.Item({key: "10",	text: "	Beneficiado pelo acordo entre países do Mercosul"}),
                                        new sap.ui.core.Item({key: "11",	text: "	Depend. agente diplom. e/ou consular países conv. recipr."}),
                                        new sap.ui.core.Item({key: "12",	text: "	Beneficiado Tratado de Amizade, Coop. e Consul. com Portugal"})
                                      ]
                                      //,
                                      //change: function(oEvent){
                                      //  sap.ui.getCore().byId("ForeignSit").setValue(oEvent.oSource.getSelectedKey());
                                      //}
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
                                 maxLength: 80,
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
                              headerText:"Dependentes (Caso tenha algum dependente não listado, entre em contato com RH)",
                              itemPress : [ oController.ItemPress,oController ],
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
