/* esm.sh - esbuild bundle(@aws-sdk/util-endpoints@3.511.0) denonext production */
import{customEndpointFunctions as x}from"/v135/@smithy/util-endpoints@1.1.1/denonext/util-endpoints.mjs";import{isValidHostLabel as S}from"/v135/@smithy/util-endpoints@1.1.1/denonext/util-endpoints.mjs";import{isIpAddress as c}from"/v135/@smithy/util-endpoints@1.1.1/denonext/util-endpoints.mjs";var p=(o,s=!1)=>{if(s){for(let t of o.split("."))if(!p(t))return!1;return!0}return!(!S(o)||o.length<3||o.length>63||o!==o.toLowerCase()||c(o))};var d=o=>{let s=o.split(":");if(s.length<6)return null;let[t,i,e,a,n,...r]=s;return t!=="arn"||i===""||e===""||r[0]===""?null:{partition:i,service:e,region:a,accountId:n,resourceId:r[0].includes("/")?r[0].split("/"):r}};var u={partitions:[{id:"aws",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-east-1",name:"aws",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",regions:{"af-south-1":{description:"Africa (Cape Town)"},"ap-east-1":{description:"Asia Pacific (Hong Kong)"},"ap-northeast-1":{description:"Asia Pacific (Tokyo)"},"ap-northeast-2":{description:"Asia Pacific (Seoul)"},"ap-northeast-3":{description:"Asia Pacific (Osaka)"},"ap-south-1":{description:"Asia Pacific (Mumbai)"},"ap-south-2":{description:"Asia Pacific (Hyderabad)"},"ap-southeast-1":{description:"Asia Pacific (Singapore)"},"ap-southeast-2":{description:"Asia Pacific (Sydney)"},"ap-southeast-3":{description:"Asia Pacific (Jakarta)"},"ap-southeast-4":{description:"Asia Pacific (Melbourne)"},"aws-global":{description:"AWS Standard global region"},"ca-central-1":{description:"Canada (Central)"},"ca-west-1":{description:"Canada West (Calgary)"},"eu-central-1":{description:"Europe (Frankfurt)"},"eu-central-2":{description:"Europe (Zurich)"},"eu-north-1":{description:"Europe (Stockholm)"},"eu-south-1":{description:"Europe (Milan)"},"eu-south-2":{description:"Europe (Spain)"},"eu-west-1":{description:"Europe (Ireland)"},"eu-west-2":{description:"Europe (London)"},"eu-west-3":{description:"Europe (Paris)"},"il-central-1":{description:"Israel (Tel Aviv)"},"me-central-1":{description:"Middle East (UAE)"},"me-south-1":{description:"Middle East (Bahrain)"},"sa-east-1":{description:"South America (Sao Paulo)"},"us-east-1":{description:"US East (N. Virginia)"},"us-east-2":{description:"US East (Ohio)"},"us-west-1":{description:"US West (N. California)"},"us-west-2":{description:"US West (Oregon)"}}},{id:"aws-cn",outputs:{dnsSuffix:"amazonaws.com.cn",dualStackDnsSuffix:"api.amazonwebservices.com.cn",implicitGlobalRegion:"cn-northwest-1",name:"aws-cn",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^cn\\-\\w+\\-\\d+$",regions:{"aws-cn-global":{description:"AWS China global region"},"cn-north-1":{description:"China (Beijing)"},"cn-northwest-1":{description:"China (Ningxia)"}}},{id:"aws-us-gov",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-gov-west-1",name:"aws-us-gov",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^us\\-gov\\-\\w+\\-\\d+$",regions:{"aws-us-gov-global":{description:"AWS GovCloud (US) global region"},"us-gov-east-1":{description:"AWS GovCloud (US-East)"},"us-gov-west-1":{description:"AWS GovCloud (US-West)"}}},{id:"aws-iso",outputs:{dnsSuffix:"c2s.ic.gov",dualStackDnsSuffix:"c2s.ic.gov",implicitGlobalRegion:"us-iso-east-1",name:"aws-iso",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-iso\\-\\w+\\-\\d+$",regions:{"aws-iso-global":{description:"AWS ISO (US) global region"},"us-iso-east-1":{description:"US ISO East"},"us-iso-west-1":{description:"US ISO WEST"}}},{id:"aws-iso-b",outputs:{dnsSuffix:"sc2s.sgov.gov",dualStackDnsSuffix:"sc2s.sgov.gov",implicitGlobalRegion:"us-isob-east-1",name:"aws-iso-b",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isob\\-\\w+\\-\\d+$",regions:{"aws-iso-b-global":{description:"AWS ISOB (US) global region"},"us-isob-east-1":{description:"US ISOB East (Ohio)"}}},{id:"aws-iso-e",outputs:{dnsSuffix:"cloud.adc-e.uk",dualStackDnsSuffix:"cloud.adc-e.uk",implicitGlobalRegion:"eu-isoe-west-1",name:"aws-iso-e",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^eu\\-isoe\\-\\w+\\-\\d+$",regions:{}},{id:"aws-iso-f",outputs:{dnsSuffix:"csp.hci.ic.gov",dualStackDnsSuffix:"csp.hci.ic.gov",implicitGlobalRegion:"us-isof-south-1",name:"aws-iso-f",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isof\\-\\w+\\-\\d+$",regions:{}}],version:"1.1"};var l=u,f="",g=o=>{let{partitions:s}=l;for(let i of s){let{regions:e,outputs:a}=i;for(let[n,r]of Object.entries(e))if(n===o)return{...a,...r}}for(let i of s){let{regionRegex:e,outputs:a}=i;if(new RegExp(e).test(o))return{...a}}let t=s.find(i=>i.id==="aws");if(!t)throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");return{...t.outputs}},w=(o,s="")=>{l=o,f=s},R=()=>{w(u,"")},U=()=>f;var h={isVirtualHostableS3Bucket:p,parseArn:d,partition:g};x.aws=h;import{resolveEndpoint as $}from"/v135/@smithy/util-endpoints@1.1.1/denonext/util-endpoints.mjs";import{EndpointError as M}from"/v135/@smithy/util-endpoints@1.1.1/denonext/util-endpoints.mjs";export{M as EndpointError,U as getUserAgentPrefix,c as isIpAddress,g as partition,$ as resolveEndpoint,w as setPartitionInfo,R as useDefaultPartitionInfo};
//# sourceMappingURL=util-endpoints.mjs.map