$(document).ready(function() {
    
    // download data
    d3.csv("data/mpm_data.csv", function(data) {
        console.log(data);
    });
});