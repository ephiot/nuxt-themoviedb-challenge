import Auth from '@/services/Auth'

export default function ({ app, store, redirect }) {
  console.log(
    'Middleware',
    {
      requestToken: app.$storage.getUniversal('requestToken'),
      sessionId: app.$storage.getUniversal('sessionId')
    }
  )
  if (!Auth.isAuthenticated(app.$storage)) {
    return redirect('/login')
  }
}
