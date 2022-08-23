import Thumb from "../Thumb/Thumb";

type Props = {
  imgUrl: string;
  title: string;
  subTitle?: string;
}



const Card = ({ imgUrl, title, subTitle }: Props) => (
  <div className="h-80">
    <div className="relative h-full">
      <Thumb imgUrl={imgUrl} />
      <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800">
        <h2 className="text-cyan-200 text-center text-sm truncate">{title}</h2>
        {subTitle ? <p className="text-cyan-400 text-center text-xs truncate">{subTitle}</p> : null}
      </div>
    </div>
  </div>
)

export default Card;