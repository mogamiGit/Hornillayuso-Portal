import { COLLECTION_SLUG_PDF } from "@/core/collections-slugs"
import { addContentHashToFile } from "@/payload/hooks/addContentHashToFileHook"
import { CollectionConfig } from "payload"
import { buildPermissionsCollection } from "@nexo-labs/payload-stripe-inventory/access"

export const Pdf: CollectionConfig = {
  slug: COLLECTION_SLUG_PDF,
  labels: {
    singular: 'PDF',
    plural: 'PDFs',
  },
  admin: {
    useAsTitle: 'title',
    components: {
      views: {
        list: {
          actions: [
          ],
        },
      },
    }
  },
  hooks: {
    beforeOperation: [addContentHashToFile]
  },
  fields: [
    {
      label: 'Título',
      name: 'title',
      type: 'text',
      required: true,
    }
  ],
}
