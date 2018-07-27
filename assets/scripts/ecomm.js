export function addPlaceholders() {
  $('.member-login, .apply-special').find('label').addClass('level-2');
  $('.member-login > h2').remove();
  $('#special-code').attr('placeholder', 'Enter code');
  $('#member_number').attr('placeholder', 'Member number');
}
