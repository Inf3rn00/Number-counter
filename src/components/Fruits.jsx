import Fruit from "./Fruit";
function Fruits() {
  const players = [
    {
      name: "Saka",
      position: "LW",
      goals: 205,
      assits: 223,
      injured: false
    },
    {
      name: "Havertz",
      position: "ST",
      goals: 200,
      assits: 104,
      injured: false

    },
    {
      name: "Trossard",
      position: "CF,LW,RW,ST,CAM",
      goals: 310,
      assits: 200,
      injured: false

    },
    {
      name: "Odegaard",
      position: "CAM",
      goals: 115,
      assits: 421,
      injured: false

    },
    {
      name: "Rice",
      position: "CM",
      goals: 98,
      assits: 100,
      injured: true
    },
  ];

  return (
    <div>
      <ul>
        <li>
          {players.map((player) => (
            <Fruit
              name={player.name}
              position={player.position}
              goals={player.goals}
              assist={player.assits}
              injured = {player.injured}
              key={player.name }
            ></Fruit>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Fruits;
