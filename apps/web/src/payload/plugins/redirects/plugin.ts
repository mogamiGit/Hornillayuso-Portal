import { revalidateRedirects } from "@/payload/hooks/revalidateRedirects"
import { redirectsPlugin } from "@payloadcms/plugin-redirects"
import { isSuperAdminEnabled } from "@/core/permissions"
export const plugin = redirectsPlugin({
    collections: ['pages', 'posts'],
    redirectTypeFieldOverride: {
      admin: { hidden: !isSuperAdminEnabled() },
      hidden: !isSuperAdminEnabled()
    },
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }
)