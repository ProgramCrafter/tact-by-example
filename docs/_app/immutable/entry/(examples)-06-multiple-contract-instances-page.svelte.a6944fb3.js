var y=Object.defineProperty;var B=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>(B(o,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as f,s as I,I as p,ac as h}from"../chunks/index.9fe14626.js";import{d as a,g,s as l}from"../chunks/store.380869d4.js";import{d as C}from"../chunks/index.b268dd33.js";const H=`# Multiple Contract Instances

Instead of duplicating the code for the two contracts like in the previous example, we can write the code once and still deploy two separate instances. Each instance will have its own unique address.

We can do this by adding an argument to \`init()\`. When deploying the contract, we need to specify its init arguments. In this example we deploy twice, the first with the argument 1 and the second is deployed with 2.

We mentioned earlier that contract addresses on TON are [derived](https://docs.ton.org/learn/overviews/addresses#account-id) from the initial code of the contract (the compiled bytecode) and the initial data of the contract (the arguments of init).

Since we wrote the code once, the initial code is now identical. By adding an contructor argument, we've made the initial data different. This is why we're going to get two different addresses.`,Q=`import "@stdlib/deploy";

// we're going to have multiple instances of this contract, each with a different seqno
contract Todo with Deployable {

    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(seqno: Int) {
        self.seqno = seqno;
    }
 
    // each instance can calculate the address of every other instance
    get fun addressOf(otherSeqno: Int): Address {
        let init: StateInit = initOf Todo(otherSeqno);
        return contractAddress(init);
    }
}`;function D(o){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(o.queryId,64)}}function E(o){return e=>{e.storeInt(o.seqno,257)}}async function w(o){const e=a.Cell.fromBase64("te6ccgECDgEAArkAART/APSkE/S88sgLAQIBYgIDAgLLBAUCASAKCwHv0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VSBgBnpADoegIYNoDAqRuAwAh6B7fQ+XBDgMCpG5EBQAh6C+QA5HoAZIDmOADlACwAwICA54BkwAGCcCHXScIflTAg1wsf3gKSW3/gAYIQlGqYtrqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHAHARp/+EJwWAOAQgFtbds8CAHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBVb7x32omhqAPwx6QAAymmfgJjHCfwUa4WFQYTdeXBEwICA64AAgOjxAO2eQMALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQBEDH4QwHwGNs8DQCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQ=="),t=a.Cell.fromBase64("te6cckECEAEAAsMAAQHAAQEFoKRvAgEU/wD0pBP0vPLICwMCAWIJBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQBVb7x32omhqAPwx6QAAymmfgJjHCfwUa4WFQYTdeXBEwICA64AAgOjxAO2eQHARAx+EMB8BjbPAgAjHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkCAssLCgBnpADoegIYNoDAqRuAwAh6B7fQ+XBDgMCpG5EBQAh6C+QA5HoAZIDmOADlACwAwICA54BkwAHv0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VSDAGCcCHXScIflTAg1wsf3gKSW3/gAYIQlGqYtrqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHANARp/+EJwWAOAQgFtbds8DgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA8AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyLD/YT");let n=a.beginCell();n.storeRef(t),n.storeUint(0,1),E({$$type:"Todo_init_args",seqno:o})(n);const s=n.endCell();return{code:e,data:s}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:M});this.address=e,this.init=t}static async init(e){return await w(e)}static async fromInit(e){const t=await w(e),n=a.contractAddress(0,t);return new A(n,t)}static fromAddress(e){return new A(e)}async send(e,t,n,s){let r=null;if(s&&typeof s=="object"&&!(s instanceof a.Slice)&&s.$$type==="Deploy"&&(r=a.beginCell().store(D(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...n,body:r})}async getAddressOf(e,t){let n=new a.TupleBuilder;return n.writeNumber(t),(await e.get("addressOf",n.build())).stack.readAddress()}}function O(o,e,t){let n;p(o,l,i=>t(3,n=i));let s,r;return h(l,n={markdown:H,tactCode:Q,deploy:async()=>{const i=await C.Blockchain.create(),d=await i.treasury("deployer");d.getSender(),s=i.openContract(await A.fromInit(1n)),r=i.openContract(await A.fromInit(2n));const u={[d.address.toString()]:"deployer",[s.address.toString()]:"Todo(1)",[r.address.toString()]:"Todo(2)"};return[[s,r],u,[await s.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n}),await r.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{"addressOf(1)":async()=>await s.getAddressOf(1n),"addressOf(2)":async()=>await s.getAddressOf(2n)},prev:g(import.meta.url).prev,next:g(import.meta.url).next},n),[]}class v extends m{constructor(e){super(),f(this,e,O,null,I,{})}}export{v as default};