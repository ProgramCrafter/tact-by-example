import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  TupleBuilder,
  DictionaryValue,
} from "ton-core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: "SendParameters" as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return { $$type: "SendParameters" as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type Metadata = {
  $$type: "Metadata";
  symbol: string;
  totalSupply: bigint;
};

export function storeMetadata(src: Metadata) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.symbol);
    b_0.storeInt(src.totalSupply, 257);
  };
}

export function loadMetadata(slice: Slice) {
  let sc_0 = slice;
  let _symbol = sc_0.loadStringRefTail();
  let _totalSupply = sc_0.loadIntBig(257);
  return { $$type: "Metadata" as const, symbol: _symbol, totalSupply: _totalSupply };
}

function loadTupleMetadata(source: TupleReader) {
  let _symbol = source.readString();
  let _totalSupply = source.readBigNumber();
  return { $$type: "Metadata" as const, symbol: _symbol, totalSupply: _totalSupply };
}

function storeTupleMetadata(source: Metadata) {
  let builder = new TupleBuilder();
  builder.writeString(source.symbol);
  builder.writeNumber(source.totalSupply);
  return builder.build();
}

function dictValueParserMetadata(): DictionaryValue<Metadata> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeMetadata(src)).endCell());
    },
    parse: (src) => {
      return loadMetadata(src.loadRef().beginParse());
    },
  };
}

export type Transfer = {
  $$type: "Transfer";
  amount: bigint;
  to: Address;
};

export function storeTransfer(src: Transfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1943715420, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.to);
  };
}

export function loadTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1943715420) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  let _to = sc_0.loadAddress();
  return { $$type: "Transfer" as const, amount: _amount, to: _to };
}

function loadTupleTransfer(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _to = source.readAddress();
  return { $$type: "Transfer" as const, amount: _amount, to: _to };
}

function storeTupleTransfer(source: Transfer) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.to);
  return builder.build();
}

function dictValueParserTransfer(): DictionaryValue<Transfer> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadTransfer(src.loadRef().beginParse());
    },
  };
}

export type InternalAddTokens = {
  $$type: "InternalAddTokens";
  amount: bigint;
  origin: Address;
};

export function storeInternalAddTokens(src: InternalAddTokens) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4162046107, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.origin);
  };
}

export function loadInternalAddTokens(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4162046107) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  let _origin = sc_0.loadAddress();
  return { $$type: "InternalAddTokens" as const, amount: _amount, origin: _origin };
}

function loadTupleInternalAddTokens(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _origin = source.readAddress();
  return { $$type: "InternalAddTokens" as const, amount: _amount, origin: _origin };
}

function storeTupleInternalAddTokens(source: InternalAddTokens) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.origin);
  return builder.build();
}

function dictValueParserInternalAddTokens(): DictionaryValue<InternalAddTokens> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeInternalAddTokens(src)).endCell());
    },
    parse: (src) => {
      return loadInternalAddTokens(src.loadRef().beginParse());
    },
  };
}

type TokenChild_init_args = {
  $$type: "TokenChild_init_args";
  parent: Address;
  owner: Address;
};

function initTokenChild_init_args(src: TokenChild_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.parent);
    b_0.storeAddress(src.owner);
  };
}

async function TokenChild_init(parent: Address, owner: Address) {
  const __code = Cell.fromBase64(
    "te6ccgECGAEABQAAART/APSkE/S88sgLAQIBYgIDA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MBIEBQIBWA4PArxwIddJwh+VMCDXCx/eApJbf+AhghBz2r5cuo61MdMfAYIQc9q+XLry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLbPH/gAYIQ+BPIm7rjAjBwBgcAnsj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gLJ7VQCxIIAwT34QlJQxwXy9IIA1VddvvL0USGh+ENUIFTbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFE1DQgBYtMfAYIQ+BPIm7ry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBIMA5bIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyYIJycOAWnJZfwZFVds8iH/4QnBYA4BCAW1t2zwKCQoAHgAAAAB0cmFuc2ZlcnJlZAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAdBTQMcFnTCCANSE+EJSUMcF8vSO0YFQOfhDVCBj2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCxwXy9OKgfw0A1gLQ9AQwbQGBIe0BgBD0D2+h8uCHAYEh7SICgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJAgEgEBECAUgWFwIRttgbZ5tnjYYwEhMAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAG87UTQ1AH4Y9IAAY5G+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfoAVSBsE+D4KNcLCoMJuvLgiRQAAiABivpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBIC0QHbPBUAAnAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWkIxaEVYN0sxYUF2QjlwaEFSdkFFUTZ1dTVyU3JIRlFDV29UWVpzems5aXeCA=",
  );
  const __system = Cell.fromBase64(
    "te6cckECGgEABQoAAQHAAQEFoEPbAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVpCMWhFWDdLMWFBdkI5cGhBUnZBRVE2dXU1clNySEZRQ1dvVFlac3prOWl3ggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG22Btnm2eNhjAXCwACIAN20AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPDAXDg0Ansj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gLJ7VQCvHAh10nCH5UwINcLH94Cklt/4CGCEHPavly6jrUx0x8BghBz2r5cuvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEts8f+ABghD4E8ibuuMCMHARDwFi0x8BghD4E8ibuvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEhAB0FNAxwWdMIIA1IT4QlJQxwXy9I7RgVA5+ENUIGPbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+ELHBfL04qB/FgLEggDBPfhCUlDHBfL0ggDVV12+8vRRIaH4Q1QgVNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIUTUWEgOWyFmCEPgTyJtQA8sfAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsmCCcnDgFpyWX8GRVXbPIh/+EJwWAOAQgFtbds8FBMUAB4AAAAAdHJhbnNmZXJyZWQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADWAtD0BDBtAYEh7QGAEPQPb6Hy4IcBgSHtIgKAEPQXyAHI9ADJAcxwAcoAQANZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskBvO1E0NQB+GPSAAGORvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6AFUgbBPg+CjXCwqDCbry4IkYAYr6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwZAAJwry3bvg==",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initTokenChild_init_args({ $$type: "TokenChild_init_args", parent, owner })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const TokenChild_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  20537: { message: `Sibling only` },
  49469: { message: `Access denied` },
  54404: { message: `Parent only` },
  54615: { message: `Insufficient balance` },
};

export class TokenChild implements Contract {
  static async init(parent: Address, owner: Address) {
    return await TokenChild_init(parent, owner);
  }

  static async fromInit(parent: Address, owner: Address) {
    const init = await TokenChild_init(parent, owner);
    const address = contractAddress(0, init);
    return new TokenChild(address, init);
  }

  static fromAddress(address: Address) {
    return new TokenChild(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: [
      { name: "StateInit", header: null, fields: [] },
      { name: "Context", header: null, fields: [] },
      { name: "SendParameters", header: null, fields: [] },
      { name: "Deploy", header: 2490013878, fields: [] },
      { name: "DeployOk", header: 2952335191, fields: [] },
      { name: "Metadata", header: null, fields: [] },
      { name: "Transfer", header: 1943715420, fields: [] },
      { name: "InternalAddTokens", header: 4162046107, fields: [] },
    ],
    errors: TokenChild_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: Transfer | InternalAddTokens,
  ) {
    let body: Cell | null = null;
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Transfer") {
      body = beginCell().store(storeTransfer(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "InternalAddTokens") {
      body = beginCell().store(storeInternalAddTokens(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getBalance(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("balance", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }
}
