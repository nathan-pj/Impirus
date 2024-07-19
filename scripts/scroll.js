/* This makes the smooth scrolling work. 
To be honest I have no idea how this works, since it is a library we are using.
But shoutout to Studio Fright, they're very cool!
Link to their page: https://lenis.darkroom.engineering/ 
*/
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
})

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);