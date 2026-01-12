import { useState, useContext } from 'react';

import { generateDatesInRange, formatDate } from '../utils/dateGenerator';
import Habit from './Habit';
import { StartContext } from '../store/start-context';

export default function HabitsTable() {
  const { start } = useContext(StartContext);

  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const dates = generateDatesInRange(start, end);

  const [habits, setHabits] = useState([
    {
      name: 'first habit',
      daysFulfilled: ['2026-01-06'],
    },
    {
      name: 'second habit',
      daysFulfilled: [],
    },
  ]);

  function handleChange(date, affectedHabit, event) {
    console.log(`In hangleChange: ${date}, ${affectedHabit}`);
    setHabits(prev =>
      prev.map(habit => {
        if (habit.name === affectedHabit) {
          if (event.target.checked) {
            return {
              ...habit,
              daysFulfilled: Array.from(
                new Set([...habit.daysFulfilled, date])
              ),
            };
          } else {
            return {
              ...habit,
              daysFulfilled: habit.daysFulfilled.filter(day => day !== date),
            };
          }
        }
        return habit;
      })
    );
  }

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
            console.log(habit.daysFulfilled);
            return (
              <tr key={habit.name} className="hover:bg-gray-50">
                <td className="border p-2 text-center">
                  <Habit name={habit.name} />
                </td>
                {dates.map(date => {
                  return (
                    <td
                      key={habit.name + date}
                      className="border p-2 text-center"
                    >
                      <input
                        type="checkbox"
                        checked={habit.daysFulfilled.includes(
                          date.toLocaleDateString('en-ca')
                        )}
                        onChange={e =>
                          handleChange(
                            date.toLocaleDateString('en-ca'),
                            habit.name,
                            e
                          )
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
