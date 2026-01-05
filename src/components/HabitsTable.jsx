import { useState, useContext } from 'react';

import { generateDatesInRange, formatDate } from '../utils/dateGenerator';
import Habit from './Habit';
import { StartContext } from '../store/start-context';

export default function HabitsTable() {
  const { start } = useContext(StartContext);

  const [habits, setHabits] = useState([
    {
      name: 'first habit',
    },
    {
      name: 'second habit',
    },
  ]);

  const dates = generateDatesInRange(
    start,
    new Date().setDate(start.getDate() + 7)
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2"></th>
            {dates.map((date, index) => {
              return (
                <th key={index} className="border p-2 text-sm">
                  {formatDate(date)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {habits.map(habit => {
            return (
              <tr key={habit.name} className="hover:bg-gray-50">
                <td className="border p-2 text-center">
                  <Habit name={habit.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
