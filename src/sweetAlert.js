/**
 * Alerta com HTML personalizado
 */
function alertHtml ( prTitulo, prHtml, prBotaoConfirma, prFunction ) {

    Swal.fire({
        title: prTitulo,
        html: prHtml,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: prBotaoConfirma,
        cancelButtonText: 'Cancelar',
    }).then((result) => {

        if (result.isConfirmed) {
            
            prFunction();

        } else if (result.isDenied) {

            Swal.close();
            
        }
        
    }); 

}

/**
 * Alerta
 */
function alerta (prTipo, prTitulo, prTexto) {
    
    Swal.fire({
        icon: prTipo,
        title: prTitulo,
        text: prTexto
      });

}