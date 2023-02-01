import * as ST from './styled';

const StudentsTable = () => {
  return (
    <ST.StudentsTable>
      <ST.Table>
        <ST.Thead>
          <ST.Tr>
            <ST.Th>Имя</ST.Th>
            <ST.Th>Прогресс</ST.Th>
            <ST.Th>Статус</ST.Th>
          </ST.Tr>
        </ST.Thead>
        <ST.Tbody>
          <ST.Tr>
            <ST.Td>Сергей</ST.Td>
            <ST.Td>50%</ST.Td>
            <ST.Td>активен</ST.Td>
          </ST.Tr>
          <ST.Tr>
            <ST.Td>Антон</ST.Td>
            <ST.Td>70%</ST.Td>
            <ST.Td>активен</ST.Td>
          </ST.Tr>
        </ST.Tbody>
      </ST.Table>
    </ST.StudentsTable>
  );
};

export default StudentsTable;
