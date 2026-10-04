export const site = {
  name: 'Fortis AI',
  tagline: 'Practical AI solutions for Australian business.',
  url: import.meta.env.VITE_SITE_URL || 'https://ai.fortisanalytica.com.au',
  bookingUrl: 'https://calendly.com/redmond-fortisanalytica/30min' ,
  email: 'info@fortisanalytica.com.au',
  phone: '02 8015 2987',
  legalEntity: 'Fortis Analytica Pty Ltd',
  abn: '26 691 076 525',
  address: '1 Lucinda Ave, Norwest NSW 2153, Australia',
}

export const services = [
  { title: 'AI Opportunity Audit', price: 'FREE - Limited Time', href: '/ai-opportunity-audit', body: 'A practical assessment of where AI and automation can help your business work better.' },
  { title: 'AI Automation & Implementation', price: 'From $2,500 + GST', href: '/ai-automation', body: 'We design, build and test workflows that connect the systems your team already uses.' },
  { title: 'AI Business Transformation Sprint', price: '$4,950 + GST', href: '/transformation-sprint', body: 'A focused 2–3 week engagement to move from opportunity to working implementation.' },
  { title: 'AI Operations Partner', price: 'From $995 + GST/month', href: '/ai-operations', body: 'Ongoing monitoring, improvement and practical support for the systems you put in place.' },
]

export const nav = [
  { label: 'Services', href: '/services' }, { label: 'Industries', href: '/industries' },
  { label: 'Methodology', href: '/methodology' }, { label: 'Responsible AI', href: '/responsible-ai' },
  { label: 'Pricing', href: '/pricing' }, { label: 'About', href: '/about' },
]
