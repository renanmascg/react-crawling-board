export default interface IEnterprisesDTO {
  enterprises: IEnterprise[];
}

interface IEnterprise {
  _id: string;
  userId: string;
  groupId: string;
  name: string;
  tags: string[];
  status: string;
  resultNumber: number;
  createdAt: string;
}
