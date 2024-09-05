function Fruit({ name, position, goals, assist, injured }) {
  return (
    <>
      <ul className="list-inside">
       

        <li className="list-disc">
          Name= {name}, {position}, {goals} goals, {assist} assists,{" "}
          {injured ? "Player is injured" : "not injured"}
        </li>
      </ul>
    </>
  );
}

export default Fruit;
