import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/pt_BR.json'

import { cpf, cnpj } from 'cpf-cnpj-validator'

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  })
})

extend('cpfCnpj', {
  validate(value) {
    return {
      required: true,
      valid: value.length > 11 ? cnpj.isValid(value) : cpf.isValid(value),
    }
  },
  message: '{_field_} não é válido',
  computesRequired: true,
})
