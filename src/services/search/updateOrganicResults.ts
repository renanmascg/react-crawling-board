import api from '../api';
import { IEnterpriseFullInfoDTO } from '../../core/dtos/IEnterpriseFullInfo';

interface IRequestDTO {
  apiId: string;
  organicId: string;
  isGood: boolean;
}

interface IResponseDTO {
  error: boolean;
  status: number;
  enterprise: IEnterpriseFullInfoDTO;
}

class UpdateOrganicResult {
  async exec(data: IRequestDTO): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      const res = await api.put<IEnterpriseFullInfoDTO>(`/search`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
        enterprise: res.data,
      };
    } catch (error) {
      return {
        error: true,
        status: error.response.status,
        enterprise: {} as IEnterpriseFullInfoDTO,
      };
    }
  }
}

export default UpdateOrganicResult;
