export default function() {
  this.transition(
    this.fromRoute('emberconf.speakers'),
    this.toRoute('emberconf.speaker'),
    this.use('explode', {
      pickNew: 'img',
      use: 'toUp'
    }, {
      use: 'toLeft'
    }),
    this.reverse('toRight')
  );
}
