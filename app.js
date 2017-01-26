 $(document).ready(function() {
    $("#Find").click(function() {
        var weather = document.getElementById("search").value
    
        var apixu = "https://api.apixu.com/v1/current.json?key=a90bf5c92af543218bd212238170801&q=" + weather;
        alert(apixu);
        });
    });



