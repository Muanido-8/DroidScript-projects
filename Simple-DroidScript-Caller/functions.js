
//funcao chamar
chamar = function( num ) {
    if( typeof num == "number" ) {
        num = ''+num;
    }
    var number = num.replace( /#/gi, encodeURIComponent("#") );
    app.Call( number );
}

//funcao digi txt 
function digit(txtd) {
  app.Vibrate( "0,70,0,5" )
  input.SetText( String(input.GetText()) + String(txtd) )
}
//funcao whiteBtn
function whiteBtn(txt) {
  let $$ = app.CreateButton( txt, 0.3, -1)
  $$.SetTextSize(33)
  $$.SetBackColor("white")
  $$.SetStyle( "white", "white", "0", "white", 0.3,0 )
  let $t = txt
  $$.SetTextColor(MUI.colors.blue.blue)
  return $$;
}