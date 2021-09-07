var json = [];
$.getJSON("Data/english.json", function (data) {
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
            value.WhatsApp + '</td>';

            pharmacy += '<td>' + 
            value.Viber + '</td>';

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
            district_data += '<td>' + json[i].WhatsApp + '</td>';
            district_data += '<td>' + json[i].Viber + '</td>';
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
            newroutes_data += '<td>' + json[i].WhatsApp + '</td>';
            newroutes_data += '<td>' + json[i].Viber + '</td>';
            newroutes_data += '<td>' + json[i].MoH + '</td>';
            newroutes_data += '</tr>';

            results.push(newroutes_data);
            $('#table tbody').append(newroutes_data);
        }
    }
}

$('.dropdown').click(function(){

    $('.dropdown-menu').toggleClass('show');

});

function getLanguage() {
    let selectedLanguage = document.getElementById(language).value
    console.log(selectedLanguage)
}
