// types.ts
export type NavProp = {
  nav: string;
};

export type GoFunctionProp = {
  go: (path: string) => void;
};

export type UserInfo = {
  photo_200?: string;
  photo_max_orig?: string;
  first_name?: string;
  last_name?: string;
  city?: {
    title?: string;
  };
  country?: {
    title?: string;
  };
  sex: string;
  is_closed: boolean;
  bdate: string;
  bdate_visibility: number;
};

export type NasaItemData = {
  href: string;
  data: {
    center: string;
    title: string;
    nasa_id: string;
    date_created: string;
    keywords: string[];
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string;
  }[];
  links: {
    href: string;
    rel: string;
    render: string;
  }[];
};
