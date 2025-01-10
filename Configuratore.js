let defaults = {
    colore: "Inserisci dati",
    nome: "Inserisci dati",
    cognome: "Inserisci dati",
    soldi: 0,
    giorno: 0,
    mese: 0,
    anno: 0,
    sposato: false,
    figli: false,
    email: "Inserisci email",
    password: "Almeno 5 caratteri",
    descrizione: "Inserisci la tua descrizione"
}, formRows;

function initDefaults() {
    Object.keys(defaults).forEach(key => {
        window[key] = defaults[key]
    })

    $('#sposato').prop('checked', defaults.sposato)
    $('#figli').prop('checked', defaults.figli)
}

function render(selezione) {
    switch (selezione) {
        case 'Form':
            formRows = [
                createFormRow('Colore preferito', 'colore', 'colore', 'Inserisci il tuo colore preferito', 'Inserisci il tuo colore preferito'),
                createFormRow('Nome', 'nome', 'nome', 'Inserisci il tuo nome', 'Inserisci il tuo nome'),
                createFormRow('Cognome', 'cognome', 'cognome', 'Inserisci il tuo cognome', 'Inserisci il tuo cognome'),
                createNumberFormRow('soldi', 'Soldi', 'soldi', 'Inserisci i tuoi soldi', 'Inserisci i tuoi soldi'),
                createNumberFormRow('giorno', 'Giorno', 'giorno', 'Inserisci il giorno', 'Inserisci il giorno'),
                createNumberFormRow('mese', 'Mese', 'mese', 'Inserisci il mese', 'Inserisci il mese'),
                createNumberFormRow('anno', 'Anno', 'anno', 'Inserisci l\'anno', 'Inserisci l\'anno'),
                createCheckboxRow('sposato', 'sposato', 'Sposato', 'Seleziona se sei sposato', 'Seleziona se sei sposato'),
                createCheckboxRow('figli', 'figli', 'Figli', 'Seleziona se hai figli', 'Seleziona se hai figli'),
            ].join('')
            break;
        case 'Login':
            formRows = [
                createFormRow('Email', 'email', 'email', 'Inserisci la tua email', 'Inserisci la tua email'),
                createFormRow('Password', 'password', 'password', 'Inserisci la tua password', 'Inserisci la tua password'),
                createTextAreaRow('Descrizione', 'descrizione', 'descrizione', 'Inserisci la tua descrizione', 'Inserisci la tua descrizione')
            ].join('')
            break;
    }
}

function createFormRow(labelText, inputId, inputName, placeholderText, noteText) {
    return `
        <div class=form-row>
            <i class="ti ti-chevrons-right p-3"></i>
            <label for="${inputId}">${labelText}</label>
            <i class="ti ti-chevron-right p-3"></i>
            <div class="input-group">
                <input type="text" class="hover" id="${inputId}" name="${inputName}" placeholder="${placeholderText}">
                <div class="input-group-append">
                    <i class="ti ti-question-mark"></i>
                    <p class="note">${noteText}</p>
                </div>
            </div>
        </div>        
    `
}

function createNumberFormRow(inputId, labelText, inputName, placeholderText, noteText) {
    return `
		<div class="form-row">
			<i class="ti ti-chevrons-right p-3"></i>
			<label for="${inputId}">${labelText}</label>
			<i class="ti ti-chevron-right p-3"></i>
			<div class="input-group">
				<input class="hover" type="number" id="${inputId}" name="${inputName}" autocomplete="off" value="0" min="0" placeholder="${placeholderText}" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/>
				<div class="input-group-append">
					<i class="ti ti-question-mark"></i>
					<p class="note">${noteText}</p>
				</div>
			</div>
		</div>
		<div class="divider"></div>
	`;
}

function createCheckboxRow(checkboxId, checkboxName, labelText, noteText) {
    return `
        <div class="form-row">
            <i class="ti ti-chevrons-right p-3"></i>
            <label for="${checkboxId}">${labelText}</label>
            <i class="ti ti-chevron-right p-3"></i>
            <div class="input-group">
                <div class="d-flex flex-row align-center justify-start">
                    <p class="toggle-note">No</p>
                    <label class="switch">
                        <input type="checkbox" id="${checkboxId}" name="${checkboxName}"/>
                        <div class="slider round"></div>
                    </label>
                    <p class="toggle-note">Yes</p>
                </div>
                <div class="input-group-append">
                    <i class="ti ti-question-mark"></i>
                    <p class="note">${noteText}</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        `
}

function createNumberInputRow(labelText, inputId, inputName, placeholderText, noteText) {
    return /*html*/ `
		<div class="form-row">
			<i class="ti ti-chevrons-right p-3"></i>
			<label for="${inputId}">${labelText}</label>
			<i class="ti ti-chevron-right p-3"></i>
			<div class="input-group">
				<input class="hover" type="number" id="${inputId}" name="${inputName}" autocomplete="off" value="0" min="0" placeholder="${placeholderText}" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/>
				<div class="input-group-append">
					<i class="ti ti-question-mark"></i>
					<p class="note">${noteText}</p>
				</div>
			</div>
		</div>
		<div class="divider"></div>
	`;
}

function createTextAreaRow(labelText, inputId, inputName, placeholderText, noteText) {
    return /*html*/ `
		<div class="form-row">
			<i class="ti ti-chevrons-right p-3"></i>
			<label for="${inputId}">${labelText}</label>
			<i class="ti ti-chevron-right p-3"></i>
			<div class="input-group">
				<textarea class="hover" id="${inputId}" name="${inputName}" placeholder="${placeholderText}" autocomplete="off"></textarea>
				<div class="input-group-append">
					<i class="ti ti-question-mark"></i>
					<p class="note">${noteText}</p>
				</div>
			</div>
		</div>
		<div class="divider"></div>
	`;
}

let showingCode = false;

function showCode() {
    let button = $('#showCode');

    button.on('click', function () {
        if (!showingCode) {
            gsap.to(
                '#contenitoreCodice',
                {
                    x: -1500,
                    duration: 0.5,
                    ease: "elastic.inOut(1,0.3)"
                }
            )
            showingCode = true;
            $('#showCode').html(`        
                    <i class="ti ti-code"></i>
                    <p>Nascondi Codice</p>
                `
            )
        } else {
            gsap.to(
                '#contenitoreCodice',
                {
                    x: 1500,
                    duration: 0.5,
                    ease: "elastic.inOut(1,0.3)"
                }
            )
            showingCode = false;
            $('#showCode').html(`        
                    <i class="ti ti-code"></i>
                    <p>Mostra Codice</p>
                `
            )
        }
    })
}

$(document).ready(
    function () {
        initDefaults()
        let selezione = $('.nav-item.active').attr('id');
        render(selezione);
        let formContainer = $('#formContainer');
        formContainer.html(formRows);
        // spazio animazioni
        gsap.fromTo(
            '.form-row',
            {
                opacity: 0,
                x: -500
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "elastic.inOut(1,0.3)"
            }
        );
        // ------------------------------
        $('.nav-item').on('click', function (event) {
            event.preventDefault();

            $('.nav-item.active').removeClass('active');
            window.alert('negro');
            $(this).addClass('active');

            initDefaults();
            selezione = $(this).attr('id');
            render(selezione);
            formContainer.html(formRows);

            // spazio animazione
            gsap.fromTo(
                '.form-row',
                {
                    opacity: 0,
                    x: -500
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "elastic.inOut(1,0.3)"
                }
            )
            // ------------------------------
        })
        showCode();
        $('#contenitoreCodice').css('transform', 'translateX(1500px)');
    }
);

