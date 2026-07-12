function uploadFile() {

    const file =
    document.getElementById("fileInput").files[0];

    if (!file) {

        alert("Please Select a File");

        return;
    }

    alert(file.name + " Uploaded Successfully");

}
