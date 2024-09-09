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
 style="background-color: #000080 !important; font-family: 'sans-serif' !important "> Nothing
    </button>
        <div style ="font-weight: bold; font-size: 24px; display: inline-block; margin: 10px;"> buttons </div>
</div>

<div style="border: 2px solid black; padding: 5px; background-color: #FFFFFF !important">
    <a href="put website link here" style="border: 2px solid black; display: block; padding: 10px; margin: 10px; color: blue: font-weight: bold; text-align: center; text-decoration; none;"> Bird Video</a>
     <a href="second link here" style="border: 2px solid black; display: block; padding: 10px; margin: 10px; color: blue: font-weight: bold; text-align: center; text-decoration; none;"> button text </a>
    <a href="another link here" style="border: 2px solid black; display: block; padding: 10px; margin: 10px; color: blue: font-weight: bold; text-align: center; text-decoration; none;"> button text 2</a>

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



<td><img src="{{site.baseurl}}/images/logo.png" height="60" title="Pair" alt=""></td>




<img id="Mario" src="https://i.pinimg.com/originals/66/c9/e8/66c9e8ecf6503fef1d904bee6e9246d0.gif"
alt="mario" style="width:130px; position:absolute; bottom:0; left:0;">

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
