<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RealStateRequest extends FormRequest
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
        $emailValidation = 'required|email|unique:real_states,email';
        if ($isUpdate) {
            $emailValidation .= ',' . $this->route('real_state')->id;
        }
        return [
            'email' => $emailValidation,
            'street' => 'required',
            'district' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip_code' => 'required',
        ];
    }
}
