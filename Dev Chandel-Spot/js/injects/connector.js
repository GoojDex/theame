

// listen to set code mirror
document.addEventListener('setCodeMirror', function (event) {
    var data = event.detail;
	document.getElementsByClassName('CodeMirror')[0].CodeMirror.setValue(data);
});


// wait for code mirror and return
var cm_wait = setInterval(function(){
	var cm = document.getElementsByClassName('CodeMirror');
	if (!cm.length) {
		return;
	}
	
	clearInterval(cm_wait);
	
	retCodeMirror();
});


document.addEventListener('getCodeMirror', function (event) {
    retCodeMirror();
});

function retCodeMirror() {
	var data = document.getElementsByClassName('CodeMirror')[0].CodeMirror.getValue();
	
	// send data through a DOM event
	document.dispatchEvent(new CustomEvent('retCodeMirror', {detail: data}));
}