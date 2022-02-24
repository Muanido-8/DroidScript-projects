
cfg.MUI,cfg.Light
//
lay = app.CreateLayout( "Linear", "Vertical,Center,VCenter" )
app.Script("functions.js")
app.Script("splash.js")
app.Script("index.js")
app.ChooseContact( "", function(a) { alert(a) } )

app.SetOrientation( "portrait" )
app.EnableBackKey( false )

splash()