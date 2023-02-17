export interface SendSmsMutationType {
  success: boolean;
  alert: string;
  data: {
    certification_code: string;
  };
}

export interface SendSmsMutationVariablesType {
  phone: number;
  is_join: 1 | 0;
}

export interface CertSmsMutationType {
  success: boolean;
  alert: string;
}

export interface CertSmsMutationVariablesType {
  phone: number;
  code: number;
}

export interface CommonMutationType {
  success: boolean;
  alert: string;
}

export interface RegisterMutationType {
  success: boolean;
  alert: string;
  data: {
    user_id: number;
    token: {
      access_token: string;
      refresh_token: string;
    };
  };
}

export interface RegisterMutationVariablesType {
  email: string;
  password: string;
  name: string;
  phone: number;
  code: number;
  use_alarm: 1 | 0;
}

export interface FindIdMutationVariablesType {
  name: string;
  phone: number;
  code: number;
}

export interface FindPasswordMutationVariablesType {
  email: string;
  phone: number;
  code: number;
  password: string;
  password_check: string;
}

export interface LoginMutationType {
  success: boolean;
  alert: string;
  data: {
    user_id: number;
    token: {
      token_type: string;
      expires_in: number;
      access_token: string;
      refresh_token: string;
    };
  };
}

export interface LoginMutationVariablesType {
  email: string;
  password: string;
}

export interface MypageMutationType {
  user_name: string;
  user_provider: string;
  phone: number;
  user_car: string;
  user_services: [
    {
      id: number;
      code: string | number;
      created_at: string | number;
      start_date: string | number;
      end_date: string | number;
    }
  ];
  user_estimate_services: [
    {
      id: number;
      code: string | number;
      start_date: string | number;
      created_at: string | number;
      status: number;
    }
  ];
  user_service_count: number;
  user_estimate_service_count: number;
  use_alarm: number;
  user_point: number;
}

export interface ServicePageMutationType {
  data: [
    {
      code: number;
      created_at: number;
      end_date: number;
      id: number;
      start_date: number;
      type: string;
      date?: number;
      handleDate?: () => void;
    }
  ];
}

export interface ServiceDataPageMutationType {
  code: number;
  created_at: number;
  end_date: number;
  id: number;
  start_date: number;
  type: string;
  date?: number;
  handleDate?: () => void;
}

export interface PointListMutationProps {
  id: number;
  type: number;
  point: number;
  reason: string;
  created_at: string;
  remain_point: string;
}

export interface ServiceDetailMutationProps {
  id: number;
  type: string;
  code: string;
  created_at: stringstring;
  start_date: string;
  end_date: string;
  car_name: string;
  car_number: string;
  phone: string;
  region: string;
  contents: string;
  use_option: number;
  pickup_price: number;
  default_price: number;
  purchase_date: string;
  payment_method: string;
  original_price: number;
  discount_price: number;
  use_point: number;
  total_price: number;
  add_point: number;
  status: number;
  is_repair: number;
  is_manage: number;
  repair_status: number;
  manage_status: number;
  options: [
    {
      id: number;
      category: string;
      option_name: string;
      price: number;
    }
  ];
  wash: {
    id: number;
    price: number;
    add_price: number;
    is_wax: number;
  };
  inspection: {
    id: number;
    price: number;
  };
  manage: {
    id: number;
    manage_price: number;
    use_point: number;
    add_point: number;
    payment_method: string;
  };
}

export interface MyCarInfoType {
  id: number;
  number: string;
  size: string;
  car_type: string;
  user_car_year: number;
  maker_national: "DOMESTIC" | "FOREIGN";
  fuel_type: string;
}

export interface UserCheckType {
  car: {
    car_id: number;
    car_number: string;
  } | null;
  user_id: number;
  user_car: MyCarInfoType;
}

export interface UserCheckRequestType {
  success: boolean;
  alert: string;
  data?: UserCheckType;
}

export interface MainMutationProps {
  main_banners: [
    {
      id: number;
      image_url: string;
      link: string;
    }
  ];
  middle_banners: [
    {
      id: number;
      image_url: string;
      link: string;
    }
  ];
  notices: [
    {
      id: number;
      category: string;
      title: string;
    }
  ];
  qnas: null;
  faqs: [
    {
      id: number;
      category: string;
      question: string;
    }
  ];
}

export interface StorageDetailPayloadType {
  name?: string;
  phone?: number;
  contents?: string;
  date?: StorageDateType;
  engineOil?: EngineOilType;
  inspection?: BasePriceType;
  storage?: BasePriceType;
  pickup?: BasePriceType;
  wash?: WashPayloadType;
  carInfo?: MyCarInfoType;
}
