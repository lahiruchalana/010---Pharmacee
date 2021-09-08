var json = [];

// Default table --> English Table
getData("english")
getDistrictResults("english")

// Click on Sinhala language button
$('#Sinhala').click(function(){
    let language = "sinhala"
    console.log(language)
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
    changeDistrictLanguage(language)
});

// Click on English language button
$('#English').click(function(){
    let language = "english"
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
});

// Click on Tamil language button
$('#Tamil').click(function(){
    let language = "tamil"
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
});

// English/SInhala/Tamil Tables display function
function getData(language) {
    $.getJSON(`Data/${language}.json`, function (data) {
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
}

// this function to filter dictrict by SInhala and Tamil languages
function getDistrictResults(language) {
    $('#districtButtons button').click(function(event) {
        var districtVal = this.textContent
        if (language.includes("sinhala")) {
            console.log(`filter with ${language} language`)
            if (districtVal.includes("අම්පාර")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("අනුරාධපුර")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("බදුල්ල")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("මඩකලපුව")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("කොළඹ")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("ගාල්ල")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("ගම්පහ")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("හම්බන්තොට")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("යාපනය")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("කළුතර")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("මහනුවර")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("කෑගල්ල")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("කුරුණෑගල")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("මාතලේ")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("මාතර")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("මොණරගල")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("මුලතිව්")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("නුවරඑලිය")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("පොළොන්නරුව")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("පුත්තලම")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("රත්නපුර")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("ත්රිකුණාමලය")) {
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("වවුනියාව")) {
                filteredTableByDisctrict(districtVal)
            }
        } else if (language.includes("tamil")) {
            console.log(`filter with ${language} language`)
        }
    });
}

// English/Sinhala/Tamil languages dictrict filter 
function filteredTableByDisctrict(districtVal) {
    var districts = [];
    var District = "District";
    $('#table tbody').html('');
    for (var i=0 ; i < json.length ; i++)
    {
        if ((json[i][District]).includes(districtVal)) {
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

// English language search function
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

function changeDistrictLanguage(language) {
    if (language.includes("sinhala") ) {
        // change button names when select sinhala language
        document.getElementById('provinceSelector').textContent   = 'පලාත තෝරන්න';
        document.getElementById('languageSelector').textContent   = 'භාශාව තෝරන්න';
        document.getElementById('search').placeholder   = 'ෆාමසියේ නමින්, නගරයකින්, ගමකින් ඔබේ ෆාමසිය සොයන්න...';
        // change district names when select sinhala language
        document.getElementById('Ampara').textContent   = 'අම්පාර';
        document.getElementById('Anuradhapura').textContent   = 'අනුරාධපුර';
        document.getElementById('Badulla').textContent   = 'බදුල්ල';
        document.getElementById('Batticaloa').textContent   = 'මඩකලපුව';
        document.getElementById('Colombo').textContent   = 'කොළඹ';
        document.getElementById('Galle').textContent   = 'ගාල්ල';
        document.getElementById('Gampaha').textContent   = 'ගම්පහ';
        document.getElementById('Hambantota').textContent   = 'හම්බන්තොට';
        document.getElementById('Jaffna').textContent   = 'යාපනය';
        document.getElementById('Kalutara').textContent   = 'කළුතර';
        document.getElementById('Kandy').textContent   = 'මහනුවර';
        document.getElementById('Kegalle').textContent   = 'කෑගල්ල';
        document.getElementById('Kurunegala').textContent   = 'කුරුණෑගල';
        document.getElementById('Matale').textContent   = 'මාතලේ';
        document.getElementById('Matara').textContent   = 'මාතර';
        document.getElementById('Monaragala').textContent   = 'මොණරගල';
        document.getElementById('Mullaitivu').textContent   = 'මුලතිව්';
        document.getElementById('Nuwara-Eliya').textContent   = 'නුවරඑලිය';
        document.getElementById('Polonnaruwa').textContent   = 'පොළොන්නරුව';
        document.getElementById('Puttalam').textContent   = 'පුත්තලම';
        document.getElementById('Ratnapura').textContent   = 'රත්නපුර';
        document.getElementById('Trincomalee').textContent   = 'ත්රිකුණාමලය';
        document.getElementById('Vavuniya').textContent   = 'වවුනියාව';
    } else if (language.includes("tamil")) {
        // change button names when select sinhala language
        document.getElementById('provinceSelector').textContent   = 'පලාත තෝරන්න';
        document.getElementById('languageSelector').textContent   = 'භාශාව තෝරන්න';
        document.getElementById('search').placeholder   = 'ෆාමසියේ නමින්, නගරයකින්, ගමකින් ඔබේ ෆාමසිය සොයන්න...';
        // change district names when select sinhala language
        document.getElementById('Ampara').textContent   = 'අම්පාර';
        document.getElementById('Anuradhapura').textContent   = 'අනුරාධපුර';
        document.getElementById('Badulla').textContent   = 'බදුල්ල';
        document.getElementById('Batticaloa').textContent   = 'මඩකලපුව';
        document.getElementById('Colombo').textContent   = 'කොළඹ';
        document.getElementById('Galle').textContent   = 'ගාල්ල';
        document.getElementById('Gampaha').textContent   = 'ගම්පහ';
        document.getElementById('Hambantota').textContent   = 'හම්බන්තොට';
        document.getElementById('Jaffna').textContent   = 'යාපනය';
        document.getElementById('Kalutara').textContent   = 'කළුතර';
        document.getElementById('Kandy').textContent   = 'මහනුවර';
        document.getElementById('Kegalle').textContent   = 'කෑගල්ල';
        document.getElementById('Kurunegala').textContent   = 'කුරුණෑගල';
        document.getElementById('Matale').textContent   = 'මාතලේ';
        document.getElementById('Matara').textContent   = 'මාතර';
        document.getElementById('Monaragala').textContent   = 'මොණරගල';
        document.getElementById('Mullaitivu').textContent   = 'මුලතිව්';
        document.getElementById('Nuwara-Eliya').textContent   = 'නුවරඑලිය';
        document.getElementById('Polonnaruwa').textContent   = 'පොළොන්නරුව';
        document.getElementById('Puttalam').textContent   = 'පුත්තලම';
        document.getElementById('Ratnapura').textContent   = 'රත්නපුර';
        document.getElementById('Trincomalee').textContent   = 'ත්රිකුණාමලය';
        document.getElementById('Vavuniya').textContent   = 'වවුනියාව';
    } else if (language.includes("english")) {
        // change button names when select sinhala language
        document.getElementById('provinceSelector').textContent   = 'පලාත තෝරන්න';
        document.getElementById('languageSelector').textContent   = 'භාශාව තෝරන්න';
        document.getElementById('search').placeholder   = 'ෆාමසියේ නමින්, නගරයකින්, ගමකින් ඔබේ ෆාමසිය සොයන්න...';
        // change district names when select sinhala language
        document.getElementById('Ampara').textContent   = 'අම්පාර';
        document.getElementById('Anuradhapura').textContent   = 'අනුරාධපුර';
        document.getElementById('Badulla').textContent   = 'බදුල්ල';
        document.getElementById('Batticaloa').textContent   = 'මඩකලපුව';
        document.getElementById('Colombo').textContent   = 'කොළඹ';
        document.getElementById('Galle').textContent   = 'ගාල්ල';
        document.getElementById('Gampaha').textContent   = 'ගම්පහ';
        document.getElementById('Hambantota').textContent   = 'හම්බන්තොට';
        document.getElementById('Jaffna').textContent   = 'යාපනය';
        document.getElementById('Kalutara').textContent   = 'කළුතර';
        document.getElementById('Kandy').textContent   = 'මහනුවර';
        document.getElementById('Kegalle').textContent   = 'කෑගල්ල';
        document.getElementById('Kurunegala').textContent   = 'කුරුණෑගල';
        document.getElementById('Matale').textContent   = 'මාතලේ';
        document.getElementById('Matara').textContent   = 'මාතර';
        document.getElementById('Monaragala').textContent   = 'මොණරගල';
        document.getElementById('Mullaitivu').textContent   = 'මුලතිව්';
        document.getElementById('Nuwara-Eliya').textContent   = 'නුවරඑලිය';
        document.getElementById('Polonnaruwa').textContent   = 'පොළොන්නරුව';
        document.getElementById('Puttalam').textContent   = 'පුත්තලම';
        document.getElementById('Ratnapura').textContent   = 'රත්නපුර';
        document.getElementById('Trincomalee').textContent   = 'ත්රිකුණාමලය';
        document.getElementById('Vavuniya').textContent   = 'වවුනියාව';
    }
}

// Display two(language and province dropdowns)
$('.dropdown').click(function(){
    $('.dropdown-menu').toggleClass('show');
});

$('.dropdownForProvince').click(function(){
    $('.dropdown-menu').toggleClass('show');
});
