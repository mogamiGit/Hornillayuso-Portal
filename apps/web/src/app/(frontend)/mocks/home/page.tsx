import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 60

export default function Page() {
      return (
            <article className="pt-16 pb-24">
                  <header className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Hornillayuso Portal</h1>
                        <p className="text-lg text-gray-600">A simplified mock version for static component testing</p>
                  </header>
            </article>
      )
}

export const metadata: Metadata = {
      title: 'Hornillayuso Portal - Mock',
      description: 'A simplified mock version for testing static components',
}
