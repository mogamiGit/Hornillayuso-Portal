import * as migration_20250511_001726 from './20250511_001726';

export const migrations = [
  {
    up: migration_20250511_001726.up,
    down: migration_20250511_001726.down,
    name: '20250511_001726'
  },
];
