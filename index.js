alert("Only View For Destop Side.")


Shery.imageEffect("#back",{style: 5, config: {"a":{"value":0.69,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":2.1852704927596696},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":0.21,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":48.85,"range":[0,100]}}, gooey: true})






let elems = document.querySelectorAll(".elem");

elems.forEach(elem => {
    let h1s = elem.querySelectorAll('h1')
    let index = 0;
    let animate = false;
    document.querySelector('#main').addEventListener('click', () => {
        if (!animate) {
            animate = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" }),
                    animate = false;
                },
            });
            index === h1s.length - 1 ? (index = 0) : index++;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    })
})

