/**
 * Cria um usuario salvando seu dados no localStorage do navegador
 */
function handleAccount ( prDados ) {

    var erro = false;
    
    $.each(prDados,function(index, value){
        
        if (!value.valor || typeof value.valor == 'undefined') {

            alerta('error', 'Erro', 'Por favor, preencha o campo de '+value.label);
            erro = true;
            return false;

        } else {

            localStorage.setItem(index, value.valor);

        }

    });

    if ( !erro ) alerta('success', 'Sucesso', 'Conta criada com sucesso!', () => {

        window.location = 'https://bicos-oficial.github.io/bicos.github.io/empregos.html';

    });
    
}

/**
 * Realiza o login do usuario
 */
function handleLogin ( prDados ) {

    var erro  = false;

    $.each(prDados,function(index, value){

        if (!value.valor || typeof value.valor == 'undefined') {

            alerta('error', 'Erro', 'Por favor, preencha o campo de '+value.label);
            erro = true;
            return false;

        } else {

            if ( localStorage.getItem(index) != value.valor ) erro = true; 

        } 

    });

    if ( !erro ) {
        
        alerta('success', 'Sucesso', 'Logado com sucesso!', () => {

            window.location = 'https://bicos-oficial.github.io/bicos.github.io/empregos.html';
    
        });
        
    } else {

        alerta('error', 'Erro', 'Por favor, verifique o login, ou a senha');

    }

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

    let html = '';

    html+= '<form id="modalCreateAccount">';
        html+= '<div class="form-row">';
            html+= '<div class="form-group col-md-12">';
                html+= '<label for="nome">Nome</label>';
                html+= '<input type="text" class="form-control" id="nome">';
            html+= '</div>';
        html+= '</div>';
        html+= '<div class="form-row">';
            html+= '<div class="form-group col-md-6">';
                html+= '<label for="login">Login</label>';
                html+= '<input type="text" class="form-control" id="login">';
            html+= '</div>';
            html+= '<div class="form-group col-md-6">';
                html+= '<label for="senha">Senha</label>';
                html+= '<input type="password" class="form-control" id="senha">';
            html+= '</div>';
        html+= '</div>';
        html+= '<div class="form-row">';
            html+= '<div class="form-group col-md-12">';
                html+= '<label for="email">Email</label>';
                html+= '<input type="email" class="form-control" id="email">';
            html+= '</div>';
        html+= '</div>';
        html+= '<div class="form-row">';
            html+= '<div class="form-group col-md-12">';
                html+= '<label for="endereco">Endereço</label>'
                html+= '<input type="text" class="form-control" id="endereco">'
            html+= '</div>';
            html+= '<div class="form-group col-md-6">';
                html+= '<label for="cidade">Cidade</label>'
                html+= '<input type="text" class="form-control" id="cidade">'
            html+= '</div>';
            html+= '<div class="form-group col-md-6">';
                html+= '<label for="estado">Estado</label>';
                html+= '<select id="estado" class="form-control">';
                    html+= '<option selected>-- Selecione --</option>';
                    html+= '<option value="AC">Acre</option>';
                    html+= '<option value="AL">Alagoas</option>';
                    html+= '<option value="AP">Amapá</option>';
                    html+= '<option value="AM">Amazonas</option>';
                    html+= '<option value="BA">Bahia</option>';
                    html+= '<option value="CE">Ceará</option>';
                    html+= '<option value="DF">Distrito Federal</option>';
                    html+= '<option value="ES">Espírito Santo</option>';
                    html+= '<option value="GO">Goiás</option>';
                    html+= '<option value="MA">Maranhão</option>';
                    html+= '<option value="MT">Mato Grosso</option>';
                    html+= '<option value="MS">Mato Grosso do Sul</option>';
                    html+= '<option value="MG">Minas Gerais</option>';
                    html+= '<option value="PA">Pará</option>';
                    html+= '<option value="PB">Paraíba</option>';
                    html+= '<option value="PR">Paraná</option>';
                    html+= '<option value="PE">Pernambuco</option>';
                    html+= '<option value="PI">Piauí</option>';
                    html+= '<option value="RJ">Rio de Janeiro</option>';
                    html+= '<option value="RN">Rio Grande do Norte</option>';
                    html+= '<option value="RS">Rio Grande do Sul</option>';
                    html+= '<option value="RO">Rondônia</option>';
                    html+= '<option value="RR">Roraima</option>';
                    html+= '<option value="SC">Santa Catarina</option>';
                    html+= '<option value="SP">São Paulo</option>';
                    html+= '<option value="SE">Sergipe</option>';
                    html+= '<option value="TO">Tocantins</option>';
                    html+= '<option value="EX">Estrangeiro</option>';
                html+= '</select>';
            html+= '</div>';
        html+= '</div>';
        html+= '<div class="form-row">';
            html+= '<div class="form-group col-md-12">';
                html+= '<label for="tipo">Tipo de conta</label>';
                html+= '<select id="tipo" class="form-control">';
                    html+= '<option selected>-- Selecione --</option>';
                    html+= '<option>Contratante</option>';
                html+= '</select>';
            html+= '</div>';
        html+= '</div>';
    html+= '</form>';

    alertHtml('Entrar', html, 'Entrar', () => {
            
        var formData = {
            nome        : {
                label : 'Nome',
                valor : document.getElementById('nome').value
            },
            login       : {
                label : 'Login',
                valor : document.getElementById('login').value
            },
            senha       : {
                label : 'Senha',
                valor : document.getElementById('senha').value
            },
            email       : {
                label : 'Email',
                valor : document.getElementById('email').value
            },
            endereco    : {
                label : 'Endereço',
                valor : document.getElementById('endereco').value
            },
            cidade      : {
                label : 'Cidade',
                valor : document.getElementById('cidade').value
            },
            estado      : {
                label : 'Estado',
                valor : document.getElementById('estado').value
            },
            tipo        : {
                label : 'Tipo de conta',
                valor : document.getElementById('tipo').value
            },
        };

        handleAccount(formData);

    });

}

/**
 * Apresenta o modal de login
 */

function loginModal () {

    let html = '';

    html+= "<br>";
    html+= '<div class="form-group">';
        html+= '<input type="text" class="form-control" id="login" placeholder="Login">';
    html+= "</div>";
    html+= '<div class="form-group">';
        html+= '<input type="password" class="form-control" id="password" placeholder="SEnha">';
    html+= "</div>";

    alertHtml('Entrar', html, 'Entrar', () => {
        
        var formData = {
            login       : {
                label : 'Login', 
                valor : document.getElementById('login').value
                
            },
            password    : {
                label : 'Senha', 
                valor : document.getElementById('password').value
            }
        };
        
        handleLogin(formData);

        Swal.close();

    });

}