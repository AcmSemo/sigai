var scene = document.querySelector('a-scene');

AFRAME.registerComponent('maketext',{
	init: function(){
		var text = scene.querySelector('#text1');
		text.setAttribute("visible",false);
		var textMade = false;
		this.el.addEventListener('mousedown', function(){
			if(!textMade){
				text1.setAttribute("value","CSTL offers many services for faculty. Some of these services include Moodle support, faculty training, and quality matters reviews.");
				text1.setAttribute("visible",true);
				text1.setAttribute("position","-0.005 1.45 0.07");
				text1.setAttribute("wrapCount","5");
				this.setAttribute("material","src:#;color:black");
				textMade = true;
			}
		});
	}
});

