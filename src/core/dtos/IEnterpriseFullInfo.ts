export interface IEnterprisesFullDTO {
  enterprises: IEnterpriseFullInfoDTO[];
}

export interface IEnterpriseFullInfoDTO {
  apiId: string;
  userId: string;
  groupId: string;
  search_metadata: ISearchMetadata;
  organic_result?: IOrganicResult[];
  search_parameters: ISearchParameters;
}

interface ISearchMetadata {
  id: string;
  status: string;
  created_at: string;
  processed_at: string;
}

interface IOrganicResult {
  _id: string;
  position: number;
  title: string;
  link: string;
  displayed_link: string;
  snippet: string;
  isGood?: boolean;
}

interface ISearchParameters {
  q: string;
  google_domain: string;
}
