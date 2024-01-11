/*===================================================================================================================
                                                Menu js
====================================================================================================================*/
$(document).ready(function () {
    $('.nav-item.active').each(function() {
        $(this).children('.is-children').addClass('is-children-open');
    });

    $('.is-children').click(function (event) {
        $closest = $(this).closest('.nav-item');
        $next    = $(this).next('.app-children-nav');

        $(this).parent('.nav-item:not(.active)').parent().find('.is-children-open').each(function() {
            $(this).removeClass('is-children-open');
        });

        if ($next.is(':hidden')) {
            $next.slideDown('slow');
            $(this).addClass('is-children-open');

            $(this).parent().parent().find('.app-children-nav').each(function() {
               $(this).not($next).slideUp('slow');
            });
        } else {
            $(this).removeClass('is-children-open');
            $(this).parent().parent().find('.app-children-nav').each(function() {
                $(this).slideUp('slow');
            });
        }
    });

    $('.app-menu-toggle').click(function () {
        $('.app-menu').removeClass('app-menu-mobile-open');
        $('body').toggleClass('app-menu-mini-layout');
        $('.app-menu').toggleClass('app-menu-mini');
    });

    $('.app-menu-mobile-toggle').click(function () {
        $('body').removeClass('app-menu-mini-layout');
        $('.app-menu').removeClass('app-menu-mini');
        $('.app-menu').toggleClass('app-menu-mobile-open');
        $('.app-menu-mobile-toggle').toggleClass('is-active');
    });

    $('.app-content-body').click(function () {
        $('.app-menu').removeClass('app-menu-mobile-open');
        $('.app-menu-mobile-toggle').toggleClass('is-active');
    });
});