import binary from 'binary-automation';

binary.getTickHistory('R100').print();

binary.trackLastTicks('R100', 20).print();
binary.trackLastTicks('R100', '60s').print();
binary.trackLastTicks('R100', '10m').print();
