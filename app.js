$(document).ready(function() {
    
    // download data
    // d3.csv("data/mpm_data.csv").then(function(data) {
    d3.csv("data/mpm_data.csv").then(function(data) {
        // console.log(data);

        var mpmCountyYear = d3.nest()
            .key(function (d) { return d.county; }).sortKeys(d3.ascending)
            .key(function (d) { return d.year; }).sortKeys(d3.ascending)
            .entries(data);

        console.log(mpmCountyYear)
        console.table(data[0])

        $('#mpmTable').DataTable({
            data: data,
            "columns": [
                { "data": "county" },
                { "data": "year" },
                { "data": "federal_supply_category_name" },
                { "data": "quantity" },
                { "data": "total_cost" },
            ]
        });
    });

    
});