function shortenURL() {
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("Please enter URL to shorten");
        return;
    }

    // app key : 026b9433161047b38105529f075d45f9

    let headers = {
        "Content-Type": "application/json",
        "apiKey": "026b9433161047b38105529f075d45f9"
    }   

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copy() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada: ${inputUrl.value}`);
}