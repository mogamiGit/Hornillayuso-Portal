import * as migration_20250510_001621 from './20250510_001621';

export const migrations = [
  {
    up: migration_20250510_001621.up,
    down: migration_20250510_001621.down,
    name: '20250510_001621'
  },
];
