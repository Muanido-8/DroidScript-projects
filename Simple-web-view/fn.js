
function menuApb(a) {
    app.OpenDrawer( "left" );
}

function inflater() {
    var list = ["Artigos:home", "Sobre este app:android", "Fale Comigo:account_box", "Avançar:arrow_forward"];
    lst = MUI.CreateMenuWithIcon(list, null, null, "Top, Right");
    lst.Show();
    lst.SetOnSelect(function(a,b) {
        if (b == 0) {
            web.LoadUrl( "http://"+url );
        } else if (b == 1) {
            //Abrir Modal sobre este app
            md = MUI.CreateModal( app.GetAppName(), "criado por Evaristo Muanido\n\n", "fechar");
            md.Show();
        } else if (b == 3) {
            web.Forward();
        } else {
            //Contactr desenvolvidor no whats
            app.OpenUrl( "http://api.whatsapp.com/send?phone=+258847601581" );
        }
    });
}

function search() {
    srMd = MUI.CreateModal( "Procurar", "", "Procurar", "Cancelar" );
    srLay = srMd.GetLayout();
    srIn = MUI.CreateTextEditSearch( 0.9, "Left", "O que está procurando...", siteColor );
    srIn.SetMargins( 0, 0.025, 0, 0.025);
    srLay.AddChild( srIn );
    srMd.SetOnTouch( function(a,b) {
        if (a) {
            var textToSearch = srIn.GetText();
            web.LoadUrl( "http://"+url+"/search?q="+textToSearch );
        }
    });
    
    srMd.Show();
}


function cntrlApb(a,b) {
    if (b == 1) {
        inflater();
    } else if (b == 0) {
        search();
    }
}


function sair() {
        conf = MUI.CreateModal( "Sair", "Deseja realmente sair de "+ app.GetAppName() + " ?", "Sim", "Não");
        conf.SetOnTouch( function(a,b) {
            if (a) {
                app.Exit( true );
            }
        } );
        conf.Show();
}
function back() {
    if (web.CanGoBack()) { web.Back(); }
    else {
        sair();
    }
}