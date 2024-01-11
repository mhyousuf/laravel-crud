/*===================================================================================================================
                                                Picker
====================================================================================================================*/
$(document).ready(function() {
    let startBirthDate   = '01-01-'+ (new Date().getFullYear() - 100); 
    let endBirthDate     = '01-01-'+ (new Date().getFullYear() - 10); 
    $('.app-birth-date').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        defaultViewDate: startBirthDate,
        startDate: startBirthDate,
        endDate: endBirthDate,
    });

    $('.app-date').datepicker({
        format: 'dd-mm-yyyy',
        todayHighlight: true,
        autoclose: true
    });

    $('.app-multi-date').datepicker({
        format: 'dd-mm-yyyy',
        todayHighlight: true,
        multidate: true,
        multidateSeparator: ','
    });

    $('.app-time').timepicker({
        showInputs: true,
        explicitMode: true,
        minuteStep: 1,
        icons: {
            up: 'las la-angle-up',
            down: 'las la-angle-down'
        }
    });

    $('.app-date-range').daterangepicker({
        linkedCalendars: false,
        locale: {
            format: 'DD-MM-YYYY',
            separator: " To ",
        }
    });

    $('.app-time-range').daterangepicker({
        timePicker: true,
        locale: {
            format: 'hh:mm A',
            separator: " To ",
        }
    }).on('show.daterangepicker', function (ev, picker) {
        picker.container.find(".calendar-table").hide();
    });

    $('.app-date-time-range').daterangepicker({
        timePicker: true,
        linkedCalendars: false,
        locale: {
            format: 'DD-MM-YYYY hh:mm A',
            separator: " To ",
        }
    });

    // Report Range
    let start   = moment().subtract(6, 'days')
    let end     = moment();
    $('.app-report-range').daterangepicker({
        linkedCalendars: false,
        locale: {
            format: 'DD-MM-YYYY',
            separator: " To ",
        },
        startDate: start,
        endDate: end,
        showCustomRangeLabel: false,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
           'This Year': [moment().startOf('year'), moment().endOf('year')],
           'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
        }
    }, function(start, end, label) {
        
    });

    $('.app-report-range').on('apply.daterangepicker', function(ev, picker) {
        if (picker.chosenLabel == 'Custom Range') {
            $(this).find('span').html(picker.startDate.format('MMM D, YYYY') + ' - ' + picker.endDate.format('MMM D, YYYY'));
        } else {
            $(this).find('span').html(picker.chosenLabel);
        }

        if ($(this).data('url')) {
            let url  = $(this).data('url');
            let load = $(this).data('load');
            let loaderEl = $(this).offsetParent().find('.app-card-body');
            
            loaderEl.addClass('app-loading');
            setTimeout(function() {
                loaderEl.removeClass('app-loading');
            }, 5000);
        }
    });

    $('.app-color-picker').colorpicker();
});