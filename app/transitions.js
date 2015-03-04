export default function() {
  this.transition(
    this.fromRoute('emberconf.speakers'),
    this.toRoute('emberconf.speaker'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
