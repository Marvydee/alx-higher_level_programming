// 102-script.js
$(document).ready(function() {
    $('#btn_translate').click(function() {
        const langCode = $('#language_code').val();
        const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`;
        
        $.getJSON(url, function(data) {
            $('#hello').text(data.hello);
        });
    });
});
