export class Restaurant {
  constructor(
    public name: string,
    public cnpj: string,
    public email: string,
    public password: string,
    public status?: string,
    public slug?: string,
    public description?: string,
    public phone?: string,
    public whatsapp?: string,
    public profile_image_url?: string,
    public cover_image_url?: string,
    public street?: string,
    public street_number?: string,
    public neighborhood?: string,
    public city?: string,
    public state?: string,
    public zip_code?: string,
    public latitude?: string,
    public longitude?: string,
    public delivery_time_min?: string,
    public delivery_time_max?: string,
    public delivery_tax?: string,
    public delivery_minimum_price?: string,
    public created_at?: Date
  ) {}

  static fromJson = (json: {
    name: string;
    cnpj: string;
    email: string;
    password: string;
    status?: string;
    slug?: string;
    description?: string;
    phone?: string;
    whatsapp?: string;
    profile_image_url?: string;
    cover_image_url?: string;
    street?: string;
    street_number?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    latitude?: string;
    longitude?: string;
    delivery_time_min?: string;
    delivery_time_max?: string;
    delivery_tax?: string;
    delivery_minimum_price?: string;
    created_at?: Date;
  }) => {
    return new Restaurant(
      json.name,
      json.cnpj,
      json.email,
      json.password,
      json.status,
      json.slug,
      json.description,
      json.phone,
      json.whatsapp,
      json.profile_image_url,
      json.cover_image_url,
      json.street,
      json.street_number,
      json.neighborhood,
      json.city,
      json.state,
      json.zip_code,
      json.latitude,
      json.longitude,
      json.delivery_time_min,
      json.delivery_time_max,
      json.delivery_tax,
      json.delivery_minimum_price,
      json.created_at
    );
  };

  toJson() {
    return {
      name: this.name,
      cnpj: this.cnpj,
      email: this.email,
      password: this.password,
      status: this.status,
      slug: this.slug,
      description: this.description,
      phone: this.phone,
      whatsapp: this.whatsapp,
      profile_image_url: this.profile_image_url,
      cover_image_url: this.cover_image_url,
      street: this.street,
      street_number: this.street_number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code,
      latitude: this.latitude,
      longitude: this.longitude,
      delivery_time_min: this.delivery_time_min,
      delivery_time_max: this.delivery_time_max,
      delivery_tax: this.delivery_tax,
      delivery_minimum_price: this.delivery_minimum_price,
      created_at: this.created_at,
    };
  }
}
