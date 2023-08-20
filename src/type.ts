interface DataPeserta {
  id: string;
  name: string;
  group: string;
  subGroup: number;
  age: string;
}

interface DetailPeserta {
  id: string;
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  province: string;
  city: string;
  university: string;
  faculty: string;
  major: string;
  group: string;
  subGroup: number;
}

interface Token {
  token: string;
}

interface DateObject {
  date: number;
  thisMonth: boolean;
}

export type { DataPeserta, DetailPeserta, Token, DateObject };
