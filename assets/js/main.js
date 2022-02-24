function getDateOfFriday13th(jahr) {

    let d = new Date(jahr, 0)
    let anzahlTage = 0;

    let div = document.createElement('div');
    document.body.appendChild(div);

    let h1 = document.createElement('h1')
    document.body.childNodes[2].appendChild(h1);

    let ul = document.createElement('ul');
    ul.style.textDecoration = "none";
    document.body.childNodes[2].appendChild(ul);

    for (let i = 0; i < 365; i++) {

        d.setDate(d.getDate() + 1)

        if (d.getDay() == 5 && d.getDate() == 13) {
            let datum = document.createElement('li')

            datum.textContent = d.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
            document.body.childNodes[2].lastChild.appendChild(datum);

            anzahlTage++
        }
    }

    h1.textContent = `Das Jahr ${jahr} hat ${anzahlTage} Unglückstage.`
}

getDateOfFriday13th(2020)
getDateOfFriday13th(2016)
getDateOfFriday13th(2015)
