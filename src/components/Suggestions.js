import Suggestion from "./Suggestion";
import {users} from "./User";

export default function Suggestions() {
  const suggestions = [
    {id: 0, userId: 1},
    {id: 1, userId: 6},
    {id: 2, userId: 8},
    {id: 3, userId: 7}
  ];
  return (
    <ul>
      {suggestions.map(suggestion => <Suggestion key={suggestion.id} user={users[suggestion.userId]} />)}
    </ul>
  );
}
