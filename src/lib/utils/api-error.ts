import { PostgrestError } from '@supabase/supabase-js';

export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code?: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export function handleSupabaseError(error: PostgrestError): never {
  // Map Supabase error codes to appropriate status codes
  const statusCode = error.code === '23505' ? 409 : // Unique violation
                    error.code === '23503' ? 400 : // Foreign key violation
                    error.code === '22P02' ? 400 : // Invalid input syntax
                    error.code === '23502' ? 400 : // Not null violation
                    500; // Default to internal server error

  throw new APIError(
    error.message,
    statusCode,
    error.code,
    error.details
  );
}

export function isAPIError(error: unknown): error is APIError {
  return error instanceof APIError;
}

export function handleAPIError(error: unknown): APIError {
  if (isAPIError(error)) {
    return error;
  }

  if (error instanceof Error) {
    return new APIError(
      error.message,
      500,
      'INTERNAL_SERVER_ERROR'
    );
  }

  return new APIError(
    'An unexpected error occurred',
    500,
    'INTERNAL_SERVER_ERROR'
  );
}

// Error messages for common scenarios
export const ErrorMessages = {
  NETWORK_ERROR: 'Unable to connect to the server. Please check your internet connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.',
} as const; 