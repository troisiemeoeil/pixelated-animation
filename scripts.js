

// Code that runs on pageload
// gsap.to(".load_grid-item", {
//   opacity: 0,
//   duration: 0.001,
//   stagger: { amount: 0.5, from: "random" },
//   onComplete: () => {
//     gsap.set(".load_grid", { display: "none" });
//   }
// });
gsap.set(".load_grid", { display: "grid" });
gsap.to(
  ".load_grid_item",
  {
    opacity: 0,
    duration: 0.001,
    stagger: { amount: 0.5, from: "random" }, //you can also try a from: "start" or "end" -- get creative!
  },
  
);

// Code that runs on click of a link
$(document).ready(function () {
  $("body").on("click", function (e) {
 
        e.preventDefault();
        let destination = $("a").attr("href");
        gsap.set(".load_grid", { display: "grid" });
        gsap.fromTo(
          ".load_grid_item",
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 0.001,
            stagger: { amount: 0.5, from: "random" }, //you can also try a from: "start" or "end" -- get creative!
            onComplete: () => {
              window.location = destination;
            }
          }
        );
    }
  );
  
  // // On click of the back button
  // window.onpageshow = function(event){
  // 	if (event.persisted) {
  //   	window.location.reload();
  //   }
  // }
});
