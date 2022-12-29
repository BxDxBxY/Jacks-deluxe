//  document.getElementById("myBtn").onclick = function() {myFunction()};
//  function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("d-block");
//     return true;
// }
// document.getElementById("my2Btn").onclick = function() {my2Function()};
// function my2Function() {
//     document.getElementById("myDropdown").classList.toggle("d-none");
// }
// document.getElementById("my3Btn").onclick = function() {myFunction()};
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("d-block");
// }
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// var accordion = (function(){
  
//   var $accordion = $('.js-accordion');
//   var $accordion_header = $accordion.find('.js-accordion-header');
//   var $accordion_item = $('.js-accordion-item');
 
//   // default settings 
//   var settings = {
//     // animation speed
//     speed: 400,
    
//     // close all other accordion items if true
//     oneOpen: false
//   };
    
//   return {
//     // pass configurable object literal
//     init: function($settings) {
//       $accordion_header.on('click', function() {
//         accordion.toggle($(this));
//       });
      
//       $.extend(settings, $settings); 
      
//       // ensure only one accordion is active if oneOpen is true
//       if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
//         $('.js-accordion-item.active:not(:first)').removeClass('active');
//       }
      
//       // reveal the active accordion bodies
//       $('.js-accordion-item.active').find('> .js-accordion-body').show();
//     },
//     toggle: function($this) {
            
//       if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
//         $this.closest('.js-accordion')
//                .find('> .js-accordion-item') 
//                .removeClass('active')
//                .find('.js-accordion-body')
//                .slideUp()
//       }
      
//       // show/hide the clicked accordion item
//       $this.closest('.js-accordion-item').toggleClass('active');
//       $this.next().stop().slideToggle(settings.speed);
//     }
//   }
// })();

// $(document).ready(function(){
//   accordion.init({ speed: 300, oneOpen: true });
// });