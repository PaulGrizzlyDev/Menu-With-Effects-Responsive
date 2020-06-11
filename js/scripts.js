jQuery(document).ready(function() {
    jQuery('.open-menu').click(function(e) {
        jQuery(".menu1").slideDown(500);
        jQuery(".menu2").slideDown(700);
        jQuery(".menu3").slideDown(900);
        jQuery(".menu4").slideDown(1200);

        jQuery('.full-menu').fadeIn("fast");


    })
    jQuery('.close-full').click(function(e) {

        jQuery('.full-menu').slideUp(1200).fadeOut('slow');
        jQuery(".menu1").slideUp(1200);
        jQuery(".menu2").slideUp(900);
        jQuery(".menu3").slideUp(700);
        jQuery(".menu4").slideUp(500);


    });
});