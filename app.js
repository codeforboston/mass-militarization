$(document).ready(function() {
    
    // download data
    d3.csv("data/mpm_data.csv").then(function(data) {
        // console.log(data);

        // var mpmCountyYear = d3.nest()
        //     .key(function (d) { return d.county; }).sortKeys(d3.ascending)
        //     .key(function (d) { return d.year; }).sortKeys(d3.ascending)
        //     .entries(data);

        // console.log(mpmCountyYear)
        // console.table(data[0])
        // state, county, quantity, total_cost, year, ship_date, federal_supply_category_name, recode
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

    d3.csv("data/MA_ACLU_edited.csv").then(function (data2) {
        $('#acluTable').DataTable({
            data: data2,
            columns: [
                { "data": "County" },
                { "data": "Arrest Date" },
                { "data": "Arrestee Offense" },
                { "data": "Arrestee Race" },
                { "data": "Arrestee Ethnicity" }
            ]
        });


    });

    
});