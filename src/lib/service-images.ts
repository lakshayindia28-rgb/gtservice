const serviceImages = import.meta.glob('../assets/services/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const slugAliases: Record<string, string[]> = {
  'cloud-devops': ['cloud-and-devops', 'cloud-devops', 'cloud'],
  'qa-testing': ['qa-and-testing', 'qa-testing', 'qa'],
  'data-ai': ['data-and-ai', 'data-ai', 'data'],
  'cybersecurity': ['cyber-security', 'cybersecurity', 'cyber'],
  'mobile-app-development': ['mobile', 'mobile-app-development'],
  'support-maintenance': ['support', 'support-maintenance', 'maintenance'],
  'dedicated-teams': ['teams', 'dedicated-teams', 'team'],
  'api-integrations': ['api', 'api-integrations', 'integrations', 'api-and-integration', 'api-and-integrations', 'api-integration'],
  'additional-services': [
    'additional-services',
    'additional-service',
    'additional-verification-services',
    'additional-verification',
    'additional',
  ],
};

export function getServiceImageUrlByKey(key: string | undefined) {
  if (!key) return undefined;

  const wanted = normalizeSlug(key);
  const entries = Object.entries(serviceImages);

  const keysToTry = [wanted, ...(slugAliases[wanted] ?? [])];

  for (const candidate of keysToTry) {
    for (const [filePath, url] of entries) {
      const fileName = filePath.split('/').pop() || '';
      const baseName = fileName.replace(/\.[^.]+$/, '');
      if (normalizeSlug(baseName) === candidate) return url;
    }
  }

  return undefined;
}

export function getServiceImageUrlFromPath(path: string) {
  const match = path.match(/^\/services\/(.+)$/);
  if (!match) return undefined;
  return getServiceImageUrlByKey(match[1]);
}

export function getServiceSlugFromPath(path: string | undefined | null) {
  if (!path) return undefined;
  const match = path.match(/^\/services\/(.+)$/);
  return match ? normalizeSlug(match[1]) : undefined;
}

export function shouldContainServiceImage(serviceSlug: string | undefined) {
  const wanted = normalizeSlug(serviceSlug ?? '');
  return wanted === 'additional-services' || wanted === 'api-integrations';
}

export function getServiceImageUrlBySlug(serviceSlug: string | undefined) {
  return getServiceImageUrlByKey(serviceSlug);
}
