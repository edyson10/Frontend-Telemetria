import environment from '../../config/environment'

async function request(endpoint, options = {}) {
  const url = `${environment.apiBaseUrl}${endpoint}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    let errorBody = null

    try {
      errorBody = await response.json()
    } catch {
      errorBody = null
    }

    const error = new Error(
      errorBody?.message ||
        `HTTP error ${response.status}`,
    )

    error.status = response.status
    error.code = errorBody?.code
    error.body = errorBody

    throw error
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

const apiClient = {
  get(endpoint, options = {}) {
    return request(endpoint, {
      ...options,
      method: 'GET',
    })
  },

  post(endpoint, body, options = {}) {
    return request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  },
}

export default apiClient