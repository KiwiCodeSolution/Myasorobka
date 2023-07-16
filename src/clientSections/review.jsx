import ReviewCard from "../components/reviewCard";

const REVIEWS = [
  {
    name: "Павло Тичина",
    photo:
      "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
    text: "Я вже довгий час користуюся цим інтернет-магазином м'ясних виробів і дуже задоволений їхньою послугою. М'ясо завжди свіже, якісне і добре упаковане. Великий вибір продукції і зручний онлайн-замовлення роблять процес покупок дуже простим і зручним. Рекомендую!",
  },
  {
    name: "Лесь Подеревянський",
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Мясоробка - це справжня знахідка для гурманів. Їхні продукти відмінної якості і смаку. Великий вибір м'яса, дельікатесів і готових страв завжди задовольняє мої кулінарні потреби. Доставка завжди вчасна і з хорошою упаковкою. Я дуже задоволений цим магазином!",
  },
  {
    name: "Олесь Кіндзер",
    photo:
      "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
    text: "Мясоробка - мій улюблений вибір, коли йдеться про покупку якісного м'яса. Їхні продукти завжди свіжі, а якість бездоганна. Персонал магазину завжди ввічливий і готовий допомогти з будь-якими питаннями. Я регулярно замовляю у них і завжди залишаюся задоволеним. ",
  },
];

const Review = () => {
  return (
    <div className="bg-bg-white min-h-[1440px] pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto ">
        <h2 className="text-4xl font-bold text-txt-main-black mb-20">Відгуки про нашу працю</h2>
        {REVIEWS.map((review) => (
          <ReviewCard review={review} key={review.name} />
        ))}
      </div>
    </div>
  );
};
export default Review;
