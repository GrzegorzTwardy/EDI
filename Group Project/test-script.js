// Fetch json data from api link
// fetch("https://my.api.mockaroo.com/tpr.json?key=1786d670")
fetch("backup-data.json")// Replace this with your api link
    .then(response => response.json()) // Convert the response to json
    .then(data => {
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

                    if (obj[keys[i]] == 1)
                    {
                        td.style.color = '#ffbb00';
                        // td.style.color = 'rgb(0, 0, 0, 0)';
                        // td.id = 'gold-medal';
                    }
                    else if (obj[keys[i]] == 2)
                    {
                        td.style.color = '#d4d4d4';
                        // td.style.color = 'rgb(0, 0, 0, 0)';
                        // td.id = 'silver-medal';
                    }
                    else if (obj[keys[i]] == 3)
                    {
                        td.style.color = '#e38d2b';
                        // td.style.color = 'rgb(0, 0, 0, 0)';
                        // td.id = 'bronze-medal';
                    }
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
    })
    .catch(error => {
        console.error(error);
    });