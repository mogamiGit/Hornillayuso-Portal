import { taxonomiesCollection } from '@nexo-labs/payload-taxonomies'
import { isAdminHidden } from '@/core/permissions'
import { slugField } from '@/payload/fields/slug'

export const Categories = taxonomiesCollection({
  fields: [
    ...slugField(),
  ],
  admin: {
    hidden: isAdminHidden,
  },
})
