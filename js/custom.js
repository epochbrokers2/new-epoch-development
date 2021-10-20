$(document).on('click', '.showmore_list' , function(){ 
    var show_more_child = $(this).children();
    console.log(show_more_child);
    $(this).hasClass("extraHidden") ? ($(this).removeClass("extraHidden").addClass("extraVisible"), $(this).find("a").html("Show less"), $(this).prevAll("li.read-more-target").css("display", "block")) : ($(this).removeClass("extraVisible").addClass("extraHidden"),
    $(this).find("a").html("Show more"), $(this).prevAll("li.read-more-target").css("display", "none"))
})
function classToggle() {
    const navs = document.querySelector('.navbar nav')
    const toggleButton = document.querySelector('#navbar-toggle')
    navs.classList.toggle('navbar__ToggleShow')
    toggleButton.classList.toggle('hamburger')
}

document.querySelector('.navbar__Link-toggle').addEventListener('click', classToggle);
