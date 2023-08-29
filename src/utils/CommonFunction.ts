import moment from "moment";
import React from "react";
import auth from "./auth";

export const mergeList = (data: any) => data?.flatMap((d: any) => d);

export const handleLogout = () => {
  auth.clearAppStorage();
};

export const handleShare = (handleToast: any) => {
  const url = window.location.href;
  const varUA = navigator.userAgent.toLowerCase();

  if (varUA.indexOf("android") > -1) {
    try {
      //@ts-ignore
      window.wooayeah.postMessage(
        JSON.stringify({
          type: "share",
          text: url,
        })
      );
    } catch (error) {
      navigator.share({
        url: url,
      });
    }
  } else if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    try {
      //@ts-ignore
      window.webkit.messageHandlers.shareHandler.postMessage(
        JSON.stringify({
          all_text: url,
        })
      );
    } catch (error) {
      navigator.share({
        url: url,
      });
    }
  } else {
    handleCopy(url);
    handleToast();
  }
};

export const toNumber = (value: string) => {
  let el = value.replace(/[^0-9]/g, "");
  return el;
};

export const handlePhone = (value: string) => {
  return value.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const Dot = (value: number) => {
  let el = (value ? value : 0).toString();
  return el.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const Percent = (origin: number, price: number) => {
  let percent = ((price / origin) * 100).toFixed(0);
  return percent + "%";
};

export const handleImage = (image: string) => {
  return encodeURI(image)
    .replace(/ /g, "%20")
    .replace("(", "%28")
    .replace(")", "%29");
};

export const handleCopy = (text: string) => {
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

export const handleBank = (code: string) => {
  for (const option of bankOptions) {
    if (option.value === code) return option.text;
  }
};

export const bankOptions = [
  { value: "002", text: "산업은행" },
  { value: "003", text: "기업은행" },
  { value: "004", text: "국민은행" },
  { value: "007", text: "수협" },
  { value: "011", text: "농협" },
  { value: "012", text: "지역농축협" },
  { value: "020", text: "우리은행" },
  { value: "023", text: "SC제일은행" },
  { value: "027", text: "한국씨티은행" },
  { value: "031", text: "대구은행" },
  { value: "032", text: "부산은행" },
  { value: "034", text: "광주은행" },
  { value: "035", text: "제주은행" },
  { value: "037", text: "전북은행" },
  { value: "039", text: "경남은행" },
  { value: "045", text: "새마을금고" },
  { value: "048", text: "신협" },
  { value: "050", text: "저축은행" },
  { value: "054", text: "HSBC은행" },
  { value: "055", text: "도이치은행" },
  { value: "057", text: "JP모간체이스은행" },
  { value: "060", text: "BOA은행" },
  { value: "061", text: "BNP파리바은행" },
  { value: "062", text: "중국공상은행" },
  { value: "064", text: "산림조합" },
  { value: "067", text: "중국건설은행" },
  { value: "071", text: "우체국" },
  { value: "081", text: "하나은행" },
  { value: "088", text: "신한은행" },
  { value: "089", text: "케이뱅크" },
  { value: "090", text: "카카오뱅크" },
  { value: "209", text: "유안타증권" },
  { value: "218", text: "KB증권" },
  { value: "227", text: "KTB투자증권" },
  { value: "238", text: "미래에셋대우" },
  { value: "240", text: "삼성증권" },
  { value: "243", text: "한국투자증권" },
  { value: "247", text: "NH투자증권" },
  { value: "261", text: "교보증권" },
  { value: "262", text: "하이투자증권" },
  { value: "263", text: "현대차증권" },
  { value: "264", text: "키움증권" },
  { value: "265", text: "이베스트투자증권" },
  { value: "266", text: "SK증권" },
  { value: "267", text: "대신증권" },
  { value: "269", text: "한화투자증권" },
  { value: "270", text: "하나금융투자" },
  { value: "278", text: "신한금융투자" },
  { value: "279", text: "DB금융투자" },
  { value: "280", text: "유진투자증권" },
  { value: "287", text: "메리츠종합금융증권" },
  { value: "288", text: "카카오페이증권" },
  { value: "290", text: "부국증권" },
  { value: "291", text: "신영증권" },
  { value: "292", text: "케이프투자증권" },
  { value: "294", text: "펀드온라인코리아" },
];
