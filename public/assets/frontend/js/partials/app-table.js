/*===================================================================================================================
                                                DataTable Config
====================================================================================================================*/
$(document).ready(function() {
    (function(){
        let AppTbl = {
            dataTable: function() {
                if ($('#dataTable').length == 0) return false;
                let dataTable = $('#dataTable').DataTable({
                    "paging"        : true,
                    "pageLength"    : 10,
                    "pagingType"    : "full_numbers",
                    "lengthMenu"    : [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
                    "lengthChange"  : true,
                    "searching"     : true,
                    "ordering"      : true,
                    "info"          : true,
                    "autoWidth"     : false,
                    "retrieve"      : true,
                    "destroy"       : true,
                    // "dom"           : 'Bfrtip',
                    // "dom"           : 'flrtip',
                    "aaSorting"     : [],
                    // "columnDefs"    : [
                    //     {"orderable": false, "targets": [0]},
                    // ],
                    "language"       : {
                        paginate: {
                            first: '<i class="las la-angle-double-left"></i>',
                            previous: '<i class="las la-angle-left"></i>',
                            next: '<i class="las la-angle-right"></i>',
                            last: '<i class="las la-angle-double-right"></i>',
                        }
                    },
                    drawCallback  : function( settings ) {
                         $('.dataTables_paginate .page-item .page-link').each(function() {
                            let content = $(this).html();
                            if (content == '<i class="las la-angle-double-left"></i>') content = 'First';
                            if (content == '<i class="las la-angle-left"></i>') content = 'Previous';
                            if (content == '<i class="las la-angle-right"></i>') content = 'Next';
                            if (content == '<i class="las la-angle-double-right"></i>') content = 'Last';
            
                            title = isNaN(content) ? content+' Page' : 'Page '+content;
                            $(this).attr('title', title);
                        });
                    }
                });
    
                AppTbl.dataTableButton();
                return dataTable;
            },
            dataTableButton: function() {
                let fl = $('.tbl-heading').text().replace(/\s/g,'_');
                let checked = ($('.tbl-checked').length) ? '.tbl-checked' : null;
    
                let button = new $.fn.dataTable.Buttons(dataTable, {
                    "buttons"       : [
                        { 
                            extend : 'copy', filename: fl, text : 'B-Copy', titleAttr : 'B-Copy', title : '', className: 'none',
                            exportOptions : {columns: [':visible :not(.tbl-col-exclude)'], rows: checked}
                        },
                        {
                            extend : 'excel', filename: fl, text : 'B-excel', titleAttr : 'B-excel', title : '', className: 'none',
                            exportOptions : {columns: [':visible :not(.tbl-col-exclude)'], rows: checked}
                        },
                        {
                            extend : 'csv', filename: fl, text : 'B-csv', titleAttr : 'B-csv', title : '', className: 'none',
                            exportOptions : {columns: [':visible :not(.tbl-col-exclude)'], rows: checked}
                        },
                        {
                            extend : 'print', filename: fl, text : 'B-Print', titleAttr : 'B-Print', title : '', className: 'none',
                            exportOptions : {columns: [':visible :not(.tbl-col-exclude)'], rows: checked, stripHtml: false}
                        },
                        {
                            extend : 'pdf', filename: fl, text : 'B-pdf', titleAttr : 'B-pdf', title : '', className: 'none',
                            exportOptions : {columns: [':visible :not(.tbl-col-exclude)'], rows: checked}
                        },
                        {
                            extend : 'colvis', text : 'B-colvis', titleAttr : 'B-colvis', title : '', className: 'none',
                            columns: [':not(.tbl-col-exclude)']
                        },
                        {
                            extend : 'pageLength'
                        }
                    ]
                });
    
                return button;
            }
        };
        
        window.AppTbl = AppTbl;
    }());

    $('body').delegate('.export', 'click',function(){
        let to = $(this).data('to');
        dtExport(to);
    });

    $('body').delegate('.dt-button-background', 'click',function(){
        $('.dt-button-collection').hide();
    });

    $('body').delegate('.tbl-all-check', 'change',function(){
        let check = $(this).is(':checked');
        $('.tbl-check').prop('checked', check);

        $('.tbl-check').each(function(){
            if($(this).is(':checked'))
            { 
                $(this).closest('tr').addClass('tbl-checked');
            } else {
                $(this).closest('tr').removeClass('tbl-checked');
            }
        });

        showChecked();
    });

    $('body').delegate('.tbl-check', 'change',function(){
        $('.tbl-all-check').prop('checked', false);
        $(this).closest('tr').toggleClass('tbl-checked');
        showChecked();
    });

    AppTbl.dataTable();
    function dtExport(to) {
        AppTbl.dataTable().button('.buttons-'+to).trigger();
    }

    function showChecked() {
        AppTbl.dataTable().buttons().destroy();
        AppTbl.dataTableButton();
        let total = $('.tbl-checked').length;

        if (!localStorage.prevHeading) {
            let prevHeading = $('.tbl-heading').text();
            let prevSubHeading = $('.tbl-sub-heading').text();
            localStorage.prevHeading = prevHeading;
            localStorage.prevSubHeading = prevSubHeading;
        }
    
        if (total) {
            $('.tbl-heading').text(total+' data selected');
            $('.tbl-sub-heading').text('View actions for selected data on the right menu hover.');
            $('.non-check').hide();
        } else {
            $('.tbl-heading').text(localStorage.prevHeading);
            $('.tbl-sub-heading').text(localStorage.prevSubHeading);
            $('.non-check').show();
            localStorage.prevHeading = '';
            localStorage.prevSubHeading = '';
        }
    }
});