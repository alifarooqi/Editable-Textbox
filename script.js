let key = localStorage['companyName'] || '';

if (key != ''){
    showKey(key)
} else {
    hideIcon('cross')
    showIcon('check')
    hideIcon('edit')
    document.getElementById('txt').value = ''
    document.getElementById('txt').readOnly = false
}

document.getElementById('txt').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkHandler()
    }
    else if(event.key === "Escape"){
        event.preventDefault();
        crossHandler()
    }
});


function hideIcon(id) {
    var x = document.getElementById(id);
    if (x.style.display !== "none") {
        x.style.display = "none";
    }
}
function showIcon(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    }
}
function showKey(key) {
    hideIcon('cross')
    hideIcon('check')
    showIcon('edit')
    document.getElementById('txt').value = key
    document.getElementById('txt').readOnly = true
}

function crossHandler() {
    showKey(key)
}

function checkHandler() {
    key = document.getElementById('txt').value
    localStorage['companyName'] = key
    showKey(key)
}

function editHandler() {
    var x = document.getElementById('txt')
    x.readOnly = false
    x.select()
    showIcon('cross')
    showIcon('check')
    hideIcon('edit')
}