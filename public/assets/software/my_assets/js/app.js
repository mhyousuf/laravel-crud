$(document).ready(function (){
    $('body').delegate('.del_btn', 'click', function(){
        var url = $(this).data('href');
        var id = $(this).data('id');

        iziToast.show({
            timeout: false,
            close: false,
            theme: 'dark',
            icon: 'fa fa-trash',
            iconColor: '#fb9678',
            title: '<h5>Are You Sure?</h5>',
            displayMode: 2,
            message: 'It will be deleted permanently!',
            position: 'topRight',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            progressBarColor: '#fb9678',
            overlay:true,
            layout: 2,
            buttons: [
                ['<button style="background: #00c292;">Confirm</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                    $.ajax({
                        type:'delete',
                        url:url,
                        data:{'id':id, '_token':AJAX.token},
                        dataType:'json',
                        success:function(data)
                        {
                            if(data.msg == 'success')
                            {
                                if(data.url) {
                                    window.location.replace(data.url);
                                } else {
                                    window.location.reload();
                                }
                            } else {
                                swal({title:'Opps! Something Wrong', icon:'warning', buttons:true});
                            }
                        }
                    });

                }],
                ['<button style="background: #fb9678;">Cancel</button>', function (instance, toast) {
                    instance.hide({transitionOut: 'fadeOutUp' }, toast);
                }]
            ]
        });
    });
});
