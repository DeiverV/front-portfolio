export interface IGetExchangesPayload {
  base?: string
  symbols?: string
  date?: string | 'latest'
}

export interface IGetExchangesResponse {
  base: string
  date: string
  rates: Record<string, number>
}
