/*===================================================================================================================
                                                Izi Modal
====================================================================================================================*/
$(document).ready(function() {
    if ($('.iziModal').length > 0) {
        $('.iziModal').iziModal({
            title: "Title",
            subtitle: "Subtitle",
            icon: 'las la-campground',
            fullscreen: true,
            zindex: 99999,
            top: 50,
            bottom: 50,
            transitionIn: 'animate__animated animate__zoomIn',
            transitionOut: 'animate__animated animate__zoomOut',
            // closeOnEscape: false,
            // overlayClose: false,
            onOpening: function(modal){
                $('.iziModal-button-fullscreen').addClass('las la-expand');
                $('.iziModal-button-close').addClass('las la-times');
                modal.startLoading();
            },
            onOpened: function(modal){
                modal.stopLoading();
                setTimeout(function(){
                    $(".iziModal-wrap").scrollTop(0);            
                }, 1);
            }
        });       
    }
});