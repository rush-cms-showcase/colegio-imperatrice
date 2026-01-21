export const CONTACT = {
  phone: {
    display: '(12) 3883-9678',
    link: 'tel:+551238839678',
    raw: '+551238839678',
  },
  whatsapp: {
    display: '(12) 98294-2048',
    link: 'https://wa.me/5512982942048',
    number: '5512982942048',
  },
  email: {
    general: 'contato@colegioimperatrice.com.br',
    sac: 'sac@colegioimperatrice.com.br',
  },
  address: {
    street: 'Rua Ilha Bela, 67',
    neighborhood: 'Sumaré',
    city: 'Caraguatatuba',
    state: 'SP',
    zipCode: '11665-230',
    full: 'Rua Ilha Bela, 67 - Sumaré, Caraguatatuba - SP, 11665-230',
    googleMaps: 'https://maps.google.com/?q=Rua+Ilha+Bela,+67+Sumaré+Caraguatatuba+SP',
  },
  social: {
    facebook: 'https://www.facebook.com/colegioimperatrice',
    instagram: 'https://www.instagram.com/colegioimperatrice',
  },
} as const

export type ContactInfo = typeof CONTACT
