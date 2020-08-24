<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContractRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $isUpdate = request()->isMethod('put') || request()->isMethod('patch');
        $emailValidation = 'required|email|unique:contracts,email';
        if ($isUpdate) {
            $emailValidation .= ',' . $this->route('contract')->id;
        }
        return [
            'email' => $emailValidation,
            'full_name' => 'required',
            'person_type' => 'required',
            'document' => 'required|min:11|max:15',
            'real_state' => 'unique',
        ];
    }
}
