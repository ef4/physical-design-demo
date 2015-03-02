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

console.log(JSON.stringify($('.sponsor').toArray().map(function(elt){
  var $elt = $(elt);
  return {
    url: $elt.find('a').attr('href'),
    imageURL: $elt.find('img').attr('src'),
    description: $elt.find('.description')[0].innerHTML,
    name: $elt.find('img').attr('alt')
  };
}), null, 2));
