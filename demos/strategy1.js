import binary from 'binary-automation';

binary
  .contract({
    type: 'rise/fall',
    candleInterval: '1m',
    duration: '5t',
    payout: 'stake',
  })
  .when({
    'open': ''
  })
  repeat();
