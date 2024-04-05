import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { SignDoc } from "./types/cosmos/tx/v1beta1/tx";
import { SignDocDirectAux } from "./types/cosmos/tx/v1beta1/tx";
import { TxBody } from "./types/cosmos/tx/v1beta1/tx";
import { ModeInfo_Single } from "./types/cosmos/tx/v1beta1/tx";
import { TxRaw } from "./types/cosmos/tx/v1beta1/tx";
import { AuxSignerData } from "./types/cosmos/tx/v1beta1/tx";
import { GetBlockWithTxsRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeAminoRequest } from "./types/cosmos/tx/v1beta1/service";
import { Fee } from "./types/cosmos/tx/v1beta1/tx";
import { GetBlockWithTxsResponse } from "./types/cosmos/tx/v1beta1/service";
import { BroadcastTxResponse } from "./types/cosmos/tx/v1beta1/service";
import { Tip } from "./types/cosmos/tx/v1beta1/tx";
import { SimulateRequest } from "./types/cosmos/tx/v1beta1/service";
import { SimulateResponse } from "./types/cosmos/tx/v1beta1/service";
import { SignerInfo } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxsEventResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeAminoResponse } from "./types/cosmos/tx/v1beta1/service";
import { ModeInfo_Multi } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxResponse } from "./types/cosmos/tx/v1beta1/service";
import { Tx } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeAminoRequest } from "./types/cosmos/tx/v1beta1/service";
import { ModeInfo } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxsEventRequest } from "./types/cosmos/tx/v1beta1/service";
import { BroadcastTxRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeAminoResponse } from "./types/cosmos/tx/v1beta1/service";
import { AuthInfo } from "./types/cosmos/tx/v1beta1/tx";
export { SignDoc, SignDocDirectAux, TxBody, ModeInfo_Single, TxRaw, AuxSignerData, GetBlockWithTxsRequest, TxDecodeRequest, TxDecodeAminoRequest, Fee, GetBlockWithTxsResponse, BroadcastTxResponse, Tip, SimulateRequest, SimulateResponse, SignerInfo, GetTxsEventResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoResponse, ModeInfo_Multi, GetTxResponse, Tx, GetTxRequest, TxEncodeAminoRequest, ModeInfo, GetTxsEventRequest, BroadcastTxRequest, TxDecodeResponse, TxDecodeAminoResponse, AuthInfo };
type sendSignDocParams = {
    value: SignDoc;
    fee?: StdFee;
    memo?: string;
};
type sendSignDocDirectAuxParams = {
    value: SignDocDirectAux;
    fee?: StdFee;
    memo?: string;
};
type sendTxBodyParams = {
    value: TxBody;
    fee?: StdFee;
    memo?: string;
};
type sendModeInfo_SingleParams = {
    value: ModeInfo_Single;
    fee?: StdFee;
    memo?: string;
};
type sendTxRawParams = {
    value: TxRaw;
    fee?: StdFee;
    memo?: string;
};
type sendAuxSignerDataParams = {
    value: AuxSignerData;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockWithTxsRequestParams = {
    value: GetBlockWithTxsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeRequestParams = {
    value: TxDecodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeAminoRequestParams = {
    value: TxDecodeAminoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendFeeParams = {
    value: Fee;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockWithTxsResponseParams = {
    value: GetBlockWithTxsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendBroadcastTxResponseParams = {
    value: BroadcastTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTipParams = {
    value: Tip;
    fee?: StdFee;
    memo?: string;
};
type sendSimulateRequestParams = {
    value: SimulateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSimulateResponseParams = {
    value: SimulateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSignerInfoParams = {
    value: SignerInfo;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxsEventResponseParams = {
    value: GetTxsEventResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeRequestParams = {
    value: TxEncodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeResponseParams = {
    value: TxEncodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeAminoResponseParams = {
    value: TxEncodeAminoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendModeInfo_MultiParams = {
    value: ModeInfo_Multi;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxResponseParams = {
    value: GetTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxParams = {
    value: Tx;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxRequestParams = {
    value: GetTxRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeAminoRequestParams = {
    value: TxEncodeAminoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendModeInfoParams = {
    value: ModeInfo;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxsEventRequestParams = {
    value: GetTxsEventRequest;
    fee?: StdFee;
    memo?: string;
};
type sendBroadcastTxRequestParams = {
    value: BroadcastTxRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeResponseParams = {
    value: TxDecodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeAminoResponseParams = {
    value: TxDecodeAminoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAuthInfoParams = {
    value: AuthInfo;
    fee?: StdFee;
    memo?: string;
};
type signDocParams = {
    value: SignDoc;
};
type signDocDirectAuxParams = {
    value: SignDocDirectAux;
};
type txBodyParams = {
    value: TxBody;
};
type modeInfoSingleParams = {
    value: ModeInfo_Single;
};
type txRawParams = {
    value: TxRaw;
};
type auxSignerDataParams = {
    value: AuxSignerData;
};
type getBlockWithTxsRequestParams = {
    value: GetBlockWithTxsRequest;
};
type txDecodeRequestParams = {
    value: TxDecodeRequest;
};
type txDecodeAminoRequestParams = {
    value: TxDecodeAminoRequest;
};
type feeParams = {
    value: Fee;
};
type getBlockWithTxsResponseParams = {
    value: GetBlockWithTxsResponse;
};
type broadcastTxResponseParams = {
    value: BroadcastTxResponse;
};
type tipParams = {
    value: Tip;
};
type simulateRequestParams = {
    value: SimulateRequest;
};
type simulateResponseParams = {
    value: SimulateResponse;
};
type signerInfoParams = {
    value: SignerInfo;
};
type getTxsEventResponseParams = {
    value: GetTxsEventResponse;
};
type txEncodeRequestParams = {
    value: TxEncodeRequest;
};
type txEncodeResponseParams = {
    value: TxEncodeResponse;
};
type txEncodeAminoResponseParams = {
    value: TxEncodeAminoResponse;
};
type modeInfoMultiParams = {
    value: ModeInfo_Multi;
};
type getTxResponseParams = {
    value: GetTxResponse;
};
type txParams = {
    value: Tx;
};
type getTxRequestParams = {
    value: GetTxRequest;
};
type txEncodeAminoRequestParams = {
    value: TxEncodeAminoRequest;
};
type modeInfoParams = {
    value: ModeInfo;
};
type getTxsEventRequestParams = {
    value: GetTxsEventRequest;
};
type broadcastTxRequestParams = {
    value: BroadcastTxRequest;
};
type txDecodeResponseParams = {
    value: TxDecodeResponse;
};
type txDecodeAminoResponseParams = {
    value: TxDecodeAminoResponse;
};
type authInfoParams = {
    value: AuthInfo;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendSignDoc({ value, fee, memo }: sendSignDocParams): Promise<DeliverTxResponse>;
    sendSignDocDirectAux({ value, fee, memo }: sendSignDocDirectAuxParams): Promise<DeliverTxResponse>;
    sendTxBody({ value, fee, memo }: sendTxBodyParams): Promise<DeliverTxResponse>;
    sendModeInfo_Single({ value, fee, memo }: sendModeInfo_SingleParams): Promise<DeliverTxResponse>;
    sendTxRaw({ value, fee, memo }: sendTxRawParams): Promise<DeliverTxResponse>;
    sendAuxSignerData({ value, fee, memo }: sendAuxSignerDataParams): Promise<DeliverTxResponse>;
    sendGetBlockWithTxsRequest({ value, fee, memo }: sendGetBlockWithTxsRequestParams): Promise<DeliverTxResponse>;
    sendTxDecodeRequest({ value, fee, memo }: sendTxDecodeRequestParams): Promise<DeliverTxResponse>;
    sendTxDecodeAminoRequest({ value, fee, memo }: sendTxDecodeAminoRequestParams): Promise<DeliverTxResponse>;
    sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse>;
    sendGetBlockWithTxsResponse({ value, fee, memo }: sendGetBlockWithTxsResponseParams): Promise<DeliverTxResponse>;
    sendBroadcastTxResponse({ value, fee, memo }: sendBroadcastTxResponseParams): Promise<DeliverTxResponse>;
    sendTip({ value, fee, memo }: sendTipParams): Promise<DeliverTxResponse>;
    sendSimulateRequest({ value, fee, memo }: sendSimulateRequestParams): Promise<DeliverTxResponse>;
    sendSimulateResponse({ value, fee, memo }: sendSimulateResponseParams): Promise<DeliverTxResponse>;
    sendSignerInfo({ value, fee, memo }: sendSignerInfoParams): Promise<DeliverTxResponse>;
    sendGetTxsEventResponse({ value, fee, memo }: sendGetTxsEventResponseParams): Promise<DeliverTxResponse>;
    sendTxEncodeRequest({ value, fee, memo }: sendTxEncodeRequestParams): Promise<DeliverTxResponse>;
    sendTxEncodeResponse({ value, fee, memo }: sendTxEncodeResponseParams): Promise<DeliverTxResponse>;
    sendTxEncodeAminoResponse({ value, fee, memo }: sendTxEncodeAminoResponseParams): Promise<DeliverTxResponse>;
    sendModeInfo_Multi({ value, fee, memo }: sendModeInfo_MultiParams): Promise<DeliverTxResponse>;
    sendGetTxResponse({ value, fee, memo }: sendGetTxResponseParams): Promise<DeliverTxResponse>;
    sendTx({ value, fee, memo }: sendTxParams): Promise<DeliverTxResponse>;
    sendGetTxRequest({ value, fee, memo }: sendGetTxRequestParams): Promise<DeliverTxResponse>;
    sendTxEncodeAminoRequest({ value, fee, memo }: sendTxEncodeAminoRequestParams): Promise<DeliverTxResponse>;
    sendModeInfo({ value, fee, memo }: sendModeInfoParams): Promise<DeliverTxResponse>;
    sendGetTxsEventRequest({ value, fee, memo }: sendGetTxsEventRequestParams): Promise<DeliverTxResponse>;
    sendBroadcastTxRequest({ value, fee, memo }: sendBroadcastTxRequestParams): Promise<DeliverTxResponse>;
    sendTxDecodeResponse({ value, fee, memo }: sendTxDecodeResponseParams): Promise<DeliverTxResponse>;
    sendTxDecodeAminoResponse({ value, fee, memo }: sendTxDecodeAminoResponseParams): Promise<DeliverTxResponse>;
    sendAuthInfo({ value, fee, memo }: sendAuthInfoParams): Promise<DeliverTxResponse>;
    signDoc({ value }: signDocParams): EncodeObject;
    signDocDirectAux({ value }: signDocDirectAuxParams): EncodeObject;
    txBody({ value }: txBodyParams): EncodeObject;
    modeInfoSingle({ value }: modeInfoSingleParams): EncodeObject;
    txRaw({ value }: txRawParams): EncodeObject;
    auxSignerData({ value }: auxSignerDataParams): EncodeObject;
    getBlockWithTxsRequest({ value }: getBlockWithTxsRequestParams): EncodeObject;
    txDecodeRequest({ value }: txDecodeRequestParams): EncodeObject;
    txDecodeAminoRequest({ value }: txDecodeAminoRequestParams): EncodeObject;
    fee({ value }: feeParams): EncodeObject;
    getBlockWithTxsResponse({ value }: getBlockWithTxsResponseParams): EncodeObject;
    broadcastTxResponse({ value }: broadcastTxResponseParams): EncodeObject;
    tip({ value }: tipParams): EncodeObject;
    simulateRequest({ value }: simulateRequestParams): EncodeObject;
    simulateResponse({ value }: simulateResponseParams): EncodeObject;
    signerInfo({ value }: signerInfoParams): EncodeObject;
    getTxsEventResponse({ value }: getTxsEventResponseParams): EncodeObject;
    txEncodeRequest({ value }: txEncodeRequestParams): EncodeObject;
    txEncodeResponse({ value }: txEncodeResponseParams): EncodeObject;
    txEncodeAminoResponse({ value }: txEncodeAminoResponseParams): EncodeObject;
    modeInfoMulti({ value }: modeInfoMultiParams): EncodeObject;
    getTxResponse({ value }: getTxResponseParams): EncodeObject;
    tx({ value }: txParams): EncodeObject;
    getTxRequest({ value }: getTxRequestParams): EncodeObject;
    txEncodeAminoRequest({ value }: txEncodeAminoRequestParams): EncodeObject;
    modeInfo({ value }: modeInfoParams): EncodeObject;
    getTxsEventRequest({ value }: getTxsEventRequestParams): EncodeObject;
    broadcastTxRequest({ value }: broadcastTxRequestParams): EncodeObject;
    txDecodeResponse({ value }: txDecodeResponseParams): EncodeObject;
    txDecodeAminoResponse({ value }: txDecodeAminoResponseParams): EncodeObject;
    authInfo({ value }: authInfoParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosTxV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
