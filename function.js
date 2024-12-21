// disclaimer popup javascript


let disclaimerpop_on = document.querySelector('.disclaimer_pop_on');
let disclaimer_pop_of = document.querySelector('.disclaimer');

disclaimerpop_on.onclick = () => {
    disclaimer_pop_of.classList.toggle("pop_up_on");
}


// disclaimer popup javascript

// disclaimer popup close in js

let disclaimer_cross_on = document.querySelector('.cross_btn');
let disclaimer_cross_of = document.querySelector('.disclaimer');

disclaimer_cross_on.onclick = () => {
    disclaimer_cross_of.classList.remove("pop_up_on");
}

// disclaimer popup close in js


// disclaimer popup cancell in js

let disclaimer_cansell = document.querySelector('.cancel_btn');
let disclaimer_cancell_of = document.querySelector('.disclaimer');

disclaimer_cansell.onclick = () => {
    disclaimer_cancell_of.classList.remove("pop_up_on");
}

// disclaimer popup cancell in js


// disclaimer popup agree in js

let disclaimer_agree = document.querySelector('.agree_btn');
let disclaimer_agree_of = document.querySelector('.disclaimer');

disclaimer_agree.onclick = () => {
    disclaimer_agree_of.classList.remove("pop_up_on");
}

// disclaimer popup agree in js


// contact popup in js

let contact_a_open = document.querySelector('.cross_btn_2_open');
let contact_div_open = document.querySelector('.contact');

contact_a_open.onclick = () => {
    contact_div_open.classList.toggle("contact_on");
}

// contact popup in js

// contact cross in js

let contact_cross_2 = document.querySelector('.cross_btn_2');
let contact_cross_2_close = document.querySelector('.contact');

contact_cross_2.onclick = () => {
    contact_cross_2_close.classList.remove("contact_on");
}

// contact cross in js