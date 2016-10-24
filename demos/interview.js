import binary from 'binary-automation';

binary.trackTicks('frxUSDJPY', '1m').print(ticks => [ticks.first(), ticks.last()]);
