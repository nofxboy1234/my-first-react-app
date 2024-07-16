import eggsImage from './assets/fried-eggs.jpg';
import macaroniImage from './assets/macaroni.jpg';

function MacaroniCheese() {
  return (
    <div>
      <img src={macaroniImage} width="300px" alt="Delicious Macaroni Cheese" />
    </div>
  );
}

function FriedEggs() {
  return (
    <div>
      <img src={eggsImage} width="300px" alt="Fried Eggs!" />
    </div>
  );
}

export { MacaroniCheese, FriedEggs };
