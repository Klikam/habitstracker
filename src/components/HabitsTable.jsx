import { generateDatesInRange, formatDate } from "../utils/dateGenerator";
import Habit from "./Habit";

export default function HabitsTable() {
  const dates = generateDatesInRange();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Habit</th>
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
          <tr className="hover:bg-gray-50">
            <td className="border p-2 text-center">
              <Habit name="test habit" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
