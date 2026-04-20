const fileInput = document.getElementById("fileInput");
const musicList = document.getElementById("musicList");
const videoList = document.getElementById("videoList");

fileInput.addEventListener("change", () => {
    const files = fileInput.files;

    for (let file of files) {
        const url = URL.createObjectURL(file);

        const card = document.createElement("div");
        card.className = "card";

        const icon = document.createElement("div");
        icon.className = "icon";

        const name = document.createElement("div");
        name.className = "filename";
        name.textContent = file.name;

        // Download when clicked
        card.onclick = () => {
            const a = document.createElement("a");
            a.href = url;
            a.download = file.name;
            a.click();
        };

        // Sort by type
        if (file.type === "audio/mpeg") {
            icon.textContent = "🎵";
            card.appendChild(icon);
            card.appendChild(name);
            musicList.appendChild(card);
        }

        else if (file.type === "video/mp4") {
            icon.textContent = "🎬";
            card.appendChild(icon);
            card.appendChild(name);
            videoList.appendChild(card);
        }
    }
});