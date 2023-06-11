export interface Restaurant {
  name: string;
  phone: string;
  whatsapp: string | null;
  email: string;
  profile_image_url: string | null;
  cover_image_url: string | null;
  cnpj: string;
  street: string;
  street_number: string;
  neighborhood: string;
  city: string;
  uf: string;
  zip_code: string;
  latitude: string | null;
  longitude: string | null;
}
