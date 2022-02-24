
drawerWidth = 0.75;
  drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" )
  drawerScroll.SetBackColor( "White" )
	layDrawer = app.CreateLayout( "Linear", "Left" );
	layDrawer.SetBackColor( "white" );
	layDrawer.SetSize( drawerWidth, 1 );
	app.AddDrawer( layDrawer );
	drawerScroll.AddChild( layDrawer )
	
	//Create layout for top of drawer.
	layDrawerTop = app.CreateLayout( "Absolute" )
	layDrawerTop.SetBackground( "/Sys/Img/GreenBack.jpg" )
	layDrawerTop.SetSize( drawerWidth, 0.23 )
	layDrawer.AddChild( layDrawerTop )
	
	//Add an icon to top layout.
	var img = app.CreateImage( "Img/logo_mini.png", 0.25 )
	img.SetPosition( drawerWidth*0.02, 0.02)
	layDrawerTop.AddChild( img )
	
	//Add user name to top layout.
	var txtUser = app.CreateText( app.GetAppName(),-1,-1,"Bold")
	txtUser.SetPosition( drawerWidth*0.07, 0.155 )
	txtUser.SetTextColor( "White" )
	txtUser.SetTextSize( 13.7, "dip" )
	
	//Add user email to top layout.
	txtEmail = app.CreateText( email)
	txtEmail.SetPosition( drawerWidth*0.07, 0.185 )
	txtEmail.SetTextColor( "#bbffffff" )
	txtEmail.SetTextSize( 14, "dip" )
	layDrawerTop.AddChild( txtEmail )
	
	//Create menu layout.
	var layMenu = app.CreateLayout( "Linear", "Left" )
	layDrawer.AddChild( layMenu )
	
    //Add a list to menu layout (with the menu style option).
    var listItems = "Início::[fa-home],Contacto::[fa-envelope],Política de privacidade::[fa-globe],Termos de uso::[fa-globe],Sobre Nós::[fa-users],Whatsapp::[fa-whatsapp],Sair::[fa-close]";
    lstMenu1 = app.CreateList( listItems, drawerWidth, -1, "Menu" )
    lstMenu1.SetColumnWidths( -1, 0.35, -1 )
    lstMenu1.SetOnTouch( function(a,b,c,d) {
        switch(d) {
            case 0:
                web.LoadUrl( "http://"+ url );
                break;
            case 1:
                //Intent de email
                var extras = [ 
                    {name:"android.intent.extra.EMAIL", type:"list", value: email},
                ];
                extras = JSON.stringify( extras );
                app.SendIntent( "com.google.android.gm", "com.google.android.gm.ComposeActivityGmailExternal", "android.intent.action.VIEW", null, "suporte@delicattopet.com.br", "message/rfc822", extras);
                break;
            case 2:
                web.LoadUrl( url+"/policies/privacy-policy" );
                break;
            case 3:
                web.LoadUrl( "http://"+url+"/policies/terms-policy" );
                break;
            case 4:
                web.LoadUrl( "http://"+url+"/about" );
                break;
            case 5:
                app.OpenUrl( "https://api.whatsapp.com/send?phone=258847601581" );
                break;
            case 6:
                sair();
                break;
        }
        
        app.CloseDrawer( "left" );
    });
    layMenu.AddChild( lstMenu1 )