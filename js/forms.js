const getInfos = () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const comment = document.getElementById("comment").value;

    const infos = { name, email, comment };

    sessionStorage.setItem("infos", JSON.stringify(infos));
}

window.onload = () => {
    const save = sessionStorage.getItem("infos");
    if (save) {
        const infos = JSON.parse(save);
        const paragraf = document.createElement("p");
        paragraf.style.whiteSpace = "pre-line";
        const text = document.createTextNode(`Nome: ${infos.name}\nE-mail: ${infos.email}\nComentário: ${infos.comment}`);
        paragraf.appendChild(text);
        document.getElementById("contact").appendChild(paragraf);
    }
}