var HTML = '<div class="article" onclick=""><div class="box closedDoor"><h2>@@@</h2></div><div class="present"><div class="bauble">?</div></div></div>';
var dateObj = new Date();
var monthNo = dateObj.getMonth();
var dayNo = dateObj.getDate();
var adventBoxesHTML = '';
var newHTML = '';

// the gif generator stuff:

// the actual calendar:
if(monthNo != 11) {
		dayNo = 24; // so that the rest of the year the doors are always open
}

// int v = 0;
for (vv = 0; vv < 24; vv++) {
	newHTML = HTML.replace('@@@',vv+1);
	  if(vv < dayNo) {
        newHTML = newHTML.replace('closedDoor','openDoor');
        newHTML = newHTML.link('day.html');
    }
    adventBoxesHTML += newHTML;
}
document.getElementById("adventBoxes").innerHTML = adventBoxesHTML;
