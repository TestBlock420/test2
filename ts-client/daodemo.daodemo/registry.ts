import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsResponse } from "./types/daodemo/daodemo/query";
import { GenesisState } from "./types/daodemo/daodemo/genesis";
import { MsgUpdateParams } from "./types/daodemo/daodemo/tx";
import { MsgUpdateParamsResponse } from "./types/daodemo/daodemo/tx";
import { Params } from "./types/daodemo/daodemo/params";
import { QueryParamsRequest } from "./types/daodemo/daodemo/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/daodemo.daodemo.QueryParamsResponse", QueryParamsResponse],
    ["/daodemo.daodemo.GenesisState", GenesisState],
    ["/daodemo.daodemo.MsgUpdateParams", MsgUpdateParams],
    ["/daodemo.daodemo.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/daodemo.daodemo.Params", Params],
    ["/daodemo.daodemo.QueryParamsRequest", QueryParamsRequest],
    
];

export { msgTypes }