
const matrix = [
  {
    channel: 'nightly',
    tag: 'nightly',
    calendar: 'nightly',
  },
  {
    channel: 'beta-experimental-traffic',
    calendar: 'beta',
  },
  {
    channel: 'stable',
    tag: 'latest',
    calendar: 'stable',
  },
  {
    channel: 'lts',
    calendar: 'lts',
  }
];

process.stdout.write(matrix);
