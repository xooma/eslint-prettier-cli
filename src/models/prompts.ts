export default [
  {
    type: 'checkbox',
    name: 'configs',
    message: 'Quelles configurations souhaitez-vous appliquer ?',
    required: true,
    choices: [
      { name: 'Angular', value: 'angular' },
      { name: 'NestJS', value: 'nest' },
      { name: 'TypeScript', value: 'ts' } ],
  },
];