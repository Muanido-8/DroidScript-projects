
function OnBack() {
  app.Exit( false );
}

function go() {
  //removing splash layout
  app.RemoveLayout( lay )
  //creating fhe main layout
  lay = app.CreateLayout( "Linear", "Bottom,Vertical,FillXY" )
  lay.SetSize( 1,1 )
  lay.SetBackColor( "white" )
  //Pagina
  imgLogo = app.CreateImage( "Img/logo.png", 0.5 )
  lay.AddChild( imgLogo )
  //Texto
  txt = MUI.CreateTextParagraph( "<b>Muanidos Caller</b>, versão Beta <br>V0.1<br><br>Criado por Evaristo Muanido<br>", 1, -1, "html,fontawesome", MUI.colors.blue.blue )
  txt.SetMargins(0,0,0,0.05)
  lay.AddChild( txt )
  //text to output the code number
  layH = app.CreateLayout( "Linear", "Horizontal,Center,VCenter" )
  layH.SetSize( 1,-1 )
  input = MUI.CreateTextEditFilled(1, "ReadOnly,NoKeyboard,Number", "** code", "", MUI.colors.blue.blue )
  input.Focus()
  input.SetSize(0.75)
  icon = MUI.CreateButtonElegant( "[fa-arrow-left]", 0.1, -1, MUI.colors.blue.blue )
  icon.SetBackColor("white")
  icon.SetOnTouch( function() {
    input.SetText( input.GetText().substring(0, input.GetText().length-1) )
    app.Vibrate( "0,70,0,5" )
  } );
  icon.SetOnLongTouch( function() {
    input.SetText( "" )
    app.Vibrate( "0,70,0,5" )
  } );
  layH.AddChild( input )
  layH.AddChild( icon )
  
  lay.AddChild( layH )
  //sepator
  var sep = app.CreateImage( null, 1,0.001,"fix", 2,2 )
  sep.SetSize( -1, 1, "px" )
  sep.SetColor( "#cccccc" )
  lay.AddChild( sep )
  //lay btns 1234
  layBtns123 = app.CreateLayout( "Linear", "Horizontal" )
  layBtns123.SetSize(1,0.1);
  btn1 = whiteBtn("1")
  layBtns123.AddChild( btn1 )
  btn2 = whiteBtn("2")
  layBtns123.AddChild( btn2 )
  btn3 = whiteBtn("3")
  layBtns123.AddChild( btn3 )
  lay.AddChild( layBtns123 )
  //lay btns 456
  layBtns456 = app.CreateLayout( "Linear", "Horizontal" )
  layBtns456.SetSize( 1, 0.1 )
  btn4 = whiteBtn("4")
  layBtns456.AddChild( btn4 )
  btn5 = whiteBtn("5")
  layBtns456.AddChild( btn5 )
  btn6 = whiteBtn("6")
  layBtns456.AddChild( btn6 )
  lay.AddChild( layBtns456 )
  //lay btns 789
  layBtns789 = app.CreateLayout( "Linear", "Horizontal" )
  layBtns789.SetSize( 1, 0.1 )
  btn7 = whiteBtn("7")
  layBtns789.AddChild( btn7 )
  btn8 = whiteBtn("8")
  layBtns789.AddChild( btn8 )
  btn9 = whiteBtn("9")
  layBtns789.AddChild( btn9 )
  lay.AddChild( layBtns789 )
  //lay btns $
  layBtns$ = app.CreateLayout( "Linear", "Horizontal" )
  layBtns$.SetSize( 1, 0.1 )
  btn$ = whiteBtn("*")
  layBtns$.AddChild( btn$ )
  btn0 = whiteBtn("0")
  btn0.SetOnLongTouch( function() { digit("+") } )
  layBtns$.AddChild( btn0 )
  btn$$ = whiteBtn("#")
  layBtns$.AddChild( btn$$ )
  lay.AddChild( layBtns$ )
  //Button FAB Elegant Tel
  btnCall = MUI.CreateFABElegant( "phone", MUI.colors.blue.blue )
  btnCall.SetOnTouch( function() {
   app.ShowPopup( "Chamando "+ input.GetText(), "bottom" );
   app.Vibrate( "0,100,30,100,50,300" );
   chamar( input.GetText() ) 
 } )
  //Cliques
  btn1.SetOnTouch( function() { digit(1) } )
  btn2.SetOnTouch( function() { digit(2) } )  
  btn3.SetOnTouch( function() { digit(3) } )
  btn4.SetOnTouch( function() { digit(4) } )
  btn5.SetOnTouch( function() { digit(5) } )  
  btn6.SetOnTouch( function() { digit(6) } )
  btn7.SetOnTouch( function() { digit(7) } )
  btn8.SetOnTouch( function() { digit(8) } )  
  btn9.SetOnTouch( function() { digit(9) } )
  btn$.SetOnTouch( function() { digit("*") } )
  btn0.SetOnTouch( function() { digit(0) } )  
  btn$$.SetOnTouch( function() { digit("#") } )
  lay.AddChild( btnCall )
  app.AddLayout( lay )
}