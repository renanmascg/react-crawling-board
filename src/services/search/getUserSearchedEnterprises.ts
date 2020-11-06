import api from '../api';
import IEnterprisesDTO from '../../core/dtos/IEnterprises';

interface IResponseDTO {
  error: boolean;
  status: number;
  searches: IEnterprisesDTO;
  email: string;
}

class GetUserSearchedEnterprisesService {
  async exec(): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');
      const user: { email: string } = JSON.parse(
        localStorage.getItem('@Achaki:user') || '',
      );

      const res = await api.get<IEnterprisesDTO>('/search', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
        searches: res.data,
        email: user?.email.substring(0, user?.email.indexOf('@')),
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        status: error.response.status,
        searches: {} as IEnterprisesDTO,
        email: '',
      };
    }
  }
}

export default GetUserSearchedEnterprisesService;
