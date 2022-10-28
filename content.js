document.addEventListener("scroll", throttle(handler, 100));

let timeout;

function throttle(func, time) {
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => { func() }, time)
    }
}

function handler() {
    let adNodes = document.querySelectorAll("div.controller.gemini-ad.native-ad-item.Feedback")
    if (adNodes.length > 0)
        console.log(`clear ${adNodes.length} ads`)
    adNodes.forEach((node) => {
        node.parentNode.remove()
    })
}
