import * as migration_20250511_001726 from './20250511_001726';
import * as migration_20250609_155545 from './20250609_155545';

export const migrations = [
  {
    up: migration_20250511_001726.up,
    down: migration_20250511_001726.down,
    name: '20250511_001726',
  },
  {
    up: migration_20250609_155545.up,
    down: migration_20250609_155545.down,
    name: '20250609_155545'
  },
];
