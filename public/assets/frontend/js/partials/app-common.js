/*===================================================================================================================
                                                Common
====================================================================================================================*/
$(document).ready(function () {
    // $('.app-content-body').css({'min-height': $('.app-menu').height()});
    $('.non-click').on('click', function (e) {
        e.preventDefault();
        return false;
    });

    $('.skeleton-anim').click(function() {
        let anim = $(this).data('anim');
        if (anim == 'fade') {
            $('.app-skeleton').addClass('app-skeleton-fade');
            $('.app-skeleton').removeClass('app-skeleton-blink');
        } else {
            $('.app-skeleton').addClass('app-skeleton-blink');
            $('.app-skeleton').removeClass('app-skeleton-fade');
        }
    });
});

/*===================================================================================================================
                                                Theme
====================================================================================================================*/
$(document).ready(function () {
    if ($('.app-dark').length && !localStorage.appTheme) {
        $('.app-theme').prop('checked', true);
    } else {
        if (localStorage.appTheme == 'app-dark') {
            $('body').addClass('app-dark');
            $('.app-theme').prop('checked', true)
        } else {
            $('body').removeClass('app-dark');
            $('.app-theme').prop('checked', false)
        }
    }

    $('.app-theme').change(function () {
        // appLoader('.app-default-loader', 'show');

        if ($('.app-dark').length || localStorage.appTheme == 'app-dark') {
            $('body').removeClass('app-dark', true);
            localStorage.appTheme = "app-light";
        } else {
            $('body').addClass('app-dark', false);
            localStorage.appTheme = "app-dark";
        }
        
        AppChart.init();
        // window.location.reload(true);
    });
});

/*===================================================================================================================
                                                App-Collapse
====================================================================================================================*/
$(document).ready(function () {
    $('body').delegate('.app-collapse-toggle', 'click', function (event) {
        event.preventDefault();
        let el = ($(this).attr('href')) ? $(this).attr('href') : $(this).data('href');
        if ($(el).is(':visible')) {
            $(el).slideUp('slow');
        } else {
            $(el).slideDown('slow');
        }
    });
});

/*===================================================================================================================
                                                Dropdown
====================================================================================================================*/
$(document).ready(function () {
    $('body').delegate('.dropdown-hoverable .app-dropdown-icon', 'mouseenter click', function () {
        var rect        = $(this).get(0).getBoundingClientRect();
        let dropdown    = $(this).parent().find('.dropdown-menu');
        
        if (dropdown.hasClass('app-dropdown-menu-right')) {
            let top         = rect.top + $(this).height();
            let left        = rect.left - dropdown.width() + 25;
            dropdown.css({'top': top, 'left': left});
        } else {
            let top         = rect.top + $(this).height();
            let left        = rect.left;
            dropdown.css({'top': top, 'left': left});
        }
    });
});

/*===================================================================================================================
                                                Select2
====================================================================================================================*/
$(document).ready(function () {
    $('.app-select2').select2();
});

/*===================================================================================================================
                                                Tags Input
====================================================================================================================*/
$(document).ready(function () {
    $('.app-tags').tagsinput();
});

/*===================================================================================================================
                                                Smooth Scroll
====================================================================================================================*/
$('body').delegate('.app-smooth-scroll', 'click', function(event) {
    event.preventDefault();

    let selector     = $(this).attr('href') ? $(this).attr('href')
                       : $(this).data('href') ? $(this).data('href')
                       : $(this).data('target') ? $(this).data('target')
                       : null;
    let type         = $(this).data('type');
    let topHeight    = $('.app-content-header').height() + 20;

    if ($(selector).length) {
        if (type == 'tab') $(selector).tab('show');
        if (type == 'collapse') $(selector).collapse('show');

        setTimeout(function() {
            let content = $(selector).offset().top - topHeight;
            $('html, body').stop().animate({
                scrollTop: content
            }, 800);
        }, 250);
    }
})

/*===================================================================================================================
                                                Crud
====================================================================================================================*/
$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('body').delegate('.app-delete-confirm', 'click', function(event) {
        event.preventDefault();
        swal({title:'Are you sure?', text: 'It will be deleted permanently.', icon:'warning', buttons:true, dangerMode:true})
        .then((willDelete) => {
            if(willDelete)
            {
                $.ajax({
                    url: $(this).attr('href'),
                    type: 'DELETE',
                    dataType: 'json',
                    success: function(res) {
                        if (res.redirect) {
                            window.location.href = res.redirect;
                        } else {
                            window.location.reload();
                        }
                    },
                    error: function(err) {
                        console.log(err);
                    }
                });
            }
        });
    });
});

/*===================================================================================================================
                                                Functions
====================================================================================================================*/
function imgCheck(attr)
{
    var file = attr.val().toLowerCase();
    var ext  = /(\.jpg|\.jpeg|\.gif|\.png|\.ico)$/i;
    
    if(ext.test(file)) {
        return true;
    } else {
        attr.val('');
        swal({title: 'Please Inter A Valid Image File', icon: 'warning', button: true});
        return false;
    }
}