// SIGAI Scripts

/*
 * For regular maintenance of events, you'll need to do the following:
 * 1) add an array of events for the semester following the same scheme as below.
 * 2) add the array to the eventList.
 *
 * Also be sure to change out the president email address whenever a new president is elected!
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// EMAIL
const presidentEmail = "jddevore1s@semo.edu";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// EVENT LISTS
const spring19 = [
	"Spring 2019",
	"1/18: Coursera Machine Learning - Overview with Jeremy Devore",
	"1/25: Coursera Machine Learning - Linear Regression with Jeremy Devore",
	"2/1: Coursera Machine Learning - Octave with Jeremy Devore",
	"2/8: General Meeting",
	"2/22: General Meeting",
	"3/8: Python Basics by Jesse Raines"
];

const fall18 = [
	"Fall 2018",
	"8/27: General Meeting with ACM",
	"10/12: General Meeting",
	"10/19: Distributed Computing by Dr. Ziping Liu",
	"10/26: Hololens Debut",
	"11/02: Git'n Scriptin' by Stephen Sladek",
	"11/09: Git Gud by Jeremy Devore",
	"11/10 - 11: MegaMinerAI 22 at Missouri S&T",
	"11/11: Derek Mandl and Stephen Sladek place 4th in student bracket at MegaMiner",
	"11/30: A* Pathfinding Heuristics by Jesse Raines"
];

const spring18 = [
	"Spring 2018",
	"2/13: Bresenham's Line Algorithm for Line of Sight by Aaron Gunther",
	"2/20: Linux Navigation by Michael Ranciglio",
	"4/14 - 15: MegaMinerAI 21 at Missouri S&T",
	"4/15: Andrew Smith places 5th in student bracket at MegaMiner"
];

const fall17 = [
	"Fall 2017",
	"9/12: SIGAI is created",
	"11/11 - 12: MegaMinerAI 20 at Missouri S&T",
	"11/12: Michael Ranciglio, Aaron Gunther, and Tatianna Reinbolt place 3rd in globals at MegaMiner"
];

var eventList = [
	spring19,
	fall18,
	spring18,
	fall17
];

// Loads the events into the div eventList on events.html

function loadEvents(){
	let eventDiv = document.getElementById('eventList');
	let ul, li, info;
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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// REGISTRATION FORM
function sendMail(){
	try{
		let subject = encodeURI(document.forms["signUp"]["subject"].value);
		let name = encodeURI(document.forms["signUp"]["name"].value);
		let email = encodeURI(document.forms["signUp"]["email"].value);
		let msg = encodeURI(document.forms["signUp"]["msg"].value);
		let body = "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + msg;
		let mail = "mailto:" + presidentEmail + "?subject=" + subject + "&body=" + body;
		window.location.href = mail;
	} catch(e) {
		window.alert("Message failed to send.");
		console.log(e);
	}
}
