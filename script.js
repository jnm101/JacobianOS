setInterval(load, 1);
var loaded = 0;
function load() {
    
    if (loaded < 100) {
        loaded+= 0.4;
    }
    document.getElementById('inLoad').style.width = loaded + '%';
    if (loaded>=100) {
        document.getElementById('loadScreen').style.display = 'none';
        document.getElementById('afterLoad').style.display = 'block';
        document.getElementById('settingsDiv').style.display = 'block';
    }
}
function openSettings() {
    
}
function openMail() {
    
}
function openBrowser() {
    document.getElementById('browserDiv').style.display = 'block';
}
function search() {
    document.getElementById('browser').src = 'https://'+document.getElementById('search').value;
}
function openTextEditor() {
    
}