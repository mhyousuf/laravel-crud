/*===================================================================================================================
                                                Izi Toast
====================================================================================================================*/
$(document).ready(function() {
    $('.izi-info').click(function() {
        iziToast.info({title: 'Info', message: 'Welcome!'});
    });

    $('.izi-success').click(function() {
        iziToast.success({title: 'Success', message: 'Successfully inserted record!'});
    });

    $('.izi-warning').click(function() {
        iziToast.warning({title: 'Warning', message: 'You forgot important data!'});
    });

    $('.izi-error').click(function() {
        iziToast.error({title: 'Error', message: 'Illegal operation!'});
    });

    $('.izi-notify').click(function() {
        let message = `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...
            <a href="" target="_blank">Show More</a>
        `;

        iziToast.show({
            // timeout: false,
            class: 'app-izi-notify',
            pauseOnHover: true,
            maxWidth: 300,
            theme: 'dark',
            icon: 'las la-bell',
            title: '<h5>Notification Title</h5>',
            message: message,
            position: 'topRight',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            overlay:false,
            layout: 2,
        });
    });

    $('.izi-delete').click(function() {
        iziToast.show({
            timeout: false,
            close: false,
            class: 'app-izi-notify',
            maxWidth: 300,
            theme: 'dark',
            icon: 'las la-trash',
            title: '<h5>Are You Sure?</h5>',
            displayMode: 2,
            message: 'It will be deleted permanently!',
            position: 'topRight',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            overlay:true,
            overlayClose: true,
            closeOnEscape: true,
            layout: 2,
            buttons: [
                ['<button class="btn btn-primary">Confirm</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOutUp' }, toast);
                    iziToast.success({title: 'Success', message: 'Successfully deleted record!'});
                }],
                ['<button class="btn btn-danger">Cancel</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOutUp' }, toast);
                }]
            ]
        });
    });
});

/*===================================================================================================================
                                                Sweetalert
====================================================================================================================*/
$(document).ready(function() {
    $('.sw-info').click(function() {
        swal({title: 'Welcome', icon:'info'});
    });

    $('.sw-success').click(function() {
        swal({title: 'Successfully inserted record!', icon: 'success'});
    });

    $('.sw-warning').click(function() {
        swal({title: 'You forgot important data!', icon: 'warning'});
    });

    $('.sw-error').click(function() {
        swal({title: 'Illegal operation!', icon: 'error'});
    });

    $('.sw-delete').click(function() {
        swal({title:'Are you sure?', text: 'It will be deleted permanently!.', icon:'warning', buttons:true, dangerMode:true})
        .then((willDelete) => {
            if(willDelete)
            {
                swal({title: 'Successfully deleted record!', icon:'success'});
            }
        });
    });
});