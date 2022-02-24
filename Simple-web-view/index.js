var web;
var url = "recebe.html";
var urls = [url, "facebook.com"];
function index() {
  main.RemoveChild( actLay );
  actLay = app.CreateLayout( "Linear", "Vertical, Top, Center" );
  actLay.SetSize( 1, 1 );
  //Web Vuew
  web = app.CreateWebView( 1, 1 - h-0.01, "noScrollBar");
  actLay.AddChild( web );
  web.SetOnError( function(e) {
    app.ShowPopup( e, "bottom, short" )
  } )
  //Loader
  loader = app.CreateImage( null, 1, 0.01 );
  loader.SetBackColor( siteColor );
  actLay.AddChild( loader )
  web.SetOnProgress( function(p) {
    //verificar url para jogar fora
    var jogarFora = false;
    ull = web.GetUrl();
    if (ull.indexOf( urls[0] ) < 0 && ull.indexOf( urls[1]) < 0 && ull.indexOf( urls[2] ) < 0 ) {
        app.ShowPopup( "Abrindo "+ ull );
        web.Back();
        app.OpenUrl( ull );
    }
    loader.SetSize( p/100, 0.01 );
  } )
  web.LoadUrl( url);
  main.AddChild( actLay );
}

function OnBack() {
    back();
}