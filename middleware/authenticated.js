export default function ({ store, redirect }) {
  if (!store.state.auth.requestToken) {
    return redirect('/login')
  }
}
