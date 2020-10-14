import { toast } from 'react-toastify';

interface IShowToast {
  value: boolean;
  successMessage: string;
  errorMessage: string;
}

export function showToast({
  value,
  successMessage,
  errorMessage,
}: IShowToast): void {
  if (value) {
    toast.success(successMessage, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toast-signin',
    });
  } else {
    toast.warn(errorMessage, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toast-signin',
    });
  }
}
