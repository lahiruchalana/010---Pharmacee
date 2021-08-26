
$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("data.json", 
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' + 
                value.District + '</td>';

            student += '<td>' + 
                value.Name + '</td>';

            student += '<td>' + 
                value.Address + '</td>';

            student += '<td>' + 
                value.Phone + '</td>';

            // student += '<td>' + 
            //     value.WhatsApp + '</td>';

            // student += '<td>' + 
            //     value.Viber + '</td>';

            student += '<td>' + 
                value.MoH + '</td>';

            // student += '<td>' + 
            //     value.FIELD8 + '</td>';


            student += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#table').append(student);
    });
});



// // jQuery
// $.getData('/path/to/imported/data.js', function()
// {
//     pharmacyData.DataTable();
// });

