function sb() {
    document.getElementById('sb').style.display = 'block'
    document.getElementById('send').style.display = 'none'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('shar').style.display = 'none'
    var send = document.getElementById('send');
    send.src = send.src;
    var drive = document.getElementById('drive');
    drive.src = drive.src;
    var shar = document.getElementById('shar');
    shar.src = shar.src;
}

function send() {
    document.getElementById('send').style.display = 'block'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('shar').style.display = 'none'
    var sb = document.getElementById('sb');
    sb.src = sb.src;
    var drive = document.getElementById('drive');
    drive.src = drive.src;
    var shar = document.getElementById('shar');
    shar.src = shar.src;
}

function drive() {
    document.getElementById('drive').style.display = 'block'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('send').style.display = 'none'
    document.getElementById('shar').style.display = 'none'
    var sb = document.getElementById('sb');
    sb.src = sb.src;
    var send = document.getElementById('send');
    send.src = send.src;
    var shar = document.getElementById('shar');
    shar.src = shar.src;
}
function shar() {
    document.getElementById('shar').style.display = 'block'
    document.getElementById('sb').style.display = 'none'
    document.getElementById('drive').style.display = 'none'
    document.getElementById('send').style.display = 'none'
    var sb = document.getElementById('sb');
    sb.src = sb.src;
    var drive = document.getElementById('drive');
    drive.src = drive.src;
    var send = document.getElementById('send');
    send.src = send.src;
}