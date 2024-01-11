$(document).ready(function(){
    $('#birth_date').on('change input blur', function(){
        var b_date  = $('#birth_date').val().split('-');
        var date    = new Date();
        if(b_date[2] >= date.getFullYear())
        {
            $('#birth_date').val('');
            swal({ title: 'Your Birth Date Is Invalid', icon: 'warning', button: true });
            return false;
        }
    });

    $('.modal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });

    // $('body').delegate('#formModal', 'hidden.bs.modal', function (e) {
    //   $('body').css({'overflow':'scroll'});
    // });

    $('body').delegate('.form', 'submit', function () {
      // $('.form_loader_wrap').show();
      $('#modal').iziModal('startLoading');
    });

    $('body').delegate('.only_num', 'keypress', function (event) {
        var k = event.which;
        if($.inArray(k, [0, 8, 9, 27, 13, 190]) == -1 && (k < 48 || k > 57) && (k < 2534 || k > 2543)) {return false; }
    });

    $('body').delegate('.only_num', 'paste focus', function (event) {
        event.preventDefault();
        // $(this).attr('autocomplete', 'off');
    });
});

function modal_static()
{   
    $('.modal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });
}

function modalOpen(attr) {
    event.preventDefault();
    var el = ( attr.data('target') ) ? attr.data('target') : attr.data('href');
    $(el).modal('show');
}

function reset(form)
{
    alert(from)
    $(form)[0].reset();
    $('#submit').text('Save');
    // $('#tagsinput').tagsinput('removeAll');
    // CKEDITOR.instances.editor.setData('');
}

function reset_ck()
{
    for(name in CKEDITOR.instances)
    {
        CKEDITOR.instances[name].setData('');
    }
}

function reset_file()
{
    $('.file_name').text('');
    $('.file').prop('required',true);
}

function img_valid(attr)
{
    var file    = attr.val().toLowerCase();
    var ext     = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    if(ext.test(file))
    {
        return true;
    } else {
        attr.val('');
        swal({
            title: 'Please Inter A Valid Image File',
            icon: 'warning',
            button: true
        });
        return false;
    }
}

//Allow Only Nmber Digits /0-9/
function number(e)
{
    var k = e.which;
    if($.inArray(k, [0, 8, 9, 27, 13, 190]) == -1 && (k < 48 || k > 57) && (k < 2534 || k > 2543)) { return false; }
}

function oninput_num(attr)
{
    var num = Math.abs(attr.val(),2);
    attr.val(num);
}

function max_value(attr, len)
{
    if(attr.val() >= len)
    {
        attr.val(len);
        return false;
    }
}

function dataPrint(el)
{
    var data = $(el).html();
    var head = `
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
            <style>
                .ignore-print {
                    display: none;
                }
            </style>
        </head>
    `;
    var script = `<script type="text/javascript">window.print();<\/script>`;

    // var body_html = $('body').html();
    // $('body').html(data);
    // window.print();
    // $('body').html(body_html);

    var w = window.open();
    w.document.write('<html>'+head+'<body>'+data+script+'</body></html>');
}
