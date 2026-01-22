export function renderRichText(node: any): string {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(renderRichText).join('');

    switch (node.type) {
        case 'doc':
            return renderRichText(node.content);
        case 'paragraph':
            return `<p class="mb-4 leading-relaxed text-gray-700">${renderRichText(node.content)}</p>`;
        case 'text':
            let text = node.text || '';
            if (node.marks) {
                node.marks.forEach((mark: any) => {
                    if (mark.type === 'bold') text = `<strong class="font-bold text-gray-900">${text}</strong>`;
                    if (mark.type === 'italic') text = `<em class="italic">${text}</em>`;
                    if (mark.type === 'link') text = `<a href="${mark.attrs.href}" class="text-[#009640] hover:underline" target="_blank" rel="noopener noreferrer">${text}</a>`;
                    if (mark.type === 'underline') text = `<u class="underline">${text}</u>`;
                });
            }
            return text;
        case 'heading':
            const level = node.attrs?.level || 2;
            const sizes: Record<number, string> = { 1: 'text-4xl', 2: 'text-3xl', 3: 'text-2xl', 4: 'text-xl' };
            const sizeClass = sizes[level] || 'text-lg';
            return `<h${level} class="${sizeClass} font-bold text-[#009640] mt-8 mb-4">${renderRichText(node.content)}</h${level}>`;
        case 'bulletList':
            return `<ul class="list-disc pl-5 mb-4 space-y-2">${renderRichText(node.content)}</ul>`;
        case 'orderedList':
            return `<ol class="list-decimal pl-5 mb-4 space-y-2">${renderRichText(node.content)}</ol>`;
        case 'listItem':
            return `<li class="pl-1">${renderRichText(node.content)}</li>`;
        case 'blockquote':
            return `<blockquote class="border-l-4 border-[#009640] pl-4 italic text-gray-600 my-6">${renderRichText(node.content)}</blockquote>`;
        case 'image':
             return `<img src="${node.attrs.src}" alt="${node.attrs.alt || ''}" class="w-full h-auto rounded-lg my-8" />`;
        case 'customBlock':
            console.log('Found customBlock:', node.attrs);

            if (node.attrs.id === 'custom_link-banner') {
                const { url, image, title } = node.attrs.config;
                const imageUrl = image && !image.startsWith('http') 
                    ? `https://rush-cms.s3.us-east-2.amazonaws.com/${image}` 
                    : image;

                return `
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg my-8 not-prose max-w-4xl mx-auto border border-gray-100">
                      <div class="grid grid-cols-1 md:grid-cols-2">
                         <div class="relative aspect-square lg:border-r lg:border-primary/10">
                             <img src="${imageUrl}" alt="${title}" class="absolute inset-0 w-full h-full object-cover my-0" />
                         </div>
                         <div class="p-8 flex flex-col items-center justify-center text-center">
                             <h3 class="text-2xl lg:text-4xl font-bold mb-2 text-[#009640]">${title}</h3>
                             <a href="${url}" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-[#009640] hover:bg-green-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
                                 ACESSAR
                             </a>
                         </div>
                      </div>
                    </div>
                `;
            }

            if (node.attrs.id === 'custom_text-image') {
                const { image, title, content, role } = node.attrs.config;
                const imageUrl = image && !image.startsWith('http') 
                    ? `https://rush-cms.s3.us-east-2.amazonaws.com/${image}` 
                    : image;

                return `
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 items-start">
                        <div class="md:col-span-1">
                            <div class="relative overflow-hidden rounded-xl shadow-lg group">
                                <img src="${imageUrl}" alt="${title}" class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 my-0" />
                                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </div>
                        <div class="md:col-span-2">
                            <h3 class="text-2xl md:text-3xl font-bold text-[#009640] mb-2 mt-0">${title}</h3>
                            ${role ? `<span class="inline-block bg-[#009640]/10 text-[#009640] px-3 py-1 rounded-full text-sm font-medium mb-4">${role}</span>` : ''}
                            <div class="prose prose-lg prose-green text-gray-600 max-w-none">
                                ${renderRichText(content)}
                            </div>
                        </div>
                    </div>
                `;
            }
            return '';
        case 'horizontalRule':
            return '<hr class="my-8 border-gray-100" />';
        default:
            return node.content ? renderRichText(node.content) : '';
    }
}
