const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function MonthList() {
  return (
    <ul>
      {months.map((month, index) => (
        <li key={index}>{month}</li>
      ))}
    </ul>
  );
}
