import { RushCMS } from './src/lib/client'
import { rushConfig } from './rush.config'

const rush = new RushCMS({
    baseUrl: 'https://app.rushcms.com',
    apiToken: '2|esc7gRRvk6HfFG6XgfebPzlR8iCoICUwz7A0D3dK',
    siteSlug: 'colegio-imperatrice'
})

async function debug() {
    const navs = rushConfig.locales[rushConfig.defaultLocale].navs
    console.log('Testing TopBar ID:', navs?.topbar)
    try {
        const response = await rush.getMenu(navs?.topbar!)
        console.log('Response Type:', typeof response)
        console.log('Response Keys:', Object.keys(response as object))
        console.log('Response JSON:', JSON.stringify(response, null, 2))
    } catch (e) {
        console.error('Fetch Error:', e)
    }
}

debug()
