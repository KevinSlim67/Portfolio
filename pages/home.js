function highlightAll(event) {
    const className = event.classList[1].replace("-demo", "");
    const elements = document.getElementsByClassName(className);
    const bgColor = getComputedStyle(event).backgroundColor;

    for (e in elements) {
        if (elements[e].style !== undefined) elements[e].style.backgroundColor = bgColor;
    }
}

function unHighlightAll(event) {
    const className = event.classList[1].replace("-demo", "");
    const elements = document.getElementsByClassName(className);

    const bgColor = "rgba(255, 255, 255, 0.103)";

    for (e in elements) {
        if (elements[e].style !== undefined) elements[e].style.backgroundColor = bgColor;
    }
}