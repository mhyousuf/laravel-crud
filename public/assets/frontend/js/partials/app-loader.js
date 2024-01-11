/*===================================================================================================================
                                                Custom Loader
====================================================================================================================*/
window.addEventListener('load', function () {
    $('body').removeClass('app-loading');
    appLoader('.app-body', 'hide');
});

function appLoader(selector, type) {
    if (type == 'show') {
        $(selector).addClass('app-loading');
    } else if (type == 'hide') {
        $(selector).removeClass('app-loading');
    }
}