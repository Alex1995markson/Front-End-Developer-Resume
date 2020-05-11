window.addEventListener("load", function(event) {

     gsap.to(".box-text .tx-first", { x: 500, duration: 2, scale:1.2, ease: "none"});
     gsap.to(".box-text  .tx-big", {x: 500, duration: 3, scale:1.2, ease: "none"});
     gsap .to(".box-text  .tx-you", { x: 500, duration: 3, scale:1.2, ease: "none"});
     gsap.to(".box-text .left-padding", { x: 520, duration: 5, scale:1.2, ease: "none"});


    console.clear();
    const threshold = 0.7; // trigger
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: threshold
    };
    // var contFirst = 
    // $('.gallery .column.first img.first').css("margin-top", "60px ");
    // this.console.log(contFirst);
    const observer = new IntersectionObserver(animHandler, options);
    const targets = document.querySelectorAll("article");
    const ar = [].slice.call(targets); 
    let animations = [];

    let count = 0;

    for(let target of ar) {
        animations[count] = new TimelineMax({paused:true});  
        observer.observe(target);
        count++;
    }


    gsap.set(".d-b-sm, .x-block", {duration: 3});
    gsap.set(".flex-season, .flex-text, .flex-year, .text-decription, .btn_description", {duration: 5});
    gsap.set(".gallery .column img",  {duration: 10});

    
    animations[0].to(".d-b-sm", 0.5, {rotation: 360, ease:Back.easeOut.config(1.4)});
    animations[0].from(".x-block", 1.2, {rotation: 360, ease:Back.easeOut.config(1.4)});


    animations[1].to(".flex-season, .flex-text, .flex-year, .text-decription, .btn_description", 2.0, {rotation: 360, ease:Back.easeOut.config(1.4)})
    animations[1].from(".btn_description", 2.5, {scale:2});

    animations[2].to(".gallery  img:nth-child(even)", 4.0, {rotation: 360, ease:Back.easeOut.config(1.4)})

    

        // observer handler
    function animHandler(targets, observer) {
        for (var entry of targets) {
            if (entry.isIntersecting) {
                let i = ar.indexOf(entry.target);
                animations[i].play();
            
            } else {
                return;
            }
        }
    }

    /* x-padding*/

 
/*
TweenMax.set(".dog", {yPercent:-50, xPercent:-100});
TweenMax.set(".box, .hello, .message, #morphIt, #drawIt", {yPercent:-50, xPercent:-50});
TweenMax.set(".trigger", {bottom:threshold * 100 + "%"});

// timeline for each section
animations[0].from(".hello", 1, {scale:0, transformOrigin:"center bottom"});

let mySplitText = new SplitText(".message", {type:"chars, words, lines"});
animations[1].staggerFrom(mySplitText.chars, 0.2, {y: -50, rotation:180, opacity: 0}, 0.05);

animations[2].to(".dog", 0.5, {left:"50%", xPercent:-50, ease:Back.easeOut.config(1.4)});
animations[2].from(".woof", 0.22, {scale:0, transformOrigin:"left bottom", ease:Back.easeOut.config(1.4)}, "-=0.1");

animations[3].to(".box", 0.5, {rotation:360});
animations[3].to(".box", 0.5, {top:"50%", width:300, backgroundColor:"white", color:"black"});

animations[4].to("#star", 0.3, {morphSVG:"#circle", ease:Back.easeOut.config(1.7)});
animations[4].to("#star", 0.3, {morphSVG:"#triangle", ease:Back.easeOut.config(1.7)}, "+=0.5");
animations[4].to("#star", 0.3, {morphSVG:"#star", ease:Back.easeOut.config(1.7)}, "+=0.5");

animations[5].staggerFromTo("#drawIt path", 1, {drawSVG:0}, {drawSVG:true},0.1);
animations[5].staggerTo("#drawIt path", 0.5, {fill:'white'}, 0.1, 0.5);

*/
     // add animation for scroll   
    //  gsap.from(".sitting_man", 2, {scale:0, transformOrigin:"center bottom"});
    //  gsap.from(".x-block", 2, {scale:0, transformOrigin:"center top"});

});
