export function addPlaceholders() {
  $('.apply-special').prepend('<h2>Promotional code</h2>');
  $('#special-code').attr('placeholder', 'Enter code');
  $('#member_number').attr('placeholder', 'Member number');
}
