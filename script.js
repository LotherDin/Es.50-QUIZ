
const domande = [
    {
        testo: "Quanto fa 3+3?",
        rispostaCorretta: "6"

    },
    {
        testo: "Palermo e' capoluogo di quale regione?",
        rispostaCorretta: "Sicilia"

    },
    {
        testo: "Quale squadra ha vinto lo scudetto in Italia nell'anno 2022/2023?",
        rispostaCorretta: "Napoli"

    },
];
function main() {
    const risposteUtente = [];
    let corrette = 0;
    let sbagliate = 0;
    const formLogin = document.getElementById('login');
    const formUno = document.getElementById('rispostaUno');
    const formDue = document.getElementById('rispostaDue');
    const formTre = document.getElementById('rispostaTre');
    const totaleDiv = document.getElementById('totale');

    const risposteCorrette = ['6', 'Sicilia', 'Napoli']

    formLogin?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Nascondi il form di login
        formLogin.style.display = 'none';
        // Mostra il form successivo
        formUno.style.display = 'flex';
    });


    formUno?.addEventListener('submit', (e) => {
        e.preventDefault();
        risposteUtente.push(e.target[0].value);
        formUno.style.display = 'none';
        formDue.style.display = 'flex';


    });
    formDue?.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        risposteUtente.push(e.target[0].value);
        formDue.style.display = 'none';
        formTre.style.display = 'flex';
    });
    formTre?.addEventListener('submit', (e) => {
        e.preventDefault();
        var radioSelezionato = document.querySelector('input[name="calcio"]:checked');
        risposteUtente.push(radioSelezionato.value);



        for (let i = 0; i < risposteCorrette.length; i++) {
            if (risposteUtente[i] === risposteCorrette[i]) {
                corrette++;
            } else {
                sbagliate++;
            }

        }
        formTre.style.display = 'none';
        totaleDiv.style.display = 'flex';
        totaleDiv.innerHTML = `
            <span>Corrette: ${corrette}</span><br>
            <span>Sbagliate: ${sbagliate}</span>
        `;

    });


}
main();

