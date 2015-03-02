
export default function() {
  var duration = 500;

  this.transition(
    this.fromRoute('speakers'),
    this.toRoute('speaker'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration }]
    }, {
      use: ['toLeft', { duration }]
    }),
    this.reverse('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration }]
    }, {
      use: ['toRight', { duration }]
    })
  );

  this.transition(
    this.childOf('.speaker-icons'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration, easing: [250, 15] } ]
    })
  );
}
