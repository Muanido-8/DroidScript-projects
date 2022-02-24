
function splash() {
  lay = app.CreateLayout( "Linear", "Vertical,Center,VCenter" );
  lay.SetBackColor( "#fff" );
  lay.SetSize( 1,1 );
  
  //Imagem logo
  img = app.CreateImage( "Img/logo.png", 0.9);
  img.SetMargins( 0,0,0,0.02 );
  lay.AddChild( img );
  
  //Text app name
  appName = MUI.CreateTextH3( "Mobile App", null, null, "", siteColor, "bold" )
  lay.AddChild( appName );
  
  //Text made by Evaristo Muanido
  drkn2 = MUI.colors.blue.darken1;
  mbem = MUI.CreateTextParagraph( "Criado por Evaristo Muanido", null, null, "", drkn2 );
  mbem.SetMargins(0, 0.2, 0,0);
  lay.AddChild( mbem );
  
  app.AddLayout( lay );
  app.Wait( 0 );
  go();
  
}

function go() {
  app.DestroyLayout( lay );
  lay = app.CreateLayout( "Linear", "Vertical, Left, Top, FillXY" );
  apb = MUI.CreateAppBar(app.GetAppName(), "menu", "search,more_vert");
  apb.SetBackColor( siteColor );
  apb.SetOnMenuTouch( menuApb );
  apb.SetOnControlTouch( cntrlApb );
  lay.AddChild( apb );
  h = apb.GetHeight();
  main = app.CreateLayout( "Linear", "Vertical,Left,To" );
  main.SetSize( 1, 1-h )
  
  lay.AddChild( main )
  actLay = app.CreateLayout( "Linear", "Horizontal" );
  main.AddChild( actLay );
  app.AddLayout( lay )
  index();
}