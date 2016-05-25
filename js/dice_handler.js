function handleForm() {
 // Replace this URI with your own GAE cloud API URI:
 var uri = 'https://eco-splicer-107716.appspot.com/';
 
 var request = new XMLHttpRequest();
 request.open("GET", uri, true);
 request.onreadystatechange = function(e) {
	 if (request.readyState == 4) {
		 if (request.status == 200) {
			var reply_json = JSON.parse(request.responseText);
			document.getElementById('result').value = reply_json.result;
		 }
		}
	 };
 request.onerror = function(e) {
 alert("Error in processing the request.");
 }
 request.send();
}