const shortBtn = document.getElementById("short-btn")
shortBtn.addEventListener("click",urlShortener)

function urlShortener() {
    const bigurl = document.getElementById("bigurl").value;
    fetch(`https://is.gd/create.php?format=json&url=${bigurl}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const shortedUrl=document.getElementById("shortend-url")
            shortedUrl.innerText=data.shorturl
        })
        .catch(error => {
            console.error("Fetch error", error);
        });
}

