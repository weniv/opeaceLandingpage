import styled from 'styled-components';

export default function MobileTable({ schedule }) {
  return (
    <Table>
      <Day>Day {schedule.id}</Day>
      <Program>
        {schedule.program.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </Program>
    </Table>
  );
}

const Table = styled.div`
  width: calc(100% - 20px);
  margin-bottom: 20px;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background-color: var(--main-color);
  color: var(--dark-color);
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
`;

const Program = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;

  li {
    height: 49px;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
  }
`;
