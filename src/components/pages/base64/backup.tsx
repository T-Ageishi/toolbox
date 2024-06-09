// 'use client';
// import WithNavigation from "@/components/ui/with_navigation/with_navigation";
// import { MENU_ID_BASE64 } from "@/components/ui/with_navigation/data";
// import styles from './page.module.css';
// import TextContents from "@/components/pages/base64/text_contents";
// import Conditions from "@/components/pages/base64/conditions";
// import ExecButton from "@/components/pages/base64/exec_button";
// import React, { useState } from "react";
// import { base64Decode, base64Encode } from "@/components/utils/base64";
// import { lang } from "@/lib/lang/lang";
//
//
// /**
//  * base64
//  */
// export default function Base64() {
//   const [convType, setConvType] = useState<string>('1');
//   const [charset, setCharset] = useState<string>('1');
//   const [sourceValue, setSourceValue] = useState<string>('');
//   const [resultValue, setResultValue] = useState<string>('');
//
//   const handleConvTypeChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
//     setSourceValue('');
//     setConvType(e.target.value);
//   };
//   const handleCharsetChange: React.ChangeEventHandler<HTMLSelectElement> = e => setCharset(e.target.value);
//   const handleSourceInput: React.ChangeEventHandler<HTMLTextAreaElement> = e => setSourceValue(e.target.value);
//   const handleResultAreaClick: React.MouseEventHandler<HTMLTextAreaElement> = e => {
//     window.navigator.clipboard.writeText(e.currentTarget.value).catch(reason => console.error(reason));
//   };
//
//   //base64 変換入口
//   const execBase64 = () => {
//     if (convType === '1') setResultValue(base64Encode(sourceValue));
//     if (convType === '2') setResultValue(base64Decode(sourceValue));
//   };
//
//   return (
//     <WithNavigation activeMenuId={MENU_ID_BASE64}>
//       <div className={styles['content-container']}>
//         <Conditions
//           convTypeCustomProps={{value: convType, onChange: handleConvTypeChange}}
//           charsetCustomProps={{value: charset, onChange: handleCharsetChange}}
//         />
//         <TextContents
//           sourceProps={{value: sourceValue, onChange: handleSourceInput}}
//           resultProps={{value: resultValue, onClick: handleResultAreaClick, title: lang('0012')}}//クリックして値をコピーできます。
//         />
//         <div className={styles['exec-btn-container']}>
//           <ExecButton onClick={execBase64}/>
//         </div>
//       </div>
//     </WithNavigation>
//   );
// }
