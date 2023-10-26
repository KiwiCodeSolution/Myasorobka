import hotPepper from "../images/hot-pepper_1.png";
import rosemary from "../images/rosemary-big.png";
import ReviewCard from "../components/reviewCard";
import { MTitle } from "../components/Title";
import Sofia from "../images/Sofia.jpg";
import Dmytro from "../images/Dmytro.jpg";
import Volodymyr from "../images/Volodymyr.jpg";
import { titleAnimation } from "../helpers/stylesHelpers";

const REVIEWS = [
  {
    id: 1,
    name: "Володимир Зміївський",
    photo: Volodymyr,
    text: "Замовляв котлети для бургерів, бо часто завантажений на роботі і дуже люблю перекуси у обідню перерву. Курячі котлети від М’ясоробки - це тепер незамінний продукт у моїй морозилці)",
  },
  {
    id: 2,
    name: "Софія Тарамали",
    photo: Sofia,
    text: "Вперше замовляла у М’ясоробці снеки для свого друга, коли той був на передовій. Дуже вдячна власнику Євгену за допомогу у транспортуванні та пакуванні. Окремо вдячні за презент для нього у вигляді смачних кабанос, бригада була задоволена - зберігається довго, та щей смачне!",
  },
  {
    id: 3,
    name: "Панасенко Дмитро",
    photo: Dmytro,
    text: "Я займаюся важкою атлетикою, тому завжди “набираю” масу. З того часу як знайшов М'ясоробку - раціон став набагато смачніший, не кажучи вже що навіть мій дієтолог “присів” на їх продукцію)",
  },
];

const Review = () => {
  return (
    <div className="bg-bg-white min-h-[530px] pt-10 pb-14 relative">
      <img src={hotPepper} alt="hot pepper" className="absolute top-[-40px] right-0" />
      <div className="max-w-[1440px] mx-auto px-[10px] relative">
        <MTitle tClass="mb-20" type="black" variants={titleAnimation} initial="hidden" whileInView="visible">
          Відгуки про нашу працю
        </MTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-between">
          {REVIEWS.map((review) => (
            <ReviewCard review={review} key={review.name} />
          ))}
        </div>
        <img
          src={rosemary}
          alt="rosemary"
          className="h-[60px] w-[360px] md:h-[82px] md:w-[480px] lg:h-[137px] lg:w-[800px] absolute bottom-[-80px] left-0 md:bottom-[-100px] md:left-[136px] lg:bottom-[-150px] lg:left-[150px]  xl:bottom-[-120px] xl:left-[295px] z-[2]"
        />
      </div>
    </div>
  );
};
export default Review;
