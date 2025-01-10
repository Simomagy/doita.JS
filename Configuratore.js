let defaults = {
    colore:"Inserisci dati",
    nome:"Inserisci dati",
    cognome:"Inserisci dati",
    soldi:0,
    giorno:0,
    mese:0,
    anno:0,
    sposato:false,
    figli:false,
    email:"Inserisci email",
    password:"Almeno 5 caratteri",
    descrizione:"Inserisci la tua descrizione"
},formRows;

function initDefaults() {
    Object.keys(defaults).forEach(key => {window[key] = defaults[key]})

    $('#sposato').prop('checked',defaults.sposato)
    $('#figli').prop('checked',defaults.figli)
};

$(document).ready(
    function (){
        initDefaults()
        let selezione = $('.btn.active').attr('id')
        render(selezione)
        let formContainer = $('#formContainer')
        formContainer.html(formRows)
        // spazio animazioni

        // ------------------------------
        $('.btn').on('click',function(event){
            event.preventDefault()
            $('.btn.active').removeClass('active')
            $(this).addClass('active')
        })
    }
);

