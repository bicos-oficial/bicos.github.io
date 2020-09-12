/**
 * Cria um usuario salvando seu dados no localStorage do navegador
 */
function handleAccount () {
            
}

/**
 * Realiza o login do usuario
 */
function handleLogin ( prLogin, prSenha ) {

    

}

/**
 * Pega os dados do usuário
 */
function handleUser () {

}

/**
 * Realiza logout da aplicação
 */
function handleLogOut () {
    
}

/**
 * Apresenta o modal de cadastro
 */

function createAccountModal () {

    var html = '';

    html+= '<div class="form-row">';
        html+= '<div class="form-group col-md-6">';
            html+= '<label for="nome">Nome</label>';
            html+= '<input type="text" class="form-control" id="nome">';
        html+= '</div>';
        html+= '<div class="form-group col-md-6">';
            html+= '<label for="inputEmail4">Email</label>';
            html+= '<input type="email" class="form-control" id="email">';
        html+= '</div>';
    html+= '</div>';
    html+= '<div class="form-row">';
        html+= '<div class="form-group col-md-4">';
            html+= '<label for="endereco">Endereço</label>'
            html+= '<input type="text" class="form-control" id="endereco">'
        html+= '</div>';
        html+= '<div class="form-group col-md-4">';
            html+= '<label for="endereco">Cidade</label>'
            html+= '<input type="text" class="form-control" id="endereco">'
        html+= '</div>';
        html+= '<div class="form-group col-md-4">';
            html+= '<label for="estado">Estado</label>'
            html+= '<input type="text" class="form-control" id="estado">'
        html+= '</div>';
    html+= '</div>';
    html+= '<div class="form-row">';
        html+= '<div class="form-group col-md-12">';
            html+= '<label for="tipo">Tipo de conta</label>';
            html+= '<select id="tipo" class="form-control">';
                html+= '<option selected>-- Selecione --</option>';
                html+= '<option>Prestador</option>';
                html+= '<option>Contratante</option>';
            html+= '</select>';
        html+= '</div>';
    html+= '</div>';

    Swal.fire({
        title: 'Criar conta',
        html: html,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Entrar',
        cancelButtonText:
          'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            var login       = document.getElementById('login'),
                password    = document.getElementById('password');
            handleLogin(login, password);
            Swal.close();
        } else if (result.isDenied) {
            Swal.close();
        }
    });

}

/**
 * Apresenta o modal de login
 */

function loginModal () {

    var html = '';

    html+= "<br>";
    html+= '<div class="form-group">';
        html+= '<input type="text" class="form-control" id="login" placeholder="Login">';
    html+= "</div>";
    html+= '<div class="form-group">';
        html+= '<input type="password" class="form-control" id="password" placeholder="Login">';
    html+= "</div>";

    Swal.fire({
        title: 'Entrar',
        html: html,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Entrar',
        cancelButtonText:
          'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            var login       = document.getElementById('login'),
                password    = document.getElementById('password');
            handleLogin(login, password);
            Swal.close();
        } else if (result.isDenied) {
            Swal.close();
        }
    });

}