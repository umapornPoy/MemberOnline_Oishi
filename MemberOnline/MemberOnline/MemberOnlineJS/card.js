$('form').on("submit", function() {
  return false;
});
$('tr').on('click', function() {
  $(this).find('input[type=text], input[type=password]').focus();
});