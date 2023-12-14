"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,b=u["".concat(l,".").concat(p)]||u[p]||y[p]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"babylondkeysdd",sidebar_label:"babylond keys add",hide_table_of_contents:!0},i="babylond keys add",d={unversionedId:"cli/babylond/keys/babylondkeysdd",id:"cli/babylond/keys/babylondkeysdd",title:"babylond keys add",description:"Add an encrypted private key (either newly generated or recovered), encrypt it, and save it to your file name.",source:"@site/docs/cli/babylond/keys/babylondkeysdd.md",sourceDirName:"cli/babylond/keys",slug:"/cli/babylond/keys/babylondkeysdd",permalink:"/docs/cli/babylond/keys/babylondkeysdd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/keys/babylondkeysdd.md",tags:[],version:"current",frontMatter:{id:"babylondkeysdd",sidebar_label:"babylond keys add",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond keys",permalink:"/docs/cli/babylond/keys/babylondkeys"},next:{title:"babylond keys delete",permalink:"/docs/cli/babylond/keys/babylondkeysdelete"}},l={},s=[{value:"keys add command",id:"keys-add-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:s};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-keys-add"},"babylond keys add"),(0,o.kt)("p",null,"Add an encrypted private key (either newly generated or recovered), encrypt it, and save it to your file name."),(0,o.kt)("h2",{id:"keys-add-command"},"keys add command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond keys add <name> [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --account uint32           Account number for HD derivation (less than equal 2147483647)\n      --algo string              Key signing algorithm to generate keys for (default \"secp256k1\")\n      --coin-type uint32         coin type number for HD derivation (default 118)\n      --dry-run                  Perform action, but don't add key to local keystore\n      --hd-path string           Manual HD Path derivation (overrides BIP44 config)\n  -h, --help                     help for add\n      --index uint32             Address index number for HD derivation (less than equal 2147483647)\n  -i, --interactive              Interactively prompt user for BIP39 passphrase and mnemonic\n      --ledger                   Store a local reference to a private key on a Ledger device\n      --multisig strings         List of key names stored in keyring to construct a public legacy multisig key\n      --multisig-threshold int   K out of N required signatures. For use in conjunction with --multisig (default 1)\n      --no-backup                Don't print out seed phrase (if others are watching the terminal)\n      --nosort                   Keys passed to --multisig are taken in the order they're supplied\n      --pubkey string            Parse a public key in JSON format and saves key info to <name> file.\n      --recover                  Provide seed phrase to recover existing key instead of creating\n")),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")\n--keyring-backend string   Select keyring\'s backend (os|file|test) (default "os")\n--keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n--log_format string        The logging format (json|plain) (default "plain")\n--log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n--output string            Output format (text|json) (default "text")\n --trace                    print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);