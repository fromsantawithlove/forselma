if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}

var dateObj = new Date();
var monthNo = dateObj.getMonth();
var dayNo = dateObj.getDate();
//var HTML = "<h0>{0}</h0><h1>{3}</h1><iframe src='{1}' frameborder='0' scrolling='no' allowfullscreen width='640' height='405'></iframe><div><a id='LINK' href='{2}'>:smile:</a></div>";
var HTML = "<div id='dayno'><h0>{0}</h0></div><h0>{3}</h0><div id='image'><img src='resources/bubu/{1}' alt='Shantilopi' width='640' height='405'></img></div><div><a id='LINK' href='{2}'>🎅</a></div>";
var dayHTML = '';

var jsonstr = '{ "dc" : [' +
    '{ "day": "1",  "src":"1.jpg", "ref":"https://www.youtube.com/watch?v=h5yONLt2DTQ", "text":"Sonntagsmusik:" },' +
    '{ "day": "2",  "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=HVa1qku87cU", "text":"Shantilicious proudly presents:" },' +
    '{ "day": "3",  "src":"3.jpg", "ref":"https://www.youtube.com/watch?v=kzXNdLVZs3k", "text":"A 4 min long hug -- Tyler the Creator" },' +
    '{ "day": "4",  "src":"4.jpg", "ref":"https://www.youtube.com/watch?v=vmDDOFXSgAs", "text":"Song of the day:" },' +
    '{ "day": "5",  "src":"5.jpg", "ref":"https://www.reddit.com/r/neuroscience/comments/e0qkf3/watch_what_happens_to_your_brain_when_the_heart/?utm_source=share&utm_medium=web2x", "text":"What happens to you brain when the heart beats:" },' +
    '{ "day": "6",  "src":"6.jpg", "ref":"https://www.youtube.com/watch?v=8B2CRIAp1DM", "text":"Song of the day:" },' +
    '{ "day": "7",  "src":"7.jpg", "ref":"https://www.youtube.com/watch?v=4vJNaB3Eapg", "text":"Dinner 😏" },' +
    '{ "day": "8",  "src":"8.jpg", "ref":"https://www.youtube.com/watch?v=E05SSymMvdY", "text":"Song of the day:" },' +
    '{ "day": "9",  "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=uub0z8wJfhU", "text":"Ein musischer Mittelfinger!" },' +
    '{ "day": "10", "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=3jyd1LdZpqA", "text":"Shantilicious proudly presents:" },' +
    '{ "day": "11", "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=sX6hMhL1YsQ", "text":"Computer says no." },' +
    '{ "day": "12", "src":"12.jpg", "ref":"https://www.reddit.com/r/neuroscience/comments/e0q0k4/glass_brain_neuroscapelab/", "text":"Glass brains be like..." },' +
    '{ "day": "13", "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=LovWz0154KI", "text":"Shantilicious proudly presents:" },' +
    '{ "day": "14", "src":"14.jpg", "ref":"https://www.youtube.com/watch?v=u5PG7aRYS1k&t=137s", "text":"Song of the day:" },' +
    '{ "day": "15", "src":"15.jpg", "ref":"https://www.youtube.com/watch?v=2BGSHc1X60Y", "text":"Sonntagsmusik:" },' +
    '{ "day": "16", "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=_0XrYkzCC2U", "text":"Shantilicious proudly presents:" },' +
    '{ "day": "17", "src":"17.jpg", "ref":"https://twitter.com/quorumetrix/status/1198418834199367682?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1198418834199367682&ref_url=https%3A%2F%2Fwww.redditmedia.com%2Fmediaembed%2Fe18ltn%3Fresponsive%3Dtrue%26is_nightmode%3Dfalse", "text":"Them spines though..." },' +
    '{ "day": "18", "src":"18.jpg", "ref":"https://www.youtube.com/watch?v=ySLc8gZ3oEc", "text":"Song of the day:" },' +
    '{ "day": "19", "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=dhWw2wwI4-s", "text":"Shantilicious proudly presents:" },' +
    '{ "day": "20", "src":"SNT.png", "ref":"https://www.youtube.com/watch?v=DsWtFHFoxug", "text":"Shantilicious proudly presents:" },' +
    '{ "day": "21", "src":"21.jpg", "ref":"https://www.youtube.com/watch?v=fAi7IeJG-6Y&t=1967s", "text":"Song of the day:" },' +
    '{ "day": "22", "src":"22.jpg", "ref":"https://www.youtube.com/watch?v=1xnHeeN0E-I", "text":"Sonntagsmusik:" },' +
    '{ "day": "23", "src":"23.jpg", "ref":"https://www.youtube.com/watch?v=EvHQdzEdFoM", "text":"Weddings..." },' +
    '{ "day": "24", "src":"24.jpg", "ref":"https://www.youtube.com/watch?v=E8gmARGvPlI", "text":"Frohe Weihnachten!" },' +
    '{ "day": "XX", "src":"TODO", "ref":"https://www.youtube.com", "text":"TODO" } ]}';
var content = JSON.parse(jsonstr);

dayHTML = String.format(HTML, content.dc[dayNo].day, content.dc[dayNo].src, content.dc[dayNo].ref, content.dc[dayNo].text);


console.log(dayHTML);
document.getElementById("DAYCONTENT").innerHTML = dayHTML;
