interface DataPeserta {
  id: string;
  name: string;
  group: string;
  subGroup: number;
  age: string;
}

interface Token {
  token: string;
}

export type { DataPeserta, Token };
