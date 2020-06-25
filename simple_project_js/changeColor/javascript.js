let spanColor = document.getElementById('colorScheme');
function myFunction() {
    setInterval(changeColor, 500);
}
function changeColor(){
    let red = random();
    let green = random();
    let blue = random();
    document.documentElement.style.setProperty("--color", `rgba(${red},${green},${blue},0.6)`);
    spanColor.innerHTML = `rgba(${red},${green},${blue})`;
}
function random() {
    let num = Math.floor(Math.random()*255);
    return num;
}