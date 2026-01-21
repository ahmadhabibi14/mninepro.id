export type SiteObj = {
  path: string,
  priority: 'low' | 'medium' | 'high';
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: string | Date | unknown;
}

export const SitePriorityMap: Record<string, string> = {
  'low': '0.5',
  'medium': '0.7',
  'high': '1.0'
}

export const StaticPages: SiteObj[] = [
  {
    path: '/',
    priority: 'high',
    changefreq: 'never',
    lastModified: '2026-01-21T02:29:07.483Z'
  },
  {
    path: '/about',
    priority: 'high',
    changefreq: 'yearly',
    lastModified: '2026-01-21T02:29:07.483Z'
  },
  {
    path: '/services',
    priority: 'high',
    changefreq: 'yearly',
    lastModified: '2026-01-21T02:29:07.483Z'
  },
  {
    path: '/events',
    priority: 'high',
    changefreq: 'monthly'  
  },
  {
    path: '/contact',
    priority: 'medium',
    changefreq: 'yearly',
    lastModified: '2026-01-21T02:29:07.483Z'
  }
]