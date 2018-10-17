// SIGAI Scripts

/*
 * For regular maintenance of events, you'll need to do the following:
 * 1) add a list of events for the semester following the same scheme as below.
 * 2) modify getSemester(id) to return the list you created for the corresponding id
 * 3) add a ul in events.html with the next id in line (so if we're on event29 add event30)
 *
 * Also be sure to change out the president email address whenever a new president is elected!
 */

// Global Variables

const presidentEmail = "jddevore1s@semo.edu";

// EVENT LISTS

const fall18 = [
	"Fall 2018:",
	"8/27: General Meeting"
];

const spring18 = [
	"Spring 2018:",
	"2/13: Bresenham's Line Algorithm for Line of Sight - Aaron Gunther",
	"2/20: Linux Navigation - Michael Ranciglio",
	"4/14 - 15: MegaMinerAI 21 at Missouri S&T",
	"4/15: Andrew Smith places 5th in student bracket at MegaMiner"
];

const fall17 = [
	"Fall 2017:",
	"9/12: SIGAI is created",
	"11/11 - 12: MegaMinerAI 20 at Missouri S&T",
	"11/12: Michael Ranciglio, Aaron Gunther, and Tatianna Reinbolt place 3rd in globals at MegaMiner"
];

var eventList = [
	fall18,
	spring18,
	fall17
];

// Loads the events into the div eventList on events.html

function loadEvents(){
	var eventDiv = document.getElementById('eventList');
	var ul;
	var li;
	var info;
	for(let i = 0; i < eventList.length; i++){
		info = eventList[i]; //current semester of events
		ul = document.createElement("ul");
		for(let j = 0; j < info.length; j++){
			li = document.createElement("li");
			li.appendChild(document.createTextNode(info[j]));
			ul.appendChild(li);
		}
		eventDiv.appendChild(ul);
	}
}

// REGISTRATION FORM

function sendMail(){
	try{
		var subject = encodeURI(document.forms["signUp"]["subject"].value);
		var name = encodeURI(document.forms["signUp"]["name"].value);
		var email = encodeURI(document.forms["signUp"]["email"].value);
		var msg = encodeURI(document.forms["signUp"]["msg"].value);
		var body = "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + msg;
		var mail = "mailto:scsladek1s@semo.edu?subject=" + subject + "&body=" + body;
		window.location.href = mail;
	} catch(e) {
		window.alert("Message failed to send.");
		console.log(e);
	}
}
