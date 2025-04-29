interface PlatformIconsType {
  PC: string;
  Xbox: string;
  PlayStation: string;
  Nintendo: string;
}

interface MetacriticPlatform {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface parent_platforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
interface ShortScreenshots {
  id: number;
  image: string;
}

interface GameDescription {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  parent_plaforms: parent_platforms[];
  short_screenshots: ShortScreenshots[];
}
