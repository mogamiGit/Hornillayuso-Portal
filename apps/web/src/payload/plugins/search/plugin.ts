import { searchPlugin } from '@payloadcms/plugin-search'
import { searchFields } from './fieldOverrides'
import { beforeSyncWithSearch } from './beforeSync'

export const plugin = searchPlugin({
  collections: ['posts'],
  beforeSync: beforeSyncWithSearch,
  searchOverrides: {
    fields: ({ defaultFields }) => {
      return [...defaultFields, ...searchFields]
    },
  },
})
