
$(function () {
    // console.log('');
    $('#numsearch').on('input', function () {
        var textboxValue = $('#numsearch').val();
        if (textboxValue.length > 0) {
            $('#numbertable td').each(function () {
                var filter = textboxValue.toString().toUpperCase();
                if ($(this).html().toString().toUpperCase().indexOf(filter) > -1) {
                    $(this).addClass('highlight');
                    $(this).addClass('bg');
                } else {
                    $(this).removeClass('highlight');
                    $(this).removeClass('bg');
                }
            });
        }
        else {
            $('#numbertable td').removeClass('highlight');
            $('#numbertable td').removeClass('bg');
        }
    });

});