import type { APIRoute } from 'astro'
import { rush } from '@/lib/rush'

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json()
        const { formKey, data } = body

        if (!formKey || !data) {
            return new Response(JSON.stringify({ error: 'Missing formKey or data' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        // Submit to Rush CMS API (server-side, using the configured token)
        await rush.forms.submit(formKey, data)

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error: any) {
        console.error('API Form Submission Error:', error)
        return new Response(JSON.stringify({ error: error.message || 'Failed to submit form' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}
