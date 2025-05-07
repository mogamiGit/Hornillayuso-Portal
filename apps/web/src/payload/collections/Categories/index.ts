import { taxonomiesCollection } from '@nexo-labs/payload-taxonomies'

import { slugField } from '@/payload/fields/slug'

export const Categories = taxonomiesCollection({
  fields: [
    ...slugField(),
  ],
})
