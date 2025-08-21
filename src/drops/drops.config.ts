export interface DropConfig {
  slug: string;
  name: string;
  collection: string;
  logo: string;
  background: string;
}

export const DROPS: DropConfig[] = [
  {
    slug: 'skull-ny',
    name: 'Skull-NY',
    collection: 'gorras_skull_ny',
    logo: '/drops/skull-ny/logo.jpeg',
    background: '/drops/skull-ny/background4.png',
  },
  {
    slug: 'skull-ny-2',
    name: 'Skull-NY-2',
    collection: 'gorras_skull_ny',
    logo: '/drops/skull-ny/logo.jpeg',
    background: '/drops/skull-ny/background3.jpg',
  },
];
