$('.scrollspy').scrollSpy()
$('select').material_select()
$('.datepicker').pickadate({
  selectMonths: false,
  selectYears: false,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false
})
function applyCss(selectors, cssRule) {
  $(selectors.join(',')).css(cssRule)
}
function applyTheme(themeColor) {
  applyCss([
    '.nav-wrapper',
    '.btn',
    '.page-footer',
    '.btn-floating',
    '.range-field > .thumb'
  ], { backgroundColor: themeColor })

  applyCss([
    '.secondary-content > .material-icons',
    '.input-field',
    '.input-field > .material-icons',
    '.input-field > label',
    '.dropdown-content > li > a'
  ], { color: themeColor })
}
