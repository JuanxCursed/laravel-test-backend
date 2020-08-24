export default function ({ $axios }) {
  $axios.onError((error) => {
    console.log('report error to stack trace server')
    throw error.response
  })
}
