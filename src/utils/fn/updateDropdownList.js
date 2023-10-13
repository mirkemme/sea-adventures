// ritorna l'array delle dropdown modificato in base a quello attualmente selezionato
export function updateDropdownList(dropdownList, idDropdown, option) {
  let updatedDropdownList = dropdownList.map((dropdown) => {
    if (dropdown.id === idDropdown)
      return { ...dropdown, isOpen: !dropdown.isOpen, selectedOption: option };
    else return { ...dropdown, isOpen: false, selectedOption: "" };
  });
  return updatedDropdownList;
}
