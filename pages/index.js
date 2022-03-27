import Card from '../components/Card'
import Header from '../components/Header'

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-gradient-to-r from-purple-900 via-purple-600 to-pink-600 ..."`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
}
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.cardsContainer}>
        <Card />
      </div>
    </div>
  )
}
