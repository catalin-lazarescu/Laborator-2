
function requestDeviceOrientation () {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
    .then(permissionState => {
    if (permissionState === 'granted') {
    window.addEventListener('deviceorientation', () => {
        var alpha = evt.alpha; 
        var beta = evt.beta; 
        var gamma = evt.gamma; 
        document.getElementById("a").innerHTML = "alpha = "+alpha; document.getElementById("b").innerHTML = "beta = "+beta; document.getElementById("c").innerHTML = "gamma = "+gamma; 
        var canvas = document.getElementById("canvas"); 
        var context = canvas.getContext("2d"); 
        var centru = {x:canvas.width/2, y:canvas.height/2} 
        var latura_patrat = 50;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = `255, ${evt.gamma+100}, ${evt.gamma+100})`;
        context.beginPath(); 
        context.fillRect(180, 150, evt.gamma, 50);
    });
    }
    })
    .catch(console.error);
    } else {
    // handle regular non iOS 13+ devices
    console.log ("not iOS");
    }
  }