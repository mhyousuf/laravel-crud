/*===================================================================================================================
                                                Search js
====================================================================================================================*/
$(document).ready(function () {
    $('.search-toggle').click(function () {
        $('.app-search').toggleClass('app-search-open');
        $('.app-search-input').focus();
        $('.app-search-input').val('');
        // toggleSearchResult();
    });

    $('.app-search-overlay').click(function () {
        $('.app-search-result').removeClass('app-search-result-open');
        $('.app-search-overlay').removeClass('app-search-overlay-open');
    });

    $('.app-search-input').on('input focus', function() {
        $('.app-search-form').submit();
    });

    $('.app-search-form').on('submit', function(event) {
        event.preventDefault();
        toggleSearchResult();
    });

    function toggleSearchResult(url) {
        if ($('.app-search-input').val()) {
            var url     = $('.app-search-form').attr('action');
            var search  = $('.app-search-input').val();

            appLoader('.load-search-result', 'show');
            // $('.load-search-result .search-result-content').hide();
            $('.app-search-result').addClass('app-search-result-open');
            $('.app-search-overlay').addClass('app-search-overlay-open');

            $.ajax({
                type: 'GET',
                url: url,
                data:{'search':search},
                dataType:'html',
                success: function(res) {
                    $('.load-search-result').html(res);
                },
                complete: function () {
                    appLoader('.load-search-result', 'hide');
                    // $('.load-search-result .search-result-content').show();
                } 
            });
        } else {
            $('.app-search-result').removeClass('app-search-result-open');
            $('.app-search-overlay').removeClass('app-search-overlay-open');
        }
    }
});