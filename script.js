function wykresTeam(data) {
    let teams = [] //array z nazwami teamow
    let ludzie = []; //array z iloscia ludzi

    for (let obj of data) { // petle gdzie wczytujemy nazwy teamow
        var keys = Object.keys(obj); // lista wszystkich kluczy, zeby znac ich ilosc w obiekcie
        for (let i=0; i < keys.length; i++) { // iterujemy po kazdym indeksie dla kluczow
            if (keys[i] == 'team_name'){ // sprawdzamy czy klucz z danym indeksem to 'team_name'
                teams.push(obj[keys[i]]); // dodajemy na koniec listy teamow nazwe teamu, czyli wartosc klucza
            }
        }
    }
    let uniqueTeams = [...new Set(teams)]; // tworzymy zbior z teamow 
    teams = Array.from(uniqueTeams); // z powrotem zaminiamy zbior na liste
    // console.log(teams);

    for (let i=0; i<teams.length; i++) {  // petla gdzie bedziemy dodawac tyle zer ile jest teamow, kazde zero to bedzie licznik
        ludzie.push(0) // dodajemy 0 na koniec listy ludzie
    }

    for (let obj of data) { // petla gdzie bedziemy zliczac ilosc czlonkow dla danego teamu
        for (let key of Object.keys(obj)) { // ale przelatujemy po kazdym kluczu obiektu, 
                                            // zeby potem sprawdzic czy dla danego klucza wartosc bedzie nazwa teamu
            for (let j=0; j<teams.length; j++) // petla do iterowania po teamach
            {
                if (obj[key] == teams[j]){ // jesli dla wartosci klucza faktycznie jest nazwa teamu o indeksie j 
                                           // to do listy ludzi dodajemy 1 dla tego samego indeksu j
                    ludzie[j] += 1
                }
            }
        }
    }  
    // console.log(ludzie);
    return [teams, ludzie]
}



// ========= SWITCHING THEMES ==========


// =====================================


// Fetch json data from api link
fetch("https://my.api.mockaroo.com/tpr.json?key=1786d670")
// fetch("backup-data.json")// Replace this with your api link
    .then(response => response.json()) // Convert the response to json
    .then(data => {
        data_2 = data
        // Create a table element
        let table = document.createElement("table");
        // table.className = 'table text-nowrap w-auto .th-sm';
        table.className = 'table text-nowrap';
        table.id = "my-table";
        // table.style.border = 0;

        let thead = document.createElement("thead");
        let header = document.createElement("tr");
        let cell_width = Object.keys(data[0]).length;

        var keys = ["Rank", "Full Name", "Nationality", "Games Played", "Win Percentage", "Last Login", "Total Points", "Team Name"];

        for (let i=0; i<keys.length; i++)
        {
            let th = document.createElement("th");
            if (i == 0)
            {
                th.className = "left-side";
            }
            else if (i == keys.length - 1)
            {
                th.className = "right-side";  
            }
            th.textContent = keys[i];
            // th.style.width = 100/cell_width + "%";
            th.className += ' w-'+100/cell_width;

            header.appendChild(th);
        }
        thead.appendChild(header);
        table.appendChild(thead);

        let div = document.createElement("div");
        div.setAttribute("style", "margin: 17px 0px 17px 0px;")
        table.appendChild(div);
        

        let tbody = document.createElement("tbody");

        for (let obj of data) {
            let row = document.createElement("tr");
            let div = document.createElement("div");
            row.setAttribute("class", "data-row");
            div.setAttribute("style", "margin-bottom: 17px;");
           
            var keys = Object.keys(obj)

            for (let i=0; i<keys.length; i++)
            {
                let td = document.createElement("td");
                if (i == 0)
                {
                    td.className = "left-side";

                    // if (obj[keys[i]] == 1)
                    // {
                    //     td.style.color = '#ffbb00';
                    //     // td.style.color = 'rgb(0, 0, 0, 0)';
                    //     // td.id = 'gold-medal';
                    // }
                    // else if (obj[keys[i]] == 2)
                    // {
                    //     td.style.color = '#d4d4d4';
                    //     // td.style.color = 'rgb(0, 0, 0, 0)';
                    //     // td.id = 'silver-medal';
                    // }
                    // else if (obj[keys[i]] == 3)
                    // {
                    //     td.style.color = '#e38d2b';
                    //     // td.style.color = 'rgb(0, 0, 0, 0)';
                    //     // td.id = 'bronze-medal';
                    // }
                }
                else if (i == keys.length - 1)
                {
                    td.className = "right-side";   
                }

                td.textContent = obj[keys[i]];
                td.style.width = 100/cell_width + "%";

                row.appendChild(td);
            }
            tbody.appendChild(row);
            tbody.appendChild(div);
        }
        table.appendChild(tbody);
        document.getElementById("table-container").appendChild(table);

        console.log(wykresTeam(data_2));

        let loader = document.getElementById('loader');
        loader.style.display = 'none';
    })
    .catch(error => {
        console.error(error);
    });