function renderNav(options) {
    var rendered = Mustache.render(nav_template, { active: 0 });
    document.getElementById('nav_target').innerHTML = rendered;
}
function renderFooter(options) {
    var rendered = Mustache.render(footer_template, options);
    document.getElementById('footer_target').innerHTML = rendered;
}
function renderHeader(options) {
    // var header_template = document.getElementById('header_template').innerHTML;
    var rendered = Mustache.render(header_template, options);
    document.getElementById('header_target').innerHTML = rendered;
}
function renderLoader(options) {
    var rendered = Mustache.render(loading_template, options);
    document.getElementById('loading_target').innerHTML = rendered;
}
function renderFilter(options) {
    var rendered = Mustache.render(filter_template, options);
    document.getElementById('filter_target').innerHTML = rendered;
}
function renderStatus(options) {
    var rendered = Mustache.render(status_template, options);
    document.getElementById('status_target').innerHTML = rendered;
}