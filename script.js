var json = [];
$.getJSON("data.json", function (data) {
    var pharmacy = [];
    $.each(data, function (key, value) {
        pharmacy += '<tr>';
        pharmacy += '<td>' + 
            value.District + '</td>';

            pharmacy += '<td>' + 
            value.Name + '</td>';

            pharmacy += '<td>' + 
            value.Address + '</td>';

            pharmacy += '<td>' + 
            value.Phone + '</td>';

            pharmacy += '<td>' + 
            value.MoH + '</td>';

        pharmacy += '</tr>';
    })
    json = data;
    $('#table tbody').append(pharmacy);
});


$('#districtButtons button').click(function(event) {
    var districtVal = this.textContent.toLowerCase()
    console.log(districtVal)
    filteredTableByDisctrict(districtVal)
});


function filteredTableByDisctrict(districtVal) {
    var districts = [];
    var District = "District";
    $('#table tbody').html('');
    for (var i=0 ; i < json.length ; i++)
    {
        if ((json[i][District].toLowerCase()).includes(districtVal)) {
            filterDataForDistrict()
        } 
        function filterDataForDistrict() {
            var district_data = '';
            district_data += '<tr>';
            district_data += '<td>' + json[i].District + '</td>';
            district_data += '<td>' + json[i].Name + '</td>';
            district_data += '<td>' + json[i].Address + '</td>';
            district_data += '<td>' + json[i].Phone + '</td>';
            district_data += '<td>' + json[i].MoH + '</td>';
            district_data += '</tr>';

            districts.push(district_data);
            $('#table tbody').append(district_data);
        }
    }
}


function filteredTable() {
    var results = [];
    var District = "District";
    var Name = "Name";
    var Address = "Address";
    var MOH = "MoH";
    var searchVal = document.getElementById('search').value.toLowerCase();
    $('#table tbody').html('');
    for (var i=0 ; i < json.length ; i++)
    {
        if ((json[i][District].toLowerCase()).includes(searchVal)) {
            filterData()
        } else if ((json[i][Name].toLowerCase()).includes(searchVal)) {
            filterData()
        } else if ((json[i][Address].toLowerCase()).includes(searchVal)) {
            filterData()
        } else if ((json[i][MOH].toLowerCase()).includes(searchVal)) {
            filterData()
        }
        function filterData() {
            var newroutes_data = '';
            newroutes_data += '<tr>';
            newroutes_data += '<td>' + json[i].District + '</td>';
            newroutes_data += '<td>' + json[i].Name + '</td>';
            newroutes_data += '<td>' + json[i].Address + '</td>';
            newroutes_data += '<td>' + json[i].Phone + '</td>';
            newroutes_data += '<td>' + json[i].MoH + '</td>';
            newroutes_data += '</tr>';

            results.push(newroutes_data);
            $('#table tbody').append(newroutes_data);
        }
    }
}



// var json = [];
// $.getJSON("data.json", function (data) {
//     var pharmacy = [];
//     $.each(data, function (key, value) {
//         pharmacy += '<tr>';
//         pharmacy += '<td>' + 
//             value.District + '</td>';

//             pharmacy += '<td>' + 
//             value.Name + '</td>';

//             pharmacy += '<td>' + 
//             value.Address + '</td>';

//             pharmacy += '<td>' + 
//             value.Phone + '</td>';

//             pharmacy += '<td>' + 
//             value.MoH + '</td>';

//         pharmacy += '</tr>';
//     })
//     json = data;
//     $('#table tbody').append(pharmacy);
// });

// $('#search').on('keyup', function(){
//     var searchVal = $(this).val()
//     console.log("Value:", searchVal)
//     searchDistricts(searchVal)
// })

// function searchDistricts(searchVal) {
//     var results = [];
//     var searchField = "District";
//     // var searchVal = document.getElementById('#search').val();
//     // console.log(searchVal)
//     $('#table tbody').html('');
//     for (var i=0 ; i < json.length ; i++)
//     {
//         if (json[i][searchField].toLowerCase() == searchVal) {

//             var newPharmacy = '';
//             newPharmacy += '<tr>';
//             newPharmacy += '<td>' + json[i].District + '</td>';
//             newPharmacy += '<td>' + json[i].Name + '</td>';
//             newPharmacy += '<td>' + json[i].Address + '</td>';
//             newPharmacy += '<td>' + json[i].Phone + '</td>';
//             newPharmacy += '<td>' + json[i].MoH + '</td>';
//             newPharmacy += '</tr>';

            
//             results.push(newPharmacy);
//             $('#table').append(newPharmacy);
//         }
//     }
// }








// $(document).ready(function () {
  
//     $.getJSON("data.json", 
//             function (data) {
//         var pharmacy = '';

//         $.each(data, function (key, value) {

//             pharmacy += '<tr>';
//             pharmacy += '<td>' + 
//                 value.District + '</td>';

//                 pharmacy += '<td>' + 
//                 value.Name + '</td>';

//                 pharmacy += '<td>' + 
//                 value.Address + '</td>';

//                 pharmacy += '<td>' + 
//                 value.Phone + '</td>';

//                 pharmacy += '<td>' + 
//                 value.MoH + '</td>';

//             pharmacy += '</tr>';
//         });

//         $('#table').append(pharmacy);
//     });
// });