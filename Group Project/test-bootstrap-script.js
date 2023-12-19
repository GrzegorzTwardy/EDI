fetch("backup-data.json")
    .then(response => response.json())
    .then(data => {
        let table = document.createElement("table");
        table.id = 'data-table'   

        var keys = ["Rank", "Full Name", "Nationality", "Ranking Score", "Games Played", "Win Percentage", "Last Login", "Total Points", "Team Name"];
        var colgroup = document.createElement('colgroup');

        for (var i = 0; i < 9; i++) {
            var col = document.createElement('col');

            col.style.width = 100/keys.length + '%';
            console.log(100/keys.length)
            colgroup.appendChild(col);
        }
        table.appendChild(colgroup);


        let thead = document.createElement("thead");
        table.appendChild(thead);

        let header = document.createElement("tr");

        for (let i=0; i<keys.length; i++)
        {
            let th = document.createElement("th");
            th.setAttribute("scope", "col")
            if (i == 0)
            {
                th.setAttribute("id", "left-side")
            }
            else if (i == keys.length - 1)
            {
                th.setAttribute("id", "right-side")   
            }
            th.textContent = keys[i];
            console.log(data[0][i]);
            header.appendChild(th);
        }
        thead.appendChild(header);

        let div = document.createElement("div");
        div.setAttribute("style", "margin: 17px 0px 17px 0px;")
        table.appendChild(div);

        let tbody = document.createElement("tbody");

        for (let obj of data) {
            let row = document.createElement("tr");
            let div = document.createElement("div");
            row.setAttribute("class", "data-row");
            div.setAttribute("style", "margin-bottom: 17px;")


            var keys = Object.keys(obj)
            for (let i=0; i<keys.length; i++)
            {
                let td = document.createElement("td");
                if (i == 0)
                {
                    td.setAttribute("id", "left-side")
                }
                else if (i == keys.length - 1)
                {
                    td.setAttribute("id", "right-side")   
                }
                td.textContent = obj[keys[i]];
                row.appendChild(td);
            }
            tbody.appendChild(row);
            tbody.appendChild(div);
        }
        table.appendChild(tbody);
        document.getElementById("table-container").appendChild(table);
    })
    .catch(error => {
        console.error(error);
    });