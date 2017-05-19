// uploads an image within a form object.  This currently seems
// to be the easiest way to send a big binary file. 
function uploadFile() {
    var url = "http://138.68.25.50:13011";

    // where we find the file handle
    var selectedFile = document.getElementById('fileSelector').files[0];
    var formData = new FormData(); 
    // stick the file into the form
    formData.append("userfile", selectedFile);

    // more or less a standard http request
    var oReq = new XMLHttpRequest();
    // POST requests contain data in the body
    // the "true" is the default for the third param, so 
    // it is often omitted; it means do the upload 
    // asynchornously, that is, using a callback instead
    // of blocking until the operation is completed. 
    oReq.open("POST", url, true);  
    oReq.onload = function() {
	// the response, in case we want to look at it
	console.log(oReq.responseText);
    }
    oReq.send(formData);
}
