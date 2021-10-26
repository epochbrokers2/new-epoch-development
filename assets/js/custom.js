document.addEventListener("DOMContentLoaded", () => {
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
    
    $('.epoch-nav-tab').click(function(e){
        $(this).addClass('epoch-nav-tab-active').siblings().removeClass('epoch-nav-tab-active')
       var class1 = $(this).attr('data-id')
        $('.'+class1+'').removeClass('epoch_tab_hide').siblings().addClass('epoch_tab_hide')
    })

    var policy_category_height = document.querySelector(".main_policies_category").offsetHeight;
    if (screen.width > 768) {
        document.querySelector('.wrap_policy').style.height = policy_category_height + "px"
    }
});