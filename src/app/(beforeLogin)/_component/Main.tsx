import Image from "next/image";
import zLogo from '../../../../public/zlogo.svg'
import Link from "next/link";
import style from "@/app/(beforeLogin)/_component/main.module.css"

export default function Main() {
  return (
    <>
      <div className={style.left}>
        <Image className={style.logoImage} width={200} height={200} src={zLogo} alt="logo"/>
      </div>
      <div className={style.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link className={style.signup} href="/i/flow/signup">계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link className={style.login} href="/i/flow/login">로그인</Link>
      </div>
    </>
  )
}
