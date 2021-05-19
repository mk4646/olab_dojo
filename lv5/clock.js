function clock(){
    document.getElementById('date').innerText = now.toLocaleDateString();
    document.getElementById('time').innerText = now.toLocaleTimeString();
}
setInterval(clock, 1000);