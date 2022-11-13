//Jquery import
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

//import impressum & datenschutzerklärung
function import_data() {
    $.get('./site/datenschutzerklaerung.html', function(data) {
        document.getElementById('datenschutz_show').innerHTML = data;
    });

    $.get('./site/impressum.html', function(data) {
        document.getElementById('impressum_show').innerHTML = data;
    });
}

//import main window
function main_import(name) {
    $.get('./site/' + name + '.html', function(data) {
        document.getElementById('main').innerHTML = data;
    });
    remove_active();
    $('#' + name + '_btn').addClass('active');
    console.log('done ' + name);
}

function remove_active() {
    $('#index_btn').removeClass('active');
    $('#about_btn').removeClass('active');
    $('#gallery_btn').removeClass('active');
    $('#achiev_btn').removeClass('active');
    $('#contact_btn').removeClass('active');
}