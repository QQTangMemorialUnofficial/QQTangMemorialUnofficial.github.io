	function toggleLevDiv(){
		var o = event.srcElement;

		while ("TBODY" != o.parentElement.tagName){
			o = o.parentElement;
		}

		o = o.nextSibling;

		if ('block' == o.style.display){
			o.style.display = 'none';
		} else {
			o.style.display = 'block';
		}
	}