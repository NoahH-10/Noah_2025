---
layout: base
title: About Me 
description: Home Page
hide: true
---

## About Me
Hello,

My name is Noah Harris.
- I play football for our very own Del Norte Nighthawks. I am currently on JV and play Linebacker and Kicker.
- I 10 pets, 6 bunnies, 2 birds, and 2 cats.
- I am a junior, and this trimester, I am currently taking Physics 1, AP Calculus AB, US History 1, AP CSP, and Advanced Football and Weights.

## My Career
In the future, I aspire to become an Aerospace Engineer after obtaining a Master's Degree in Aerospace engineering. 


<td><img src="{{site.baseurl}}/images/logo.png" height="60" title="Pair" alt=""></td>

<img id="Mario" src="https://i.pinimg.com/originals/66/c9/e8/66c9e8ecf6503fef1d904bee6e9246d0.gif"
atl="mario" style="width:130px; postition:absolute; bottom:0; left:0;">

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