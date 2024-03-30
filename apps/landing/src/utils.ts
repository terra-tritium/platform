import { type AxiosError, isAxiosError } from './lib/api'

export const handleError = (
  error: Error | AxiosError,
  defaultMessage?: string,
) => {
  if (isAxiosError(error)) {
    if (typeof error.response?.data === 'string') {
      return error.response.data
    }

    if (typeof error.response?.data.message === 'object') {
      const message: string[] = []
      const messages = error.response?.data.message

      for (const k in messages) {
        message.push(messages[k])
      }

      return message.join(' ')
    }

    return (
      (error.response?.data.message || defaultMessage) ??
      'Internal Server Error'
    )
  }

  if (error instanceof Error) {
    return error.message
  }

  return defaultMessage ?? 'Internal Server Error'
}
