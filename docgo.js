const splitChar = '//'
const goDocURL = 'https://pkg.go.dev/'

const clean = (url = '') => {
    const start = url.indexOf(splitChar)

    return url.substring(start + splitChar.length)
}

const redirect = (tabs = [] /* active tabs */) => {
    if (tabs.length == 0) {
        alert("You don't have any active tabs!")
        return
    }
    const tab = tabs[0]
    const repoURL = clean(tab.url)
    const docURL = goDocURL + repoURL
    window.open(docURL, '_blank').focus(); // open new tab with documentation
}

document.addEventListener('DOMContentLoaded', (e) => {

    var goBtn = document.getElementById('go');

    goBtn.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, redirect)
    })

}, false);

