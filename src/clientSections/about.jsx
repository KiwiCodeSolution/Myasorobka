import * as icons from "../icons/iconComponent";
import leftImg from "../images/spice.png";
import logo from "../images/logo.png";

const About = () => {
  return (
    <div className="bg-about bg-no-repeat bg-cover h-[920px] relative">
      <img src={leftImg} alt="spice" className="absolute top-[-190px]" />
      <img src={logo} alt="logo" className="absolute top-[50px] right-[45px]" />
      <h2 className="pl-[120px] pt-[60px] text-txt-main-white text-3xl">Трохи про М&apos;ясорОбку</h2>
      <div className="bg-bg-orange w-[420px] rounded-3xl absolute top-[176px] left-[120px] py-3 px-5">
        <div className="flex justify-center">
          <icons.Flag />
          <p className="text-center text-xl font-medium pl-1 pb-2 underline">Початок</p>
        </div>
        <p className="font-medium">
          Наша історія починається з мрії Джеймса Робертсона - мрії про власний бізнес, що принесе користь нашому
          рідному селу. Вже змалечку він відчував пристрасть до м&apos;яса і проводив години на кухні, творячи
          неперевершені страви для своїх родичів і друзів. З кожним новим днем, його любов до готування м&apos;яса
          зростала, і Джеймс почав думати про способи поділитися своїми кулінарними талантами з більшим колом людей.
        </p>
      </div>
      <div className="bg-bg-light-orange w-[468px] rounded-3xl absolute top-[586px] left-[300px] py-3 px-6">
        <div className="flex justify-center">
          <icons.Lamp />
          <p className="text-center text-xl font-medium pl-1 pb-2 underline">Ідея</p>
        </div>
        <p className="font-medium">
          Так виникла ідея заснувати мясний онлайн магазин - місце, де всі зможуть насолоджуватися свіжим, якісним
          м&apos;ясом прямо у своїх домівках. Разом із своєю сім&apos;єю, Джеймс зробив перший крок до реалізації своєї
          мрії. Він об&apos;єднався з місцевими фермерами, які забезпечували найкращу якість м&apos;яса.
        </p>
      </div>
      <div className="bg-bg-brown w-[428px] rounded-3xl absolute top-[385px] right-[143px] py-3 px-6 text-txt-main-white">
        <div className="flex justify-center">
          <icons.Lock />
          <p className="text-center text-xl font-medium pl-1 pb-2 underline">Правила</p>
        </div>
        <p className="font-medium">
          Ретельний відбір продукції та дотримання найвищих стандартів якості стали основними принципами нашого бізнесу.
          Сьогодні наш онлайн магазин м&apos;ясних виробів пропонує широкий вибір свіжого м&apos;яса та дельікатесів,
          які ми з гордістю доставляємо прямо до ваших дверей.
        </p>
      </div>
    </div>
  );
};
export default About;
