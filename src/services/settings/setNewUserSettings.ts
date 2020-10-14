import api from '../api';
import IUserSettings from '../../core/dtos/IUserSettingsDTO';

interface RequestDTO {
  tagsDefault: string[];
  urlRemove: string[];
}

class SetNewUserSettingsService {
  async exec(data: RequestDTO): Promise<boolean> {
    console.log(data);
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
