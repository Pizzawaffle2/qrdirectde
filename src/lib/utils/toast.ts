import { toast } from 'sonner';
import { APIError, ErrorMessages } from './api-error';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastOptions {
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const defaultOptions: ToastOptions = {
  duration: 5000,
};

export function showToast(
  message: string,
  type: ToastType = 'info',
  options: ToastOptions = {}
) {
  const mergedOptions = { ...defaultOptions, ...options };

  switch (type) {
    case 'success':
      toast.success(message, mergedOptions);
      break;
    case 'error':
      toast.error(message, mergedOptions);
      break;
    case 'warning':
      toast.warning(message, mergedOptions);
      break;
    default:
      toast(message, mergedOptions);
  }
}

export function showErrorToast(error: unknown) {
  if (error instanceof APIError) {
    showToast(error.message, 'error');
    return;
  }

  if (error instanceof Error) {
    showToast(error.message, 'error');
    return;
  }

  showToast(ErrorMessages.SERVER_ERROR, 'error');
}

export function showSuccessToast(message: string, options?: ToastOptions) {
  showToast(message, 'success', options);
}

export function showWarningToast(message: string, options?: ToastOptions) {
  showToast(message, 'warning', options);
}

export function showInfoToast(message: string, options?: ToastOptions) {
  showToast(message, 'info', options);
} 