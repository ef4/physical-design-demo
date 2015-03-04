export default function() {

  var duration = 500;

  this.transition(
    this.fromRoute('emberconf.speakers'),
    this.toRoute('emberconf.speaker'),
    this.use('explode', {
      pickNew: 'img',
      use: ['toUp', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('toRight')
  );
}
