import api from '../api';
import { IEnterprisesDTO } from '../../core/dtos/ISearchDTO';
import ISendSearchDTO from '../../core/dtos/ISendSearchDTO';

interface IResponseDTO {
  error: boolean;
  status: number;
  searches: IEnterprisesDTO;
}

class SendEnterpriseToSearchService {
  async exec(data: ISendSearchDTO): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      const res = await api.post<IEnterprisesDTO>('/search', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
        searches: res.data,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        status: error.response.status,
        searches: {} as IEnterprisesDTO,
      };
    }
  }
}

export default SendEnterpriseToSearchService;
