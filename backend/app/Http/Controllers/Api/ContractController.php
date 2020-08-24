<?php

namespace App\Http\Controllers\Api;

use App\Api\ApiMessages;
use App\Contract;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContractRequest;

class ContractController extends Controller
{
    private $contract;
    public function __construct(Contract $contract)
    {
        $this->contract = $contract;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contract = $this->contract->paginate('10');
        return response()->json($contract, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort(403);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContractRequest $request)
    {
        try {
            $data = $request->all();
            $contract = $this->contract->create($data);
            return response()->json(
                ['message' => 'Contrato Cadastrado com Sucesso!'],
                201
            );
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function show(Contract $contract)
    {
        try {
            $_contract = $this->contract->findOrFail($contract)->first();

            return response()->json($_contract, 201);
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function edit(Contract $contract)
    {
        abort(403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function update(ContractRequest $request, Contract $contract)
    {
        try {
            $data = $request->all();
            $_contract = $this->contract->findOrFail($contract)->first();
            $_contract->update($data);
            return response()->json(
                ['message' => 'Contrato atualizado com Sucesso!'],
                201
            );
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contract $contract)
    {
        try {
            $_contract = $this->contract->findOrFail($contract)->first();
            $_contract->delete();

            return response()->json(
                [
                    'message' => 'Contrato Removido com Sucesso!',
                ],
                201
            );
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}
