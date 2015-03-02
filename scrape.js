/* global $ */

$('.speakers-list-inner').toArray().map(function(elt){
  var $elt = $(elt);
  return {
    id: $elt.find('> div').attr('id'),
    imageURL: $elt.find('img').attr('src'),
    twitterURL: $elt.find('h6 a').attr('href'),
    twitterHandler: $elt.find('h6 a').text(),
    name: $elt.find('h3').text(),
    bio: $elt.find('.top p')[0].innerHTML,
    session: $elt.find('h4').text().replace('Session: ', '')
  };
});
