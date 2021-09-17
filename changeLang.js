window.changeDistrictLanguage = function changeDistrictLanguage(language) {
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
        // change province names when select sinhala language
        document.getElementById('Western').textContent   = 'බස්නාහිර';
        document.getElementById('Southern').textContent   = 'දකුණ';
        document.getElementById('Central').textContent   = 'මධ්‍යම';
        document.getElementById('Sabaragamuwa').textContent   = 'සබරගමුව';
        document.getElementById('NorthCentral').textContent   = 'උතුරු මැද';
        document.getElementById('Uva').textContent   = 'ඌව';
        document.getElementById('NorthWestern').textContent   = 'වයඹ';
        document.getElementById('Eastern').textContent   = 'නැගෙනහිර';
        document.getElementById('Northern').textContent   = 'උතුර';
    } else if (language.includes("tamil")) {
        // change button names when select tamil language
        document.getElementById('provinceSelector').textContent   = 'மாகாணத்தைத்';
        document.getElementById('languageSelector').textContent   = 'மொழியை தேர்ந்தெடுங்கள்';
        document.getElementById('search').placeholder   = 'மருந்தகம், நகரம் அல்லது கிராமத்தின் பெயரால் உங்கள் மருந்தகத்தைக் கண்டறியவும் ...';
        // change district names when select tamil language
        document.getElementById('Ampara').textContent   = 'அம்பாறை';
        document.getElementById('Anuradhapura').textContent   = 'அனுராதபுரம்';
        document.getElementById('Badulla').textContent   = 'பதுளை';
        document.getElementById('Batticaloa').textContent   = 'மட்டக்களப்பு';
        document.getElementById('Colombo').textContent   = 'கொழும்பு';
        document.getElementById('Galle').textContent   = 'காலி';
        document.getElementById('Gampaha').textContent   = 'கம்பஹா';
        document.getElementById('Hambantota').textContent   = 'அம்பாந்தோட்டை';
        document.getElementById('Jaffna').textContent   = 'யாழ்ப்பாணம்';
        document.getElementById('Kalutara').textContent   = 'களுத்துறை';
        document.getElementById('Kandy').textContent   = 'கண்டி';
        document.getElementById('Kegalle').textContent   = 'கேகாலை';
        document.getElementById('Kurunegala').textContent   = 'குருநாகல்';
        document.getElementById('Matale').textContent   = 'மாத்தளை';
        document.getElementById('Matara').textContent   = 'மாத்தறை';
        document.getElementById('Monaragala').textContent   = 'மொனராகல';
        document.getElementById('Mullaitivu').textContent   = 'முல்லைத்தீவு';
        document.getElementById('Nuwara-Eliya').textContent   = 'நுவரெலியா';
        document.getElementById('Polonnaruwa').textContent   = 'பொலன்னறுவை';
        document.getElementById('Puttalam').textContent   = 'புத்தளம்';
        document.getElementById('Ratnapura').textContent   = 'இரத்தினபுரி';
        document.getElementById('Trincomalee').textContent   = 'திருகோணமலை';
        document.getElementById('Vavuniya').textContent   = 'வவுனியா';
        // change province names when select tamil language
        document.getElementById('Western').textContent   = 'மேற்கு';
        document.getElementById('Southern').textContent   = 'தெற்கு';
        document.getElementById('Central').textContent   = 'மத்திய';
        document.getElementById('Sabaragamuwa').textContent   = 'சப்ரகமுவா';
        document.getElementById('NorthCentral').textContent   = 'வட மையம்';
        document.getElementById('Uva').textContent   = 'திராட்சை';
        document.getElementById('NorthWestern').textContent   = 'வடமேற்கு';
        document.getElementById('Eastern').textContent   = 'கிழக்கு';
        document.getElementById('Northern').textContent   = 'வடக்கு';
    } else if (language.includes("english")) {
        // change button names when select english language
        document.getElementById('provinceSelector').textContent   = 'Select Province';
        document.getElementById('languageSelector').textContent   = 'Select Language';
        document.getElementById('search').placeholder   = 'Search By District, Pharmacy Name, Address or MOH...';
        // change district names when select english language
        document.getElementById('Ampara').textContent   = 'Ampara';
        document.getElementById('Anuradhapura').textContent   = 'Anuradhapura';
        document.getElementById('Badulla').textContent   = 'Badulla';
        document.getElementById('Batticaloa').textContent   = 'Batticaloa';
        document.getElementById('Colombo').textContent   = 'Colombo';
        document.getElementById('Galle').textContent   = 'Galle';
        document.getElementById('Gampaha').textContent   = 'Gampaha';
        document.getElementById('Hambantota').textContent   = 'Hambantota';
        document.getElementById('Jaffna').textContent   = 'Jaffna';
        document.getElementById('Kalutara').textContent   = 'Kalutara';
        document.getElementById('Kandy').textContent   = 'Kandy';
        document.getElementById('Kegalle').textContent   = 'Kegalle';
        document.getElementById('Kurunegala').textContent   = 'Kurunegala';
        document.getElementById('Matale').textContent   = 'Matale';
        document.getElementById('Matara').textContent   = 'Matara';
        document.getElementById('Monaragala').textContent   = 'Monaragala';
        document.getElementById('Mullaitivu').textContent   = 'Mullaitivu';
        document.getElementById('Nuwara-Eliya').textContent   = 'Nuwara-Eliya';
        document.getElementById('Polonnaruwa').textContent   = 'Polonnaruwa';
        document.getElementById('Puttalam').textContent   = 'Puttalam';
        document.getElementById('Ratnapura').textContent   = 'Ratnapura';
        document.getElementById('Trincomalee').textContent   = 'Trincomalee';
        document.getElementById('Vavuniya').textContent   = 'Vavuniya';
        // change province names when select english language
        document.getElementById('Western').textContent   = 'Western';
        document.getElementById('Southern').textContent   = 'Southern';
        document.getElementById('Central').textContent   = 'Central';
        document.getElementById('Sabaragamuwa').textContent   = 'Sabaragamuwa';
        document.getElementById('NorthCentral').textContent   = 'Northcentral';
        document.getElementById('Uva').textContent   = 'Uva';
        document.getElementById('NorthWestern').textContent   = 'Northwestern';
        document.getElementById('Eastern').textContent   = 'Eastern';
        document.getElementById('Northern').textContent   = 'Northern';
    }
}