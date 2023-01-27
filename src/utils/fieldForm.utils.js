export function fieldFormUtils(state, setState, setModal){
    const saveMessage = (formValues) => {
        setState(formValues);
        setModal(true);
      };
    
      const handleFormChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
      }
    return {saveMessage,handleFormChange }
}