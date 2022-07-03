const getSortedByDate  = (notes, sortByDate) => {
    switch (sortByDate) {
        case "NEWEST":
          return [...notes].sort(
            (a, b) => new Date(b.created) - new Date(a.created)
          );
        case "OLDEST":
          return [...notes].sort(
            (a, b) => new Date(a.created) - new Date(b.created)
          );
        default:
          return notes;
      }
}

export { getSortedByDate }