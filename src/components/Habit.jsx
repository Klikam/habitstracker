export default function Habit({ name }) {
  const nameId = name.trim();

  return (
    <div>
      <label htmlFor={nameId}>{name}</label>
      {/* <input type="checkbox" name={nameId} /> */}
    </div>
  );
}
