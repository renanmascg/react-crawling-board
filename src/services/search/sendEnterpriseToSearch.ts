import api from '../api';
import ISendSearchDTO from '../../core/dtos/ISendSearchDTO';

interface IResponseDTO {
  error: boolean;
  status: number;
}

class SendEnterpriseToSearchService {
  async exec(data: ISendSearchDTO): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      await api.post('/search', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        status: error.response.status,
      };
    }
  }
}

export default SendEnterpriseToSearchService;
