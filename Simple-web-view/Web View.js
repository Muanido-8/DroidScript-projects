
cfg.MUI,cfg.Light;


/* Global App Configs */
app.SetOrientation( "portrait" );
app.PreventScreenLock( true );
app.EnableBackKey( false );

//Global vars

siteColor = MUI.colors.blue.blue
email = "evaristo@muanidos.com";
app.InitializeUIKit( siteColor )
var lay, main, actLay,h;

//Called when application is started.
function OnStart()
{
	lay = app.CreateLayout( "Linear", "Vertical,Center,VCenter,FillXY" );
	app.SetBackColor( "white" );
	app.SetOrientation( "portrait" );
	app.PreventScreenLock( true );
	
	//splash screen
	app.Script( "splash.js" );
	app.Script( "index.js" );
	app.Script( "drawer.js" );
	app.Script( "fn.js" );
	
	//calling the splash screen
	splash();
}