function navAnimation() {
    var nav = document.querySelector('nav');
    nav.addEventListener('mouseenter', function () { //gsap has only two things to and from. from is used for starting the work and to is used for ending the work
        let tl = gsap.timeline() // timeline is used to work in a synchronus flow. First nav-bottom will work then nav h5

        tl.to("#nav-bottom", {
            height: "23vh"
        })

        tl.to(".nav-part2 h5", {
            display: "block"
        })

        tl.to(".nav-part2 h5 span", {
            y: 0, // niche se nikal rha hai na isliye 
            // duration:0.3,
            stagger: {
                amount: 0.6 // duration aur stagger ko ek saath karne ki ninja technique
            }
        })
    })
    nav.addEventListener('mouseleave', function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navAnimation();

function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }
  function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }
  function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
  }

document.getElementById("scrollBtn").addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

