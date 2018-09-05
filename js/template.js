/* This script was used during the development process to keep code clean
	but was removed afterwards to increase performance.
*/

const headTags = [
	'<meta name="theme-color" content="#000000">',
	'<link rel="icon" type="image/png" href="../images/favicon-32x32.png">',
	'<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">',
	'<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>',
	'<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>',
	'<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>',
	'<link rel="stylesheet" type="text/css" href="css/bsOverRide.css">',
	'<link rel="stylesheet" type="text/css" href="css/styles.css">'
];

function loadHead(){
	for(let i = 0; i < headTags.length; i++){
		$('head').append(headTags[i]);
	}
}
