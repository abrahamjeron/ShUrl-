document.addEventListener("DOMContentLoaded", function() {
    const copyBtn = document.getElementById("copy-btn");
    const shortendUrlElement = document.getElementById("shortend-url");

    copyBtn.onclick = () => {
        const textToCopy = shortendUrlElement.textContent;

        if (textToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("Copied to clipboard")
        } else {
            alert("Nothing to copy!");
        }
    };
});

