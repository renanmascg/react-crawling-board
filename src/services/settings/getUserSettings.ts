import api from '../api';
import IUserSettings from '../../core/dtos/IUserSettingsDTO';

interface IResponseDTO {
  error: boolean;
  status: number;
  userSettings: IUserSettings;
}

class GetUserSettingsService {
  async exec(): Promise<IResponseDTO> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      const res = await api.get<IUserSettings>('/preferences', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        error: false,
        status: 200,
        userSettings: res.data,
      };
    } catch (error) {
      return {
        error: true,
        status: error.response.status,
        userSettings: {
          userId: '',
          tagsDefault: [],
          urlRemove: [],
        },
      };
    }
  }
}

export default GetUserSettingsService;
