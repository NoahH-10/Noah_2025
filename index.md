---
layout: base
title: Student Home 
description: Home Page
hide: true
---

Hello, I'm Noah Harris, and this is my homepage.

<div style="border: 2px solid black; padding: 5px; margin-bottom: 15px;">
<p> Links to websites </p>
    <button
 style="background-color: #000080 !important; font-family: 'sans-serif' !important "> Nothing Button
    </button>
        <div style ="font-weight: bold; font-size: 24px; display: inline-block; margin: 10px;"> </div>
</div>

<div style="border: 2px solid black; padding: 5px; background-color: #FFFFFF !important">
    <a href="https://drive.google.com/file/d/1_GsQeJ_m5Ud60po314g6Y6vNuCqPnqwo/view?usp=sharing"  target="_blank" style="border: 2px solid black; display: block; padding: 10px; margin: 10px; color: blue: font-weight: bold; text-align: center; text-decoration; none;"> Birds</a>
     <a href="https://drive.google.com/file/d/1mf4lHnAjvh5-Ks-7hDVqr6NwGGJ9U-CE/view?usp=drive_link" target="_blank" style="border: 2px solid black; display: block; padding: 10px; margin: 10px; color: blue: font-weight: bold; text-align: center; text-decoration; none;"> Football Tackle (I'm #32) </a>





<script>
    function mysteryButton () {
        alert ("thanks for reading about me!")
    }
</script>
<p style="text-align: left;">
    <button style ="padding: 15px 30px; background-colorL#FFFFFF !important;"
    button onClick= "mysteryButton()">
        Click?
    </button>
</p>

</div>

<img id="Mario" src="https://orig00.deviantart.net/693e/f/2016/345/a/d/mario_run5_devart_by_t_free-daraj8q.gif"
alt="mario" style="width:130px; position:absolute; bottom:100; left:0;">

<script>
    function moveMario() {
        var mario = document.getElementById("Mario");
        var position = 0;
        var speed = 3;
        var interval = setInterval(function () {
            if (position >= window.innerWidth) {
                position = -130;
            } else {
                position += speed;
                mario.style.left = position + "px";
            }
        }, 10);
    }

    moveMario ();
 </script>