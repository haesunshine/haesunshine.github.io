window.onload = function() {

  // array of buttons that open
  var btns = document.getElementsByClassName("button");

  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");

  // all modal boxes
  var modals = document.getElementsByClassName('modal');



  for (var i = 0; i < btns.length; i++) {
  	var thisBtn = btns[i];
  	var thisSpan = spans[i];
  	var thisModal = modals[i];
  	
  	thisBtn.onclick = function() {
      thisModal.style.display = "block";
  	}

  	thisSpan.onclick = function() {
  	  thisSpan.style.display = "none";
  	}

  	window.onclick = function(event) {
      if (event.target === thisModal) {
      	thisModal.style.display = "none";
      }
  	}

  }

}
