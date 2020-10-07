import api from '../api';
import IUserSettings from '../../core/dtos/IUserSettingsDTO';

class SetNewUserSettingsService {
  async exec(data: IUserSettings): Promise<boolean> {
    try {
      const token = localStorage.getItem('@Achaki:token');

      await api.put<IUserSettings>(
        '/preferences',
        {
          tagsDefault: data.tagsDefault,
          urlRemove: data.urlRemove,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default SetNewUserSettingsService;
