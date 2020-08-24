export default ({ data }) => {
  let _errors = []
  Object.keys(data.errors).map((key) => {
    data.errors[key].map((err) => _errors.push(err))
  })
  return { errors: _errors, validator: data.errors }
}
