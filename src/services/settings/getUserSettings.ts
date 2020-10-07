import api from '../api';
import IUserSettings from '../../core/dtos/IUserSettingsDTO';

class GetUserSettingsService {
  async exec(): Promise<IUserSettings> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      const res = await api.get<IUserSettings>('/preferences', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      return {
        userId: '',
        tagsDefault: [],
        urlRemove: [],
      };
    }
  }
}

export default GetUserSettingsService;
