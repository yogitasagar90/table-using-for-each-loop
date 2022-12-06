var cl = console.log;

var elem = [{
    Position: 1,
    Name: 'Hydrogen',
    Weight: 1.0079,
    Symbol: 'H',
},
{
    Position: 2,
    Name: 'Oxygen',
    Weight: 15.9994,
    Symbol: 'O',
},
{
    Position: 3,
    Name: 'Neon',
    Weight: 20.1797,
    Symbol: 'Ne',
},
{
    Position: 4,
    Name: 'Carbon',
    Weight: 12.0107,
    Symbol: 'C',
},
{
    Position: 5,
    Name: 'Nitrogen',
    Weight: 14.0067,
    Symbol: 'N',
},
];

var stdInfoContainer = document.getElementById("stdInfoContainer");
var result = '';
elem.forEach(function(el,i){
    result += "<tr>";
    result += "<td>" + (i + 1) + "</td>";
    result += "<td>" + el.Name + "</td>";
    result += "<td>" + el.Weight + "</td>";
    result += "<td>" + el.Symbol + "</td>";
    result += "</tr>";
})
cl(result);
stdInfoContainer.innerHTML = result;
