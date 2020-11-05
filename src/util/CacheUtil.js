export function getToken() {
  return window.localStorage.getItem('g_chat_token')
}

export function setToken(token) {
  window.localStorage.setItem("g_chat_token", token)
}

export function removeToken() {
  window.localStorage.removeItem("g_chat_token")
}
