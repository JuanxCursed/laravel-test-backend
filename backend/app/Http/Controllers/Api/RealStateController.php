<?php

namespace App\Http\Controllers\Api;

use App\Api\ApiMessages;
use App\Http\Controllers\Controller;
use App\Http\Requests\RealStateRequest;
use App\RealState;

class RealStateController extends Controller
{
    private $realState;
    public function __construct(RealState $realState)
    {
        $this->realState = $realState;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $realState = $this->realState->with('contract')->paginate('10');
        return response()->json($realState, 200);
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
    public function store(RealStateRequest $request)
    {
        try {
            $data = $request->all();
            $realState = $this->realState->create($data);
            return response()->json(
                ['message' => 'Imóvel Cadastrado com Sucesso!'],
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
     * @param  \App\RealState  $realState
     * @return \Illuminate\Http\Response
     */
    public function show(RealState $realState)
    {
        try {
            $_realState = $this->realState->findOrFail($realState)->first();

            return response()->json($_realState, 201);
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RealState  $realState
     * @return \Illuminate\Http\Response
     */
    public function edit(RealState $realState)
    {
        abort(403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RealState  $realState
     * @return \Illuminate\Http\Response
     */
    public function update(RealStateRequest $request, RealState $realState)
    {
        try {
            $data = $request->all();
            $_realState = $this->realState->findOrFail($realState)->first();
            $_realState->update($data);
            return response()->json(
                [
                    'message' => 'Imóvel atualizado com sucesso!',
                ],
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
     * @param  \App\RealState  $realState
     * @return \Illuminate\Http\Response
     */
    public function destroy(RealState $realState)
    {
        try {
            $_realState = $this->realState->findOrFail($realState)->first();
            $_realState->delete();

            return response()->json(
                [
                    'message' => 'Imóvel Removido com Sucesso!',
                ],
                201
            );
        } catch (\Exception $e) {
            $message = new ApiMessages($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}
