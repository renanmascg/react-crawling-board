import api from '../api';
import IUserSettings from '../../core/dtos/IUserSettingsDTO';

interface IResponseDTO {
  error: boolean;
  status: number;
}

class IsLoggedService {
  async exec(): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      await api.get<IUserSettings>('/user/validate-token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
      };
    } catch (error) {
      return {
        error: true,
        status: error.response.status,
      };
    }
  }
}

export default IsLoggedService;
