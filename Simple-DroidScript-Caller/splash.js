var input, lay;
function splash() {
  lay = app.CreateLayout( "Linear", "Vertical,Center,VCenter" );
  lay.SetBackColor( "#fff" );
  lay.SetSize( 1,1 );
  
  //Imagem logo
  img = app.CreateImage( "Img/logo.png", 0.9);
  img.SetMargins( 0,0,0,0.02 );
  lay.AddChild( img );
  
  //Text app name
  appName = MUI.CreateTextH3( "Muanidos Caller" )
  lay.AddChild( appName );
  
  //Text made by Evaristo Muanido
  drkn2 = MUI.colors.blue.darken1;
  mbem = MUI.CreateTextParagraph( "Criado por Evaristo Muanido", null, null, "", drkn2 );
  mbem.SetMargins(0, 0.2, 0,0);
  lay.AddChild( mbem );
  
  app.AddLayout( lay );
  app.Wait( 3 );
  go();
  
}