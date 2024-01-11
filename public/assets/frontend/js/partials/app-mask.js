/*===================================================================================================================
                                                Input Mask
====================================================================================================================*/
$(document).ready(function() {
    $('.app-date-mask').inputmask({
        alias: 'datetime',
        inputFormat: 'dd-mm-yyyy',
        inputmode: 'numeric'
    });

    $('.app-phone-mask').inputmask({
        mask: '(999) 9999-999999',
        inputmode: 'numeric'
    });

    $('.app-amount-mask').inputmask({
        alias: 'numeric',
        groupSeparator: ',',
        digits: 2,
        digitsOptional: false,
        // prefix: $(this).data('prefix'),
        placeholder: '0',
        rightAlign: false
    });

    $('.app-license-mask').inputmask({
        mask: '[9-]AAA-999',
        inputmode: 'text'
    });
    
    $('.app-ip-mask').inputmask({
        alias: 'ip',
        inputmode: 'numeric'
    });
});