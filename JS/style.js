   $(document).ready(function() {
    $(".letter,.text h5").lettering();
  });
  var tl = anime.timeline({
    easing:'easeOutExpo',
    duration:2500
  })
  tl
  .add({
    targets:'.letter',
    opacity:[0 ,1],
    translateX:[100 , 0],
    delay:anime.stagger(2000)


  })
  .add({
    targets:'.text h5',
    opacity:[0 ,1],
    translateX:[-50 , 0],
  }, '-=500')