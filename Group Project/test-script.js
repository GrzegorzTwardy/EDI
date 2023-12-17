// Fetch json data from api link
// fetch("https://my.api.mockaroo.com/tpr.json?key=1786d670") 
fetch("backup-data.json")// Replace this with your api link
    .then(response => response.json()) // Convert the response to json
    .then(data => {
        // Create a table element
        let table = document.createElement("table");

        // Create a table header row
        let header = document.createElement("tr");
        // Loop through the keys of the first object in the data array


        // for (let key in data[0]) {
        //     // Create a table header cell
        //     let th = document.createElement("th");
        //     // Set the text content of the cell to the key name
        //     th.textContent = key;
        //     // Append the cell to the header row
        //     header.appendChild(th);
        // }

        var colgroup = document.createElement('colgroup'); // create a colgroup element
        for (var i = 0; i < 9; i++) { // loop 9 times
            var col = document.createElement('col'); // create a col element
            col.style.width = "11.1%";
            colgroup.appendChild(col); // append the col element to the colgroup element
        }
        table.appendChild(colgroup);


        var keys = ["Rank", "Full Name", "Nationality", "Ranking Score", "Games Played", "Win Percentage", "Last Login", "Total Points", "Team Name"];

        for (let i=0; i<keys.length; i++)
        {
            let th = document.createElement("th");
            if (i == 0)
            {
                th.setAttribute("id", "left-side")
            }
            else if (i == keys.length - 1)
            {
                th.setAttribute("id", "right-side")   
            }
            th.textContent = keys[i];
            // console.log(data[0][i]);
            header.appendChild(th);
        }
        // Append the header row to the table
        table.appendChild(header);

        let div = document.createElement("div");
        div.setAttribute("style", "margin: 17px 0px 17px 0px;")
        table.appendChild(div);
        
        // Loop through the data array
        for (let obj of data) {
            // Create a table body row
            let row = document.createElement("tr");
            let div = document.createElement("div");
            row.setAttribute("class", "data-row");
            div.setAttribute("style", "margin-bottom: 17px;")
            // Loop through the keys of the object


            // for (let key in obj) {
            //     // Create a table body cell
            //     let td = document.createElement("td");
            //     // Set the text content of the cell to the value of the key
            //     td.textContent = obj[key];
            //     // Append the cell to the body row
            //     row.appendChild(td);
            // }


            var keys = Object.keys(obj)
            for (let i=0; i<keys.length; i++)
            {
                let td = document.createElement("td");
                if (i == 0)
                {
                    td.id = "left-side";

                    if (obj[keys[i]] == 1)
                    {
                        td.style.color = '#ffbb00';
                    }
                    else if (obj[keys[i]] == 2)
                    {
                        td.style.color = '#d4d4d4';
                    }
                    else if (obj[keys[i]] == 3)
                    {
                        td.style.color = '#e38d2b';
                    }
                }
                else if (i == keys.length - 1)
                {
                    td.id = "right-side";   
                }

                td.textContent = obj[keys[i]];
                row.appendChild(td);
            }
            // Append the body row to the table
            table.appendChild(row);
            table.appendChild(div)
        }
        // Append the table to the document body
        document.body.appendChild(table);
        table.setAttribute("id", "my-table");
        // table.setAttribute("class","table table-dark")
        document.getElementById("container").appendChild(table);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });