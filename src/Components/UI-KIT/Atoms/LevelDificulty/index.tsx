import * as ST from './styled';

const LevelDifficulty = () => (
  <ST.LevelDifficulty>
    <ST.Title>уровень сложности:</ST.Title>
    <ST.Items>
      {[true, false, false].map((item, index) => (
        <ST.Item
          key={`Item-Level-Difficulty-${index}`}
          isActive={item}
        />
      ))}
    </ST.Items>
  </ST.LevelDifficulty>
);

export default LevelDifficulty;
