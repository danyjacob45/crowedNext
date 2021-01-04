/** Store */
export interface IStore {
  id: number;
  slug: string;
  store_name: string;
  store_logo: string;
  company_name: string;
  company_website: string;
  company_phone: string;
  official_company_name: string;
  ceo_name: string;
  ceo_surname: string;
  description: string;
  type_of_activity: string;
  is_approved: number;
  status: "vip" | null;
  created_at: Date;
  updated_at: Date;
  document?: any;
  bank_info?: any;
  address_info?: any;
  logo_url: string;
}
