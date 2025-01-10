// disclaimer popup javascript
let disclaimerpop_on = document.querySelector(".disclaimer_pop_on");
let disclaimer_pop_of = document.querySelector(".disclaimer");

disclaimerpop_on.onclick = () => {
  disclaimer_pop_of.classList.toggle("pop_up_on");
};
// disclaimer popup javascript

// disclaimer popup close use cross button
let disclaimer_cross_on = document.querySelector(".cross_btn");
let disclaimer_cross_of = document.querySelector(".disclaimer");

disclaimer_cross_on.onclick = () => {
  disclaimer_cross_of.classList.remove("pop_up_on");
};
// disclaimer popup close use cross button

// disclaimer popup use cancell button
let disclaimer_cansell = document.querySelector(".cancel_btn");
let disclaimer_cancell_of = document.querySelector(".disclaimer");

disclaimer_cansell.onclick = () => {
  disclaimer_cancell_of.classList.remove("pop_up_on");
};
// disclaimer popup use cancell button

// disclaimer popup user agree button
let disclaimer_agree = document.querySelector(".agree_btn");
let disclaimer_agree_of = document.querySelector(".disclaimer");

disclaimer_agree.onclick = () => {
  disclaimer_agree_of.classList.remove("pop_up_on");
};
// disclaimer popup user agree button

// disclaimer backgroount click to hide
let disclaimer_inner = document.querySelector(".disclaimer");
let disclaimer_outer = document.querySelector(".disclaimer");

disclaimer_inner.onclick = () => {
  disclaimer_outer.classList.remove("pop_up_on");
};
// disclaimer backgroount click to hide

// contact popup open link click
let contact_open = document.querySelector(".contact_toggle");
let contact_close = document.querySelector(".contact");
let contact_display_none_by_body = document.querySelector(".outer_div");

contact_open.onclick = () => {
  contact_close.classList.toggle("contact_on");
  contact_display_none_by_body.classList.toggle("body_fix");
};
// contact popup open link click

let contact_outer_open = document.querySelector(".contact");
let contact_outer_close = document.querySelector(".contact");


contact_outer_open.onclick = () => {
  contact_outer_close.classList.remove("contact_on");
  
};

//  contact cross button click close
let contact_cross_2 = document.querySelector(".cross_btn_2");
let contact_cross_2_close = document.querySelector(".contact");

contact_cross_2.onclick = () => {
  contact_cross_2_close.classList.remove("contact_on");
  
};
//  contact cross button click close


// nav bar toggle buttoon open
let navlist = document.querySelector(".header_right");
let display_none_by_body = document.querySelector(".outer_div");
let display_none_by_work = document.querySelector(".toggle_btn")

display_none_by_work.onclick = () => {
  display_none_by_body.classList.toggle("body_fix");
  navlist.classList.toggle("nav_open");
};
// nav bar toggle buttoon open


// using stopPropagation to stop the onclick function in disclaimer_outer
let disclaimer_popup_outer_close = document.querySelector('.disclaimer_outer');

    disclaimer_popup_outer_close.addEventListener('click', (e) => {
      e.stopPropagation();
});
// using stopPropagation to stop the onclick function in disclaimer_outer


// using stopPropagation to stop the onclick function in contact_outer
let contact_section_outer_close = document.querySelector(".contact_outer");

contact_section_outer_close.addEventListener('click', (e) => {
  e.stopPropagation();
});