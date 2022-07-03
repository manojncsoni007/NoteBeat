const getSortedByPriority = (notes,sortByPriority) => {
   if(sortByPriority){
       return notes.filter((note)=> note.priority === sortByPriority)
   }
   return notes;
}

export {getSortedByPriority}