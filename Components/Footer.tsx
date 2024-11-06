import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="relative mobile:w-[375px] mobile:h-[579px] mobile:top-[2543px] bg-[#1B2A4E]  " >
     <Image
        src="/logo_light.d1640c2f 1.png"
        alt="logo"
        width={200}
        height={200}
        className="absolute text-[#FFFFFF] mobile:w-[110px] mobile:h-[53px] mobile:left-[246px] mobile:top-[56px]  "
      />
      <p className="absolute font-iranSans text-[#FFFFFF] mobile:font-[400] mobile:leading-[24px] mobile:text-justify mobile:text-[12px] mobile:w-[335px] mobile:h-[96px] mobile:top-[123px] mobile:left-[22px] ">
      راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و فعالیت رسمی آغاز نمود.
      </p>
      <Image
        src="/Line 35 (2).png"
        alt="line"
        width={0}
        height={0}
        className="absolute  mobile:w-[335px] mobile:border-[1px] mobile:border-none mobile:left-[22px] mobile:top-[243px] mobile:bg-[#374566]  text-[#374566]  "
      />
      <p className="absolute font-iranSans text-[#FFFFFF] mobile:font-[900] mobile:leading-[21.91px] mobile:text-right mobile:text-[14px] mobile:w-[93px] mobile:h-[22px] mobile:top-[265px] mobile:left-[261px] ">لینک های مرتبط</p>
      <ul className=' mobile:block' >
        <li className="absolute font-iranSans text-[#ffffff] mobile:w-[59px] mobile:h-[19px] mobile:top-[311px] mobile:left-[296px] mobile:font-[400] mobile:text-[12px] mobile:leading-[18.78px] mobile:text-right">صفحه اصلی</li>
        <li className="absolute font-iranSans text-[#ffffff] mobile:w-[68px] mobile:h-[19px] mobile:top-[343px] mobile:left-[287px] mobile:font-[400] mobile:text-[12px] mobile:leading-[18.78] ">قیمت رمزارزها</li>
        <li className="absolute font-iranSans text-[#ffffff] mobile:w-[] mobile:h-[] mobile:top-[] mobile:left-[] mobile:font-[] mobile:text-[] mobile:leading-[] ">مقالات و وبلاگ</li>
        <li className="absolute font-iranSans text-[#ffffff] mobile:w-[] mobile:h-[] mobile:top-[] mobile:left-[] mobile:font-[] mobile:text-[] mobile:leading-[] ">در باره ما</li>
      </ul>
    </footer>
  )
}

export default Footer