import api from '../api';
import { IEnterprisesFullDTO } from '../../core/dtos/IEnterpriseFullInfo';

interface IResponseDTO {
  error: boolean;
  status: number;
  enterprises: IEnterprisesFullDTO;
}

class GetEnterpriseFullInfo {
  async exec(id: string): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      const res = await api.get<IEnterprisesFullDTO>(`/search/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
        enterprises: res.data,
      };
    } catch (error) {
      return {
        error: true,
        status: error.response.status,
        enterprises: { enterprises: [] },
      };
    }
  }
}

export default GetEnterpriseFullInfo;
