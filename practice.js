const massage = document.getElementById("h1");
const main= document.getElementById("main");
const kid = document.getElementById('kid');
const parent = document.getElementById("pare");
const span=document.getElementById('span');

setTimeout(() => {
    parent.style.display = "none";
    massage.textContent="Am sorry guys am just a single guy";
    span.style.display="none";
    main.style.backgroundImage="url(./pic/mine.jpg)"
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPosition = "center";
    main.style.backgroundSize = "cover";
    main.style.borderRadius="10px"
    
}, 60000);



