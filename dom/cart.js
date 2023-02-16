let btnGet = document.querySelector('button')
document.body.style.backgroundColor="pink";
var myTable = document.querySelector("#table");

let content_table = [
    { Pruduct: "images/ice.png", Quantity: 0, Unit_Price: "40$", Total_Price: " " },
    { Pruduct: "images/ice.png", Quantity: 0, Unit_Price: "60$", Total_Price: " " },
    { Pruduct: "images/ice.png", Quantity: 0, Unit_Price: "50$", Total_Price: " " },
    { Pruduct: "images/ice.png", Quantity: 0, Unit_Price: "80$", Total_Price: " " }
]
let headers = ["Product", "Quantity", "Unit_Price", "Total_Price"];

btnGet.addEventListener('click', () => {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);

    header.style.border="3px solid black";
    header.style.padding="0 20px";
    });
    table.appendChild(headerRow);

    content_table.forEach(cont =>{
        let bodyRow = document.createElement("tr");
    
        Object.values(cont).forEach(bodyText =>{
            let tbody = document.createElement('td');
            let textNode = document.createTextNode(bodyText);
            let image=document.createElement("img");
            image.setAttribute("src", image);
           
            
          


            tbody.appendChild(textNode);
            bodyRow.appendChild(tbody);
            tbody.style.border="3px solid black";
        })
        table.appendChild(bodyRow);
    })

    myTable.appendChild(table); 
    table.style.border="3px solid black";
    table.style.minHeight="300px";
    table.style.maxWidth="500px";
    // table.style.padding="20px";
    table.style.textAlign="center";
    table.style.margin="100px 200px 100px 350px";
    
    
    
    
});







// headers = [{th1: "Product"}, {th2 : "Quantity"}, {th3 : "Unit_Price"}, {th4 :"Total_Price"}];

// btnGet.addEventListener('click', () => {
//     let table = document.createElement("table");
//     let headerRow = document.createElement("tr");
//     headers.forEach(headerText => {
//         let th = document.createElement('th');
//         th.innerHTML = headerText.t
//         // let textNode = document.createTextNode(headerText);
//         // header.appendChild(textNode);

//         headerRow.appendChild(th);

//     th.style.border="3px solid black";
//     th.style.padding="0 20px";
//     });
//     table.appendChild(headerRow);

//     content_table.forEach(cont =>{
//         let bodyRow = document.createElement("tr");
//         // let td = document.createElement('td');
//         // let image=document.createElement("img");
//         //     image.setAttribute("src", cont.Pruduct);
//         //     td.appendChild(image);
//         //     image.style.width = "80px"
//         //     image.style.height = "80px"
        
//         // let Quantity = document.createElement('input');
//         // Quantity.setAttribute('type','number');
//         // Quantity.setAttribute('min','0');
//         // td.appendChild(Quantity);

//         // let UP = document.createElement('span');
//         // UP.innerHTML = cont.Unit_Price + '$';
//         // td.appendChild(UP);
        

//         Object.values(cont).forEach(bodyText =>{
//             let tbody = document.createElement('td');
//             let textNode = document.createTextNode(bodyText);
//             let image=document.createElement("img");
//             image.setAttribute("src", cont.Pruduct);
//             tbody.appendChild(image);

//             tbody.appendChild(textNode);
//             bodyRow.appendChild(tbody);
//             tbody.style.border="3px solid black";
//         })
//         // bodyRow.appendChild(td);
//         table.appendChild(bodyRow);
//     })

//     myTable.appendChild(table); 
//     table.style.border="3px solid black";
//     table.style.minHeight="300px";
//     table.style.maxWidth="500px";
//     // table.style.padding="20px";
//     table.style.textAlign="center";
//     table.style.margin="100px 200px 100px 350px";
    
    
    
    
// });
