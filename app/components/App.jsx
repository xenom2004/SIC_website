export default function App({ people }) {
  // {console.log(people,"itemff")}
  const d = [];
  if (people) {
    const d = people.item;
    return (
      <Autocomplete
        defaultItems={d}
        label=""
        placeholder="Search a person"
        className="max-w-xs"
      >
        {(req) => <AutocompleteItem key={req.id}>{req.name}</AutocompleteItem>}
      </Autocomplete>
    );
  }
  return <div></div>;
}
