if (language.includes("sinhala")) {
    if (provinceVal.includes("බස්නාහිර")) {
        filteredTableByDisctrict("කොළඹ", "ගම්පහ", "කළුතර")
    } else if (provinceVal.includes("දකුණ")) {
        filteredTableByDisctrict("ගාල්ල", "හම්බන්තොට", "මාතර")
    } else if (provinceVal.includes("මධ්‍යම")) {
        filteredTableByDisctrict("මහනුවර", "මාතලේ", "නුවරඑලිය")
    } else if (provinceVal.includes("සබරගමුව")) {
        filteredTableByDisctrict("කෑගල්ල", "රත්නපුර")
    } else if (provinceVal.includes("උතුරු මැද")) {
        filteredTableByDisctrict("අනුරාධපුර", "පොළොන්නරුව")
    } else if (provinceVal.includes("ඌව")) {
        filteredTableByDisctrict("බදුල්ල", "මොණරගල")
    } else if (provinceVal.includes("වයඹ")) {
        filteredTableByDisctrict("කුරුණෑගල", "පුත්තලම")
    } else if (provinceVal.includes("නැගෙනහිර")) {
        filteredTableByDisctrict("අම්පාර", "මඩකලපුව", "ත්රිකුණාමලය")
    } else if (provinceVal.includes("උතුර")) {
        filteredTableByDisctrict("යාපනය", "මුලතිව්", "වවුනියාව")
    }
} else if (language.includes("tamil")) {
    if (provinceVal.includes("மேற்கு")) {
        filteredTableByDisctrict("கொழும்பு", "கம்பஹா", "களுத்துறை")
    } else if (provinceVal.includes("தெற்கு")) {
        filteredTableByDisctrict("காலி", "அம்பாந்தோட்டை", "மாத்தறை")
    } else if (provinceVal.includes("மத்திய")) {
        filteredTableByDisctrict("கண்டி", "மாத்தளை", "நுவரெலியா")
    } else if (provinceVal.includes("சப்ரகமுவா")) {
        filteredTableByDisctrict("கேகாலை", "இரத்தினபுரி")
    } else if (provinceVal.includes("வட மையம்")) {
        filteredTableByDisctrict("அனுராதபுரம்", "பொலன்னறுவை")
    } else if (provinceVal.includes("திராட்சை")) {
        filteredTableByDisctrict("பதுளை", "மொனராகல")
    } else if (provinceVal.includes("வடமேற்கு")) {
        filteredTableByDisctrict("குருநாகல்", "புத்தளம்")
    } else if (provinceVal.includes("கிழக்கு")) {
        filteredTableByDisctrict("அம்பாறை", "மட்டக்களப்பு", "திருகோணமலை")
    } else if (provinceVal.includes("வடக்கு")) {
        filteredTableByDisctrict("யாழ்ப்பாணம்", "முல்லைத்தீவு", "வவுனியா")
    }        
} else {
    if (provinceVal.includes("Western")) {
        filteredTableByDisctrict("Colombo", "Gampaha", "Kalutara")
    } else if (provinceVal.includes("Southern")) {
        filteredTableByDisctrict("Galle", "Hambantota", "Matara")
    } else if (provinceVal.includes("Central")) {
        filteredTableByDisctrict("Kandy", "Matale", "Nuwara-Eliya")
    } else if (provinceVal.includes("Sabaragamuwa")) {
        filteredTableByDisctrict("Kegalle", "Ratnapura")
    } else if (provinceVal.includes("Northcentral")) {
        filteredTableByDisctrict("Anuradhapura", "Polonnaruwa")
    } else if (provinceVal.includes("Uva")) {
        filteredTableByDisctrict("Badulla", "Monaragala")
    } else if (provinceVal.includes("Northwestern")) {
        filteredTableByDisctrict("Kurunegala", "Puttalam")
    } else if (provinceVal.includes("Eastern")) {
        filteredTableByDisctrict("Ampara", "Batticaloa", "Trincomalee")
    } else if (provinceVal.includes("Northern")) {
        filteredTableByDisctrict("Jaffna", "Mullaitivu", "Vavuniya")
    }
}